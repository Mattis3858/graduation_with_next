'use client';
import React from 'react';
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {
  findUserRole,
  getReservationRecord,
  getShop,
  getShopID,
  getUserID,
  setReservation,
} from '../../components/module';

export default function Home() {
  const { data: session, status } = useSession();
  // console.log(session);
  const [shop, setShop] = useState([]);
  const [shopID, setShopID] = useState(0);
  const [userID, setUserID] = useState(0);
  const [reservationCustomer, setReservationCustomer] = useState([]);
  const [reservationRecord, setReservationRecord] = useState([]);
  const [roleID, setRoleID] = useState(0);

  useEffect(() => {
    roleID === 1 && getShopID(setShopID, session);
  }, [roleID]);
  useEffect(() => {
    roleID === 1 && setReservation(setReservationCustomer, shopID);
  }, [shopID]);

  useEffect(() => {
    getUserID(setUserID, session);
    findUserRole(setRoleID, session);
  }, [session]);

  useEffect(() => {
    getShop(setShop);
    getReservationRecord(setReservationRecord, userID);
  }, [userID, session]);

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
            <th className="py-2 px-3 text-left">時間</th>
            <th className="py-2 px-3 text-left">預約者</th>
            <th className="py-2 px-3 text-left">預約人數</th>
            {roleID === 1 && (
              <th className="py-2 px-3 text-left">預約者電話</th>
            )}
            {roleID === 2 && <th className="py-2 px-3 text-left">預約店家</th>}
          </tr>
        </thead>
        <tbody>
          {roleID === 2 &&
            sortedReservationData &&
            sortedReservationData.map((appointment, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                {console.log(appointment)}
                <td className="py-2 px-3">{appointment.reserv_date}</td>
                <td className="py-2 px-3">
                  {appointment.reserv_time
                    ? appointment.reserv_time.substring(0, 5)
                    : appointment.reserv_time}
                </td>
                <td className="py-2 px-3">{appointment.reserv_name}</td>
                <td className="py-2 px-3">{appointment.number_of_people}</td>
                <td className="py-2 px-3">
                  {shop.length !== 0 &&
                    shop.find((item) => item.shop_id === appointment.shop_id)
                      .shop_name}
                </td>
              </tr>
            ))}
          {console.log(reservationCustomer)}
          {roleID === 1 &&
            reservationCustomer &&
            reservationCustomer.map((appointment, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                <td className="py-2 px-3">{appointment.reserv_date}</td>
                <td className="py-2 px-3">
                  {appointment.reserv_time
                    ? appointment.reserv_time.substring(0, 5)
                    : appointment.reserv_time}
                </td>
                <td className="py-2 px-3">{appointment.reserv_name}</td>
                <td className="py-2 px-3">{appointment.number_of_people}</td>
                <td className="py-2 px-3">{appointment.phone_number}</td>
              </tr>
            ))}
          {console.log(roleID, reservationCustomer)}
        </tbody>
      </table>
    </main>
  );
}
