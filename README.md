#

Used to replicate issue reported in https://github.com/supabase/supabase/issues/29090

Namely that JSONB inserts, when run concurrently against transaction mode pooler, result in unexpected data being saved.

## Expected

All tests should pass, and database should only have jsonb records that look like:
`{"foo": "bar"}`

## Actual

Some tests fail, and the database has some records that look like:
`"{\"foo\":\"bar\"}"`


## Running

1. Create a supabase project and get the DB url
2. pnpm install
3. Run against 6543:
    DATABASE_URL='<DB_URL>:6543/postgres' pnpm run test
4. Run against 5432:
    DATABASE_URL='<DB_URL>:5432/postgres' pnpm run test