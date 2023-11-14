import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URI,
  process.env.SUPABASE_SECRET
);

export async function getUser(setUser, session) {
  if (session?.user?.name) {
    const { data: user, error } = await supabase
      .from('user')
      .select('*')
      .eq('user_name', session.user.name);
    setUser(user[0]);
  }
}
export async function getShop(setShop) {
  const { data } = await supabase.from('shop').select('*');
  setShop(data);
}
