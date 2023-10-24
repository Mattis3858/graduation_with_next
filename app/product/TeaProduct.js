'use client';
import React from 'react';
import './product.css';
import styles from './product.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { CartProvider, useCart } from 'react-use-cart';
import Link from 'next/link';

function TeaProduct({
  product,
  src = '',
  shop = '',
  name = '',
  description = '',
  price = 0,
}) {
  const { addItem, items } = useCart();

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  return (
    <div className="border-solid border-2 border-lime-600 rounded-2xl bg-gray-200 font-sans card">
      <div className="card-pic">
        <img src={src} alt="Tea" className="pic" />
      </div>
      {/* <hr className="h-0.5 bg-lime-600 border-0" /> */}
      <div className="card-content">
        <div className="price-group">
          <div>
            <h4 className="mt-2 text-2xl font-bold">{shop}</h4>
            <h4 className="mt-2 text-xl font-bold">{name}</h4>
          </div>
          <div className="price-tag">
            <h4 className="text-xl font-semibold ">$ {price}</h4>
          </div>
        </div>
        <div className="mt-2 mb-3" style={{ fontSize: '14px' }}>
          <button onClick={toggleDescription} className="description">
            風味雷達圖
            <FontAwesomeIcon
              icon={faCaretDown}
              className={`ml-1 ${
                isDescriptionOpen ? styles.Arrow : 'rotateArrow'
              }`}
            />
          </button>
          {isDescriptionOpen && <p>{description}</p>}
        </div>

        <div className="flex justify-between button-group">
          <Link href="/reservation" className="card-button">
            <button>預約品茶</button>
          </Link>
          {items.forEach((item) => {
            console.log(item);
          })}
          <button
            className="card-button"
            onClick={() => {
              addItem(product);
              console.log('add item to shopping cart');
            }}
          >
            購買
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeaProduct;
