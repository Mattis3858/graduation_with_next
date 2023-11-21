import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URI,
  process.env.SUPABASE_SECRET
);

export const flavorTable = {
  b_baked: '焙烤香 - 烘焙味',
  b_smoky: '焙烤香 - 煙燻味',
  f_dried_fruit: '果香 - 乾果味',
  f_heavy: '花香 - 清香',
  f_light: '花香 - 濃香',
  s_sweet: '甜香 - 糖香味',
  s_honey: '甜香 - 蜜香味',
  g_grass: '青草香 - 草香味',
  n_nutty: '果仁香 - 堅果味',
  w_woody: '木質香',
  sour: '酸味',
  sweet: '甜味',
  sleek: '圓滑感',
  thick: '厚重感',
  glycol: '甘醇度',
  after_rhyme: '喉後韻',
  aftertaste: '回香感',
};
export async function getUserID(setUserID, session) {
  if (session?.user?.name) {
    const { data: user, error } = await supabase
      .from('user')
      .select('*')
      .eq('user_name', session.user.name);
    setUserID(user[0].user_id);
  }
}
export async function getShopID(setShopID, session) {
  if (session?.user?.name) {
    const { data: user, error } = await supabase
      .from('shop')
      .select('*')
      .eq('shop_name', session.user.name);
    setShopID(user[0].shop_id);
  }
}
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

export async function getProduct(setProduct) {
  const { data, error } = await supabase.from('product').select('*');
  setProduct(data);
}

export async function getBuyRecord(setBuyRecord, userID) {
  // console.log(userID);
  const { data } = await supabase
    .from('buy_record')
    .select('*')
    .eq('user_id', userID);
  // console.log(data);
  setBuyRecord(data);
}

export async function getReservationRecord(setReservationRecord, userID) {
  console.log(userID);
  const { data } = await supabase
    .from('reservation_record')
    .select('*')
    .eq('user_id', userID);
  console.log(data);
  setReservationRecord(data);
}
export async function getPostTestRecord(setPostTestRecord, userID) {
  const { data } = await supabase
    .from('find_good_tea_record')
    .select('*')
    .eq('input_type', 1)
    .eq('user_id', userID);
  // console.log(data);
  if (data) {
    const sortedData = data
      .slice()
      .sort((a, b) => new Date(b.created_time) - new Date(a.created_time));
    sortedData.forEach((item) => {
      const originalDate = new Date(item.created_time);
      const year = originalDate.getFullYear();
      const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
      const day = originalDate.getDate().toString().padStart(2, '0');
      item.created_time = `${year}/${month}/${day}`;
    });
    setPostTestRecord(sortedData);
  } else {
    setPostTestRecord([]);
  }
}

export async function getPreviousTestRecord(setPreviousTestRecord, userID) {
  const { data } = await supabase
    .from('find_good_tea_record')
    .select('*')
    .eq('user_id', userID)
    .eq('input_type', 0);

  if (data) {
    const sortedData = data
      .slice()
      .sort((a, b) => new Date(b.created_time) - new Date(a.created_time));
    sortedData.forEach((item) => {
      const originalDate = new Date(item.created_time);
      const year = originalDate.getFullYear();
      const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
      const day = originalDate.getDate().toString().padStart(2, '0');
      item.created_time = `${year}/${month}/${day}`;
    });
    setPreviousTestRecord(sortedData);
  } else {
    setPreviousTestRecord([]);
  }
}
export async function findUserRole(setRoleID, session) {
  if (session?.user?.name) {
    const { data: user, error } = await supabase
      .from('user')
      .select('*')
      .eq('user_name', session.user.name);
    // console.log(user[0].role_id);
    setRoleID(user[0].role_id);
  }
}

export async function findShopName(shopId) {
  const { data: data, error } = await supabase
    .from('shop')
    .select('*')
    .eq('shop_id', shopId);
  console.log(data[0].shop_name);
  return data[0].shop_name;
}
