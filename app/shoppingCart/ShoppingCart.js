'use client';
import React, { useState } from 'react';
import { CartProvider, useCart } from 'react-use-cart';

const ShoppingCart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  return (
    <div className="page-layout">
      <div className="mx-auto">
        <div className="text-4xl text-center big_title">購物車</div>
        <div className="rounded-lg shadow border-slate-300 border-solid border-2 mt-6">
          {/* <h1>Cart ({totalUniqueItems})</h1> */}
          {/* <ul>
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
          </ul> */}

          <table className="min-w-full divide-y divide-gray-200">
            <thead className="text-md">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                  店家
                </th>
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
            {items.length > 0 && (
              <tbody className="divide-y divide-gray-200 text-xl">
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.shop}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      ${item.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      ${item.price * item.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        className="text-2xl ml-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        減少
                      </button>
                      <button
                        className="text-2xl ml-2"
                        onClick={() =>
                          updateItemQuantity(
                            item.id,
                            parseInt(item.quantity) + 1
                          )
                        }
                      >
                        增加
                      </button>
                      <button
                        className="text-red-500 text-2xl ml-2"
                        onClick={() => removeItem(item.id)}
                      >
                        刪除
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
