'use client';
import React from 'react';
import './product.css';
import styles from './product.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { CartProvider, useCart } from 'react-use-cart';
import Link from 'next/link';

const TeaProduct = ({
  product,
  src = '',
  shop = '',
  name = '',
  description = '',
  price = 0,
}) => {
  const { addItem, items } = useCart();
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false); // 控制购买窗口显示的状态
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };
  const openPurchaseModal = () => {
    setIsPurchaseModalOpen(true);
  };

  const closePurchaseModal = () => {
    setIsPurchaseModalOpen(false);
  };

  return (
    <div className="border-solid border-2 border-lime-600 rounded-2xl bg-gray-200 font-sans card">
      <div className="card-pic">
        <img src={src} alt="Tea" className="pic" />
      </div>
      <div className="card-content">
        <div className="price-group">
          <div>
            <h4 className="mt-2 text-2xl font-bold">{shop}</h4>
            <h4 className="mt-2 text-xl font-bold">{name}</h4>
          </div>
          <div className="price-tag">
            <h4 className="text-xl font-semibold "> {price}</h4>
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

        {/* <div className="flex justify-between button-group">
          <Link href="/reservation" className="card-button">
            <button>預約品茶</button>
          </Link>
          <button
            className="card-button"
            onClick={openPurchaseModal}
          >
            購買
          </button>
          {isPurchaseModalOpen && (
            <PurchaseModal
              product={product}
              onPurchase={(product, quantity) => {
                addItem(product, quantity);
                window.alert(`購買了 ${quantity} 件產品：${product.prod_name}`);
                closePurchaseModal();
              }}
              onClose={closePurchaseModal}
            />
          )}
        </div> */}
      </div>
    </div>
  );
};

export default TeaProduct;

const PurchaseModal = ({ product, onPurchase, onClose }) => {
  // const { addItem, items } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleConfirm = () => {
    onPurchase(product, quantity);
    onClose();
  };
  const handleModalClose = (e) => {
    if (e.target.classList.contains('modal-background')) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black  modal-background"
      onClick={handleModalClose}
    >
      <div className="modal-content bg-white p-4 rounded-lg shadow-lg relative">
        <h2 className="text-2xl font-bold mb-4">購買</h2>
        <p className="mb-2">請輸入購買數量：</p>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-2"
        />
        <button
          onClick={handleConfirm}
          className="card-button bg-lime-600 text-white p-2 rounded-md mx-auto"
        >
          確認
        </button>
      </div>
    </div>
  );
};
