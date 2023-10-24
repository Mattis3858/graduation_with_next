'use client'; // This is a client component

import React, { useState } from 'react';
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

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};
const ProductData = [
  {
    id: 1,
    src: 'images/tea-1.jpg',
    shop: '張協興',
    name: '炭焙鐵觀音',
    description: <Radar data={data} />,
    price: 555,
  },
  {
    id: 2,
    src: 'images/tea-1.jpg',
    shop: '威叔',
    name: '鐵觀音紅茶',
    description: <Radar data={data} />,
    price: 279,
  },
  {
    id: 3,
    src: 'images/tea-1.jpg',
    shop: '寒舍',
    name: '文山包種茶',
    description: <Radar data={data} />,
    price: 333,
  },
  {
    id: 4,
    src: 'images/tea-1.jpg',
    shop: '威叔',
    name: '文山包種茶',
    description: <Radar data={data} />,
    price: 590,
  },
  {
    id: 5,
    src: 'images/tea-1.jpg',
    shop: '張協興',
    name: '文山包種茶',
    description: <Radar data={data} />,
    price: 555,
  },
];

const Product = () => {
  return (
    <div className="page-layout">
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
          <Link href="/goodtea">
            <button className="banner-button">前往</button>
          </Link>
        </div>
      </div>
      <div className="grid justify-around gap-x-12 gap-y-12 grid-cols-3 ml-10 mr-10">
        {ProductData.map((product) => (
          <div key={product.id}>
            <TeaProduct
              product={product}
              src={product.src} //
              shop={product.shop}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
