import React from 'react';
import TeaProduct from './TeaProduct';
import Link from 'next/link';

const ProductData = [
  {
    id: 1,
    src: 'images/green-tea.png',
    shop: '張協興',
    name: '炭焙鐵觀音',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus quam sem, vel euismod metus elementum quis. Proin libero purus, feugiat non ligula et, mattis congue ante. Proin posuere lacinia vulputate. Sed efficitur pretium tincidunt. Morbi aliquam nisi ex, ac consectetur ipsum auctor eget. ',
    price: 555,
  },
  {
    id: 2,
    src: 'images/green-tea.png',
    shop: '威叔',
    name: '鐵觀音紅茶',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus quam sem, vel euismod metus elementum quis. Proin libero purus, feugiat non ligula et, mattis congue ante. Proin posuere lacinia vulputate. Sed efficitur pretium tincidunt. Morbi aliquam nisi ex, ac consectetur ipsum auctor eget. ',
    price: 279,
  },
  {
    id: 3,
    src: 'images/green-tea.png',
    shop: '寒舍',
    name: '文山包種茶',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus quam sem, vel euismod metus elementum quis. Proin libero purus, feugiat non ligula et, mattis congue ante. Proin posuere lacinia vulputate. Sed efficitur pretium tincidunt. Morbi aliquam nisi ex, ac consectetur ipsum auctor eget. ',
    price: 333,
  },
  {
    id: 4,
    src: 'images/green-tea.png',
    shop: '威叔',
    name: '文山包種茶',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus quam sem, vel euismod metus elementum quis. Proin libero purus, feugiat non ligula et, mattis congue ante. Proin posuere lacinia vulputate. Sed efficitur pretium tincidunt. Morbi aliquam nisi ex, ac consectetur ipsum auctor eget. ',
    price: 590,
  },
  {
    id: 5,
    src: 'images/green-tea.png',
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
      <div className="font-bold text-4xl mt-6 text-center">木柵茶本舖</div>
      {/* <div className="h-20 mt-6 bg-white flex items-center justify-center">
        <div className="text-xl fw-700">找好茶推薦系統</div>
        <Link href="/goodtea">
          <button className="rounded-lg ml-4 border-2">前往</button>
        </Link>
      </div> */}
      <div className="mt-6 grid justify-around gap-x-12 gap-y-12 grid-cols-3 ml-10 mr-10">
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
