-- WestPacific LOCAL ART Society - Supabase PostgreSQL Schema
create table public.artist_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  artist_name text not null,
  email text not null,
  phone text,
  discipline text not null,
  opportunity_type text not null,
  booth_tier text check (booth_tier in ('standard_120', 'full_150')),
  booth_fee_cad integer check (booth_fee_cad in (120, 150)),
  portfolio_url text,
  accommodations text,
  status text default 'pending'
);

create table public.workshop_registrations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  workshop_id text not null,
  full_name text not null,
  contact_info text not null,
  accommodations text,
  status text default 'confirmed'
);
