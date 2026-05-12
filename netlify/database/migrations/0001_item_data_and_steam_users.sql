CREATE TABLE IF NOT EXISTS item_data (
  file_name text PRIMARY KEY,
  data jsonb NOT NULL,
  source_updated_at timestamptz NOT NULL DEFAULT now(),
  seeded_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS steam_users (
  steam_id text PRIMARY KEY,
  display_name text,
  avatar_url text,
  profile_url text,
  last_login_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
