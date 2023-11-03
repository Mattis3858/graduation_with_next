'use client';
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

// import supabase from '../../api/index';

const supabase = createClient(
  process.env.SUPABASE_URI,
  process.env.SUPABASE_SECRET
);
export default function Home() {
  const { data: session, status } = useSession();
  const [userID, setUserID] = useState(0);

  const [buyRecord, setBuyRecord] = useState([]);
  const [product, setProduct] = useState([]);
  async function getProduct() {
    const { data } = await supabase.from('product').select();
    // console.log(data);
    setProduct(data);
  }
  async function getBuyRecord() {
    // console.log(userID);
    const { data } = await supabase
      .from('buy_record')
      .select('*')
      .eq('user_id', userID);
    // console.log(data);
    setBuyRecord(data);
  }
  async function getUserID() {
    if (session?.user?.name) {
      const { data: user, error } = await supabase
        .from('user')
        .select('*')
        .eq('user_name', session.user.name);
      // console.log(user[0].user_id);
      setUserID(user[0].user_id);
    }
  }
  useEffect(() => {
    getUserID();
  }, [session]);

  useEffect(() => {
    getBuyRecord();
    getProduct();
  }, []);
  const sortedPurchaseData = buyRecord
    .slice()
    .sort((a, b) => new Date(b.created_time) - new Date(a.created_time));
  sortedPurchaseData.map((data, index) => {
    data.created_time = new Date(data.created_time);
    const year = data.created_time.getFullYear();
    const month = (data.created_time.getMonth() + 1)
      .toString()
      .padStart(2, '0'); // 月份从0开始，需要加1，并且保证两位数
    const day = data.created_time.getDate().toString().padStart(2, '0');
    const formattedDate = year + '-' + month + '-' + day;
    data.created_time = formattedDate;
  });
  // console.log(sortedPurchaseData);
  // const purchaseData = [
  //   {
  //     date: '2023-08-19',
  //     productName: '張協興鐵觀音',
  //     amount: 5,
  //     price: 5000,
  //   },
  //   {
  //     date: '2023-08-18',
  //     productName: '威叔鐵觀音紅茶',
  //     amount: 7,
  //     price: 2999,
  //   },
  //   {
  //     date: '2023-6-15',
  //     productName: '威叔鐵觀音',
  //     amount: 4,
  //     price: 1500,
  //   },
  //   // ...其他購買紀錄
  // ];

  return (
    <main className="bg-white p-6 pt-0 rounded-lg shadow-md">
      <h1 className=" text-4xl mt-6 text-center big_title">購買紀錄</h1>
      <table className="min-w-full border rounded-lg overflow-hidden mt-6">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left py-2 px-3">購買日期</th>
            <th className="text-left py-2 px-3">產品名稱</th>
            <th className="text-left py-2 px-3">數量</th>
            <th className="text-left py-2 px-3">金額</th>
          </tr>
        </thead>
        {/* {console.log(sortedPurchaseData)} */}
        <tbody>
          {sortedPurchaseData.map((purchase, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <td className="py-2 px-3">{purchase.created_time}</td>
              <td className="py-2 px-3">
                {product.length !== 0 &&
                  product.find((item) => item.prod_id === purchase.prod_id)
                    .prod_name}
              </td>
              <td className="py-2 px-3">{purchase.buy_qty}</td>
              <td className="py-2 px-3">{purchase.buy_amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
