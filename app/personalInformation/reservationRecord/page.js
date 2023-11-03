'use client';
import React from 'react';
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const supabase = createClient(
  process.env.SUPABASE_URI,
  process.env.SUPABASE_SECRET
);

export default function Home() {
  const { data: session, status } = useSession();

  const [shop, setShop] = useState([]);
  const [userID, setUserID] = useState(0);
  const [reservationRecord, setReservationRecord] = useState([]);
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
  async function getShop() {
    const { data } = await supabase.from('shop').select('*');
    setShop(data);
  }

  async function getReservationRecord() {
    const { data } = await supabase
      .from('reservation_record')
      .select('*')
      .eq('user_id', userID);

    setReservationRecord(data);
  }

  useEffect(() => {
    getShop();
    getReservationRecord();
  }, [userID]);

  const sortedReservationData = reservationRecord
    .slice()
    .sort((a, b) => new Date(b.created_time) - new Date(a.created_time));

  sortedReservationData.forEach((data) => {
    data.created_time = new Date(data.created_time);
    const year = data.created_time.getFullYear();
    const month = (data.created_time.getMonth() + 1)
      .toString()
      .padStart(2, '0');
    const day = data.created_time.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    data.created_time = formattedDate;
  });

  return (
    <main className="bg-white p-6 pt-0 rounded-lg shadow-md">
      <h1 className="text-4xl text-center mt-6 mb-4 big_title">預約紀錄</h1>
      <table className="min-w-full bg-white border rounded-lg overflow-hidden mt-6">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-3 text-left">預約日期</th>
            <th className="py-2 px-3 text-left">預約店家</th>
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
                {shop.length !== 0 &&
                  shop.find((item) => item.shop_id === appointment.shop_id)
                    .shop_name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
