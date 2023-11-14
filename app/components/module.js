import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URI,
  process.env.SUPABASE_SECRET
);

export async function getShop(setShop) {
  const { data } = await supabase.from('shop').select('*');
  setShop(data);
}
