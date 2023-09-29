'use client';
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';

const supabase = createClient(
  'https://zdxlzmekrckaffbzupmh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkeGx6bWVrcmNrYWZmYnp1cG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzNzM1MTEsImV4cCI6MjAwMzk0OTUxMX0.YI14GVJfa6H0eXOUqCKXT8AHLxK4GcAb8UYPTH4QLKQ'
);
export default function Home() {
  const [shop, setShop] = useState([]);
  const [reservationRecord, setReservationRecord] = useState([]);
  async function getShop(id) {
    const { data } = await supabase.from('shop').select();
    setShop(data);
    console.log(data);
  }
  async function getReservationRecord() {
    const { data } = await supabase.from('reservation_record').select();
    console.log(data);
    setReservationRecord(data);
  }
  useEffect(() => {
    getShop();
    getReservationRecord();
  }, []);
  const sortedReservationData = reservationRecord
    .slice()
    .sort((a, b) => new Date(b.created_time) - new Date(a.created_time));
  sortedReservationData.map((data, index) => {
    data.created_time = new Date(data.created_time);
    const year = data.created_time.getFullYear();
    const month = (data.created_time.getMonth() + 1)
      .toString()
      .padStart(2, '0'); // 月份从0开始，需要加1，并且保证两位数
    const day = data.created_time.getDate().toString().padStart(2, '0');
    const formattedDate = year + '-' + month + '-' + day;
    data.created_time = formattedDate;
  });
  // const appointmentData = [
  //   {
  //     date: '2023-06-21',
  //     shopName: '張協興',
  //   },
  //   {
  //     date: '2023-08-23',
  //     shopName: '威叔',
  //   },
  //   {
  //     date: '2023-08-21',
  //     shopName: '張協興',
  //   },
  //   // ...其他預約紀錄
  // ];
  return (
    <main className="">
      <h1 className="font-bold text-4xl mt-6 text-center">預約紀錄</h1>
      <table className="min-w-full border rounded-lg overflow-hidden mt-6">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left py-2 px-3">預約日期</th>
            <th className="text-left py-2 px-3">預約店家</th>
          </tr>
        </thead>
        <tbody>
          {sortedReservationData.map((appointment, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <td className="py-2 px-3">{appointment.reserv_date}</td>
              <td className="py-2 px-3">
                {
                  shop.find((item) => item.shop_id === appointment.shop_id)
                    .shop_name
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
