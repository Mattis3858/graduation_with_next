import React from 'react';
import TeaProduct from './TeaProduct';
import Link from 'next/link';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const ProductData = [
  {
    id: 1,
    src: 'images/tea-1.jpg',
    shop: '張協興',
    name: '炭焙鐵觀音',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus quam sem, vel euismod metus elementum quis. Proin libero purus, feugiat non ligula et, mattis congue ante. Proin posuere lacinia vulputate. Sed efficitur pretium tincidunt. Morbi aliquam nisi ex, ac consectetur ipsum auctor eget. ',
    price: 555,
  },
  {
    id: 2,
    src: 'images/tea-1.jpg',
    shop: '威叔',
    name: '鐵觀音紅茶',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus quam sem, vel euismod metus elementum quis. Proin libero purus, feugiat non ligula et, mattis congue ante. Proin posuere lacinia vulputate. Sed efficitur pretium tincidunt. Morbi aliquam nisi ex, ac consectetur ipsum auctor eget. ',
    price: 279,
  },
  {
    id: 3,
    src: 'images/tea-1.jpg',
    shop: '寒舍',
    name: '文山包種茶',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus quam sem, vel euismod metus elementum quis. Proin libero purus, feugiat non ligula et, mattis congue ante. Proin posuere lacinia vulputate. Sed efficitur pretium tincidunt. Morbi aliquam nisi ex, ac consectetur ipsum auctor eget. ',
    price: 333,
  },
  {
    id: 4,
    src: 'images/tea-1.jpg',
    shop: '威叔',
    name: '文山包種茶',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus quam sem, vel euismod metus elementum quis. Proin libero purus, feugiat non ligula et, mattis congue ante. Proin posuere lacinia vulputate. Sed efficitur pretium tincidunt. Morbi aliquam nisi ex, ac consectetur ipsum auctor eget. ',
    price: 590,
  },
  {
    id: 5,
    src: 'images/tea-1.jpg',
    shop: '張協興',
    name: '文山包種茶',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus quam sem, vel euismod metus elementum quis. Proin libero purus, feugiat non ligula et, mattis congue ante. Proin posuere lacinia vulputate. Sed efficitur pretium tincidunt. Morbi aliquam nisi ex, ac consectetur ipsum auctor eget. ',
    price: 555,
  },
];
const Product = () => {

  return (
    <div className='page-layout'>
      <div className="grid grid-rows-1 ml-10 mr-10 flex items-center justify-center main-vision">
        <h4 className="text-4xl mt-6 text-center title">木柵<span className='tea'>茶</span>本舖</h4>
        <img src='/images/5730.png' className='decoration'/>
        <img src='/images/leaf.png' className='leaf' />
      </div>
      <div className="grid grid-rows-1 h-20 ml-10 mr-10 my-6 flex items-center justify-center banner">
        <div className='content'>
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
