import { createClient } from '@supabase/supabase-js';

// const SUPABASE_URI = process.env.NEXT_PUBLIC_SUPABASE_URI;
// const SUPABASE_SECRET = process.env.NEXT_PUBLIC_SUPABASE_SECRET;

// export const supabase = createClient(SUPABASE_URI, SUPABASE_SECRET);

export const supabase = createClient(
  'https://zdxlzmekrckaffbzupmh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkeGx6bWVrcmNrYWZmYnp1cG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzNzM1MTEsImV4cCI6MjAwMzk0OTUxMX0.YI14GVJfa6H0eXOUqCKXT8AHLxK4GcAb8UYPTH4QLKQ'
);
