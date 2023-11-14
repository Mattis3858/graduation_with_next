'use client';
import React, { useEffect, useState } from 'react';
import Teashop from './Teashop';
import '../product/product.css';
import { getShop } from '../components/module';

const Reservation = () => {
  const [shop, setShop] = useState();

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
      </div>
    </div>
  );
};

export default Reservation;
