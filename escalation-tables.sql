-- Dar D'Art — escalation + learning tables
-- Run ONCE in the Supabase SQL editor (project knvfrjetikwmeoxcrfvg).
-- n8n has no Postgres/DDL access, so these must be created here by hand.
-- After running, the WhatsApp bot's escalation persistence, answer relay,
-- and learned-answer reuse become fully functional (no n8n changes needed).

create table if not exists escalations (
  id serial primary key,
  guest_phone text not null,          -- bare digits, e.g. 212612345678
  guest_name text,
  guest_language text,                -- e.g. 'en', 'fr' — so the answer is relayed in the guest's language
  question text not null,             -- the guest's request, summarized by the agent (English)
  context text,                       -- booking details (date, people, amounts) or 'none'
  status text not null default 'pending',  -- pending | answered | expired
  answer text,
  created_at timestamptz default now(),
  answered_at timestamptz
);

create table if not exists learned_answers (
  id serial primary key,
  question_summary text not null,     -- normalized/general form of the question
  answer text not null,
  source_escalation_id int references escalations(id),
  created_at timestamptz default now()
);

-- RLS on, no anon/authenticated policies. n8n connects with the service_role
-- key (Supabase credential "Supabase account 2"), which bypasses RLS.
alter table escalations enable row level security;
alter table learned_answers enable row level security;
