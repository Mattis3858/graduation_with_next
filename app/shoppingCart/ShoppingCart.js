'use client';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { findShopName, getShop, getUser, supabase } from '../components/module';
import { CartProvider, useCart } from 'react-use-cart';

const ShoppingCart = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState('');
  const [shops, setShops] = useState([]);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (items.length === 0) {
      window.alert('購物車是空的!!');
      return;
    }
    const currentTime = new Date().toISOString();
    items.forEach(async (item) => {
      const { data: reservation, error } = await supabase
        .from('buy_record')
        .upsert([
          {
            user_id: user.user_id,
            prod_id: item.id,
            buy_qty: item.quantity,
            buy_amount: item.itemTotal,
            created_time: currentTime,
            updated_time: currentTime,
            spec_id: 1,
          },
        ]);
    });
    window.alert('訂單已提交');
    emptyCart();
  };
  useEffect(() => {
    getShop(setShops);
    getUser(setUser, session);
  }, [session]);
  function findShopName(shopId) {
    const foundShop = shops.find((item) => item.shop_id === shopId);
    return foundShop ? foundShop.shop_name : '未知商店';
  }
  return (
    <div className="page-layout">
      <div className="mx-auto">
        <div className="text-4xl text-center big_title">購物車</div>
        <div className=" text-base rounded-lg shadow border-slate-300 border-solid border-2 mt-6 sm:text-sm md:text-base">
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

          <table className="text-base sm:text-sm md:text-lg min-w-full divide-y divide-gray-200">
            <thead className="text-md ">
              <tr>
                <th className="px-0 md:px-6 py-3 text-center font-medium text-gray-500">
                  店家
                </th>
                <th className="px-0 md:px-6 py-3 text-center font-medium text-gray-500">
                  商品
                </th>
                <th className="px-0 md:px-6 py-3 text-center  font-medium text-gray-500">
                  價格
                </th>
                <th className="px-0 md:px-6 py-3 text-center font-medium text-gray-500">
                  數量
                </th>
                <th className="px-0 md:px-6 py-3 text-center font-medium text-gray-500">
                  總計
                </th>
                <th className="px-0 md:px-6 py-3 text-center font-medium text-gray-500">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-md md:text-lg divide-y divide-gray-200 text-center">
              {items.length !== 0 ? (
                items.map((item) => (
                  <tr key={item.id}>
                    <td className="px-0 md:px-6 py-4">
                      {findShopName(item.shop_id)}
                    </td>
                    <td className="px-0 md:px-6 py-4">{item.prod_name}</td>
                    <td className="px-0 md:px-6 py-4">${item.price}</td>
                    <td className="px-0 md:px-6 py-4">{item.quantity}</td>
                    <td className="px-0 md:px-6 py-4">
                      ${item.price * item.quantity}
                    </td>
                    <td className="px-0 md:px-6 py-4">
                      <button
                        className="ml-2"
                        onClick={() =>
                          updateItemQuantity(
                            item.id,
                            parseInt(item.quantity) - 1
                          )
                        }
                      >
                        減少
                      </button>
                      <button
                        className="ml-2"
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
                        className="text-red-500 ml-2"
                        onClick={() => removeItem(item.id)}
                      >
                        刪除
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="text-center py-4">您的購物車是空的</tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="text-center mt-6">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
        >
          送出訂單
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
