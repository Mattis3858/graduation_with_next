'use client';
import React, { useState } from 'react';
import Teashop from './Teashop';

const Reservation = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedTeaShop, setSelectedTeaShop] = useState(null);
  const teaShops = [
    {
      id: 1,
      name: '茶行1',
      image: 'tea_shop_1.jpg',
      description: '這是茶行1的簡介。',
    },
    {
      id: 2,
      name: '茶行2',
      image: 'tea_shop_2.jpg',
      description: '這是茶行2的簡介。',
    },
    {
      id: 3,
      name: '茶行3',
      image: 'tea_shop_3.jpg',
      description: '這是茶行3的簡介。',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // 在這裡處理預約的邏輯，例如發送預約請求給伺服器等等
    console.log('預約提交:', name, date, time, selectedTeaShop);
    // 清空表單
    setName('');
    setDate('');
    setTime('');
    setSelectedTeaShop(null);
  };

  const handleTeaShopClick = (teaShop) => {
    setSelectedTeaShop(teaShop);
  };

  return (
    <div>
      <div className="font-bold text-4xl mt-6 text-center">茶行預約系統</div>
      <div className="mt-6 grid justify-around gap-x-12 gap-y-12 grid-cols-3 ml-10 mr-10">
        <Teashop />
        <Teashop />
        <Teashop />
      </div>
      {/* {selectedTeaShop && (
        <div className="modal">
          <h3>{selectedTeaShop.name}</h3>
          <p>{selectedTeaShop.description}</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label>姓名：</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>日期：</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label>時間：</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
            <button type="submit">預約品茶</button>
          </form>
        </div>
      )} */}
    </div>
  );
};

export default Reservation;
