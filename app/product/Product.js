'use client'; // This is a client component

import React, { useState, useEffect } from 'react';
import TeaProduct from './TeaProduct';
import Link from 'next/link';
import './product.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { findShopName, getProduct, getShop } from '../components/module';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
// const radarData = {
//   張協興鐵觀音: {
//     labels: [
//       '焙烤香',
//       '果香',
//       '花香',
//       '甜香',
//       '草香',
//       '甜香',
//       '果仁香',
//       '木質香',
//     ],
//     datasets: [
//       {
//         label: '風味評分',
//         data: [5, 3, 3, 4, 3, 2, 2, 3],
//         backgroundColor: 'rgba(50, 157, 156, 0.2)',
//         borderColor: 'rgba(50, 157, 156, 1)',
//         borderWidth: 1,
//       },
//     ],
//   },
//   威叔鐵觀音紅茶: {
//     labels: [
//       '焙烤香',
//       '果香',
//       '花香',
//       '甜香',
//       '草香',
//       '甜香',
//       '果仁香',
//       '木質香',
//     ],
//     datasets: [
//       {
//         label: '風味評分',
//         data: [3, 2, 1, 2, 1, 4, 0, 2],
//         backgroundColor: 'rgba(50, 157, 156, 0.2)',
//         borderColor: 'rgba(50, 157, 156, 1)',
//         borderWidth: 1,
//       },
//     ],
//   },
//   寒舍文山包種茶: {
//     labels: [
//       '焙烤香',
//       '果香',
//       '花香',
//       '甜香',
//       '草香',
//       '甜香',
//       '果仁香',
//       '木質香',
//     ],
//     datasets: [
//       {
//         label: '風味評分',
//         data: [2, 2, 2, 0, 1, 3, 3, 4],
//         backgroundColor: 'rgba(50, 157, 156, 0.2)',
//         borderColor: 'rgba(50, 157, 156, 1)',
//         borderWidth: 1,
//       },
//     ],
//   },
//   威叔鐵觀音: {
//     labels: [
//       '焙烤香',
//       '果香',
//       '花香',
//       '甜香',
//       '草香',
//       '甜香',
//       '果仁香',
//       '木質香',
//     ],
//     datasets: [
//       {
//         label: '風味評分',
//         data: [4, 2, 1, 2, 3, 2, 0, 1],
//         backgroundColor: 'rgba(50, 157, 156, 0.2)',
//         borderColor: 'rgba(50, 157, 156, 1)',
//         borderWidth: 1,
//       },
//     ],
//   },
//   張協興文山包種茶: {
//     labels: [
//       '焙烤香',
//       '果香',
//       '花香',
//       '甜香',
//       '草香',
//       '甜香',
//       '果仁香',
//       '木質香',
//     ],
//     datasets: [
//       {
//         label: '風味評分',
//         data: [3, 4, 2, 1, 5, 2, 0, 1],
//         backgroundColor: 'rgba(50, 157, 156, 0.2)',
//         borderColor: 'rgba(50, 157, 156, 1)',
//         borderWidth: 1,
//       },
//     ],
//   },
//   寒舍鐵觀音紅茶: {
//     labels: [
//       '焙烤香',
//       '果香',
//       '花香',
//       '甜香',
//       '草香',
//       '甜香',
//       '果仁香',
//       '木質香',
//     ],
//     datasets: [
//       {
//         label: '風味評分',
//         data: [2, 3, 4, 4, 0, 1, 1, 3],
//         backgroundColor: 'rgba(50, 157, 156, 0.2)',
//         borderColor: 'rgba(50, 157, 156, 1)',
//         borderWidth: 1,
//       },
//     ],
//   },
// };
// const ProductData = [
//   {
//     id: 1,
//     src: 'images/張協興碳焙鐵觀音.png',
//     shop: '張協興茶行',
//     name: '碳焙鐵觀音',
//     description: <Radar data={張協興鐵觀音} />,
//     price: 555,
//   },
//   {
//     id: 4,
//     src: 'images/威叔鐵觀音紅茶.png',
//     shop: '威叔茶莊',
//     name: '鐵觀音紅茶',
//     description: <Radar data={威叔鐵觀音紅茶} />,
//     price: 279,
//   },
//   {
//     id: 5,
//     src: 'images/寒舍包種茶.png',
//     shop: '寒舍茶坊',
//     name: '包種茶',
//     description: <Radar data={寒舍文山包種茶} />,
//     price: 333,
//   },
//   {
//     id: 3,
//     src: 'images/威叔鐵觀音.png',
//     shop: '威叔茶莊',
//     name: '鐵觀音',
//     description: <Radar data={威叔鐵觀音} />,
//     price: 590,
//   },
//   {
//     id: 2,
//     src: 'images/張協興包種茶.png',
//     shop: '張協興茶行',
//     name: '文山包種茶',
//     description: <Radar data={張協興文山包種茶} />,
//     price: 555,
//   },
//   {
//     id: 6,
//     src: 'images/寒舍鐵觀音紅茶.png',
//     shop: '寒舍茶坊',
//     name: '鐵觀音紅茶',
//     description: <Radar data={寒舍鐵觀音紅茶} />,
//     price: 555,
//   },
// ];

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [shops, setShops] = useState([]);
  useEffect(() => {
    getShop(setShops);
    getProduct(setProductData);
  }, []);
  function findShopName(shopId) {
    const foundShop = shops.find((item) => item.shop_id === shopId);
    return foundShop ? foundShop.shop_name : '未知商店';
  }
  return (
    <div className="page-layout">
      {/* {console.log(productData, shops)} */}
      <div className="grid-rows-1 ml-10 mr-10 flex items-center justify-center main-vision">
        <h4 className="text-4xl text-center big_title">
          木柵<span className="tea">茶</span>本舖
        </h4>
        <img src="/images/5730.png" className="decoration" />
        <img
          src="/images/leaf.png"
          style={{ width: '3%', marginTop: '-1rem' }}
        />
      </div>
      <div className="grid-rows-1 h-20 ml-10 mr-10 my-6 flex items-center justify-center banner">
        <div className="content">
          <div className="text-xl fw-700 banner-text">找好茶推薦系統</div>
          <Link href="/goodtea" className="mx-auto">
            <button className="banner-button">前往</button>
          </Link>
        </div>
      </div>
      <div className="grid justify-around gap-x-12 gap-y-12 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-10 mr-10">
        {productData &&
          productData.map((product) => (
            <div key={product.id}>
              <TeaProduct
                product={product}
                src={product.prod_pic}
                shop={findShopName(product.shop_id)}
                name={product.prod_name}
                description={
                  <Radar
                    data={{
                      labels: [
                        '焙烤香 - 烘焙味',
                        '焙烤香 - 煙燻味',
                        '果香 - 乾果味',
                        '花香 - 清香',
                        '花香 - 濃香',
                        '甜香 - 糖香味',
                        '甜香 - 蜜香味',
                        '青草香 - 草香味',
                        '果仁香 - 堅果味',
                        '木質香',
                        '酸味',
                        '甜味',
                        '圓滑感',
                        '厚重感',
                        '甘醇度',
                        '喉後韻',
                        '回香感',
                      ],
                      datasets: [
                        {
                          label: '風味評分',
                          data: product.radar_data,
                          backgroundColor: 'rgba(50, 157, 156, 0.2)',
                          borderColor: 'rgba(50, 157, 156, 1)',
                          borderWidth: 1,
                        },
                      ],
                    }}
                  />
                }
                price={product.price}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
