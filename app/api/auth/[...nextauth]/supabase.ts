import { createClient } from '@supabase/supabase-js';

const SUPABASE_URI = process.env.NEXT_PUBLIC_SUPABASE_URI;
const SUPABASE_SECRET = process.env.NEXT_PUBLIC_SUPABASE_SECRET;

export const supabase = createClient(SUPABASE_URI, SUPABASE_SECRET);
