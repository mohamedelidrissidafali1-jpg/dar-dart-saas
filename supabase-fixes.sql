-- ============================================================================
-- RUN THIS IN SUPABASE SQL EDITOR (Dar D'Art project)
-- Date: 2026-07-11 — policy tightening + profile-creation trigger
-- All statements are idempotent: safe to run more than once.
-- ============================================================================

-- ── 1. checkout_surveys: "insert own survey" policy must apply to
--       authenticated users only, not public ──────────────────────────────
drop policy if exists "Users can insert own survey" on public.checkout_surveys;
create policy "Users can insert own survey"
  on public.checkout_surveys
  for insert
  to authenticated
  with check (auth.uid() = user_id);

-- ── 2. checked_out_guests: all writes now go through the server-side
--       service role (the /api/submit-checkout route), so browser clients
--       no longer need ANY access. Recommended: drop the client policies. ──
drop policy if exists "Allow authenticated insert" on public.checked_out_guests;
drop policy if exists "Allow authenticated select" on public.checked_out_guests;
-- keep RLS on so only the service role (which bypasses RLS) can touch it
alter table public.checked_out_guests enable row level security;

-- ── 3. Ensure RLS is enabled on the n8n bot tables (they were readable
--       with the public anon key during the 2026-07-11 audit) ──────────────
alter table if exists public.whatsapp_bookings      enable row level security;
alter table if exists public.whatsapp_conversations enable row level security;
alter table if exists public.processed_messages     enable row level security;

-- ── 4. Auto-create a profile row when a user signs up (TASK 9) ─────────────
--       Makes profile creation robust: even if the client-side upsert never
--       runs (e.g. email-confirmation flow), the row exists and the guest is
--       routed to /complete-profile to fill in the details.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, first_name, language, riad, phone, checked_out)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', ''), '', '', '', false)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ── 5. Make sure clients can still update their own profile row
--       (the trigger-created row is completed at /complete-profile) ─────────
alter table public.profiles enable row level security;
drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
  on public.profiles
  for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

drop policy if exists "Users can insert own profile" on public.profiles;
create policy "Users can insert own profile"
  on public.profiles
  for insert
  to authenticated
  with check (auth.uid() = id);

drop policy if exists "Users can read own profile" on public.profiles;
create policy "Users can read own profile"
  on public.profiles
  for select
  to authenticated
  using (auth.uid() = id);
