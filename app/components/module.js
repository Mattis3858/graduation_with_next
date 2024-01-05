import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.SUPABASE_URI,
  process.env.SUPABASE_SECRET
);
export const chineseToEnglishAttributeLabels = {
  '焙烤香 - 烘焙味': 'b_baked',
  '焙烤香 - 煙燻味': 'b_smoky',
  '果香 - 乾果味': 'f_dried_fruit',
  '花香 - 清香': 'f_light',
  '花香 - 濃香': 'f_heavy',
  '甜香 - 糖香味': 's_sweet',
  '甜香 - 蜜香味': 's_honey',
  '青草香 - 草香味': 'g_grass',
  '果仁香 - 堅果味': 'n_nutty',
  木質香: 'w_woody',
  酸味: 'sour',
  甜味: 'sweet',
  圓滑感: 'sleek',
  厚重感: 'thick',
  甘醇度: 'glycol',
  喉後韻: 'after_rhyme',
  回香感: 'aftertaste',
};
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
/**
 * Retrieves the user ID from a database based on the user's name stored in the `session` object
 * and updates the `setUserID` state variable with the retrieved user ID.
 *
 * @param {Function} setUserID - A function that updates the user ID state variable.
 * @param {Object} session - An object that contains user information, including the user's name.
 */
export async function getUserID(setUserID, session) {
  if (session?.user?.name) {
    try {
      const { data: user } = await supabase
        .from('user')
        .select('user_id')
        .eq('user_name', session.user.name)
        .single();

      if (user) {
        setUserID(user.user_id);
      }
    } catch (error) {
      console.error('Error retrieving user ID:', error);
    }
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
  const { data, error } = await supabase
    .from('product')
    .select('*')
    .order('shop_id', { ascending: true });
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
  // console.log(userID);
  const { data } = await supabase
    .from('reservation_record')
    .select('*')
    .eq('user_id', userID);
  // console.log(data);
  setReservationRecord(data);
}

export async function setReservation(setReservationCustomer, userID) {
  const { data } = await supabase
    .from('reservation_record')
    .select('*')
    .eq('shop_id', userID);
  setReservationCustomer(data);
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
  // console.log(data[0].shop_name);
  return data[0].shop_name;
}

export async function saveFindGoodTeaRecord(
  userID,
  input_type,
  data,
  test_result
) {
  const translatedData = translateAttributesToEnglish(data);
  // console.log(userID, input_type, translatedData, test_result);
  const { data: findGoodTeaRecord, error } = await supabase
    .from('find_good_tea_record')
    .upsert([{ user_id: userID, input_type, ...translatedData, test_result }]);
}

export const translateAttributesToEnglish = (attributes) => {
  const translatedAttributes = {};
  for (const key in attributes) {
    if (chineseToEnglishAttributeLabels[key]) {
      translatedAttributes[chineseToEnglishAttributeLabels[key]] =
        attributes[key];
    }
  }
  return translatedAttributes;
};
