import { createClient } from '@supabase/supabase-js';

const SUPABASE_URI = process.env.SUPABASE_URI;
const SUPABASE_SECRET = process.env.SUPABASE_SECRET;

export const supabase = createClient(SUPABASE_URI, SUPABASE_SECRET);
