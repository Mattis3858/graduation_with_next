'use client';
import React, { useState } from 'react';
import { CartProvider, useCart } from 'react-use-cart';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: '商品1', price: 10 },
    { id: 2, name: '商品2', price: 20 },
    { id: 3, name: '商品3', price: 30 },
  ]);
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  const handleDeleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };
  if (isEmpty) return <p>Your cart is empty</p>;
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="font-bold text-4xl mt-6 text-center">購物車</div>
        <div className="rounded-lg shadow border-slate-300 border-solid border-2 mt-6">
          <h1>Cart ({totalUniqueItems})</h1>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.quantity} x {item.name} &mdash;
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>&times;</button>
              </li>
            ))}
          </ul>
          {/* <table className="min-w-full divide-y divide-gray-200">
            <thead className="text-md">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                  商品
                </th>
                <th className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider">
                  價格
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                  數量
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                  總計
                </th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-xl">
              
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${item.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">1</td>
                  <td className="px-6 py-4 whitespace-nowrap">${item.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="text-red-500"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      刪除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
