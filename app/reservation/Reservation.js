'use client';
import React, { useEffect, useState } from 'react';
import Teashop from './Teashop';
import '../product/product.css';
import { createClient } from '@supabase/supabase-js';
import { getShop } from '../components/module';

const Reservation = () => {
  const supabase = createClient(
    process.env.SUPABASE_URI,
    process.env.SUPABASE_SECRET
  );
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedTeaShop, setSelectedTeaShop] = useState(null);
  const [shop, setShop] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 在這裡處理預約的邏輯，例如發送預約請求給伺服器等等
    // console.log('預約提交:', name, date, time, selectedTeaShop);
    // 清空表單
    setName('');
    setDate('');
    setTime('');
    setSelectedTeaShop(null);
  };

  const handleTeaShopClick = (teaShop) => {
    setSelectedTeaShop(teaShop);
  };
  useEffect(() => {
    getShop(setShop);
  }, []);
  return (
    <div className="page-layout">
      <div className="grid-rows-1 ml-10 mr-10 flex items-center justify-center main-vision">
        <h4 className="text-4xl text-center big_title">
          <span className="tea">茶</span>行預約系統
        </h4>
        {/* <img src='/images/5730.png' className='decoration'/> */}
        <img
          src="/images/leaf.png"
          style={{ width: '3%', marginTop: '-1rem' }}
        />
      </div>
      {/* <div className="font-bold text-4xl mt-6 text-center">茶行預約系統</div> */}
      <div className="mt-6 grid justify-around gap-x-12 gap-y-12 grid-cols-3 ml-10 mr-10">
        {shop &&
          shop.map((item, index) => {
            return (
              <Teashop
                teaShopName={item.shop_name}
                src={item.image_src}
                description={item.description}
                shopID={item.shop_id}
                key={index}
              />
            );
            // console.log(item.shop_name);
          })}
        {/* <Teashop
          teaShopName="張協興茶行"
          src="images/張協興茶行.jpg"
          description="1954年由木柵茶區最著名的老茶人張丁頂創立的張協興茶行，傳承著六十幾年的炭焙方式。"
        />
        <Teashop
          teaShopName="威叔茶莊"
          src="images/威叔茶莊.jpg"
          description="有機茶園座落於貓空纜車貓空站正前方山坡上，距離貓空站僅150公尺，步行3~5分鐘即可到達。"
        />
        <Teashop
          teaShopName="寒舍茶坊"
          src="images/寒舍茶莊.jpg"
          description="寒舍茶坊「寒舍」成立於民國80年，因當時的建築為茅草屋故而取名「寒舍」。"
        /> */}
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
