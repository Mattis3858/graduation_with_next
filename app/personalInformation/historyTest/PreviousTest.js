'use client';
import { createClient } from '@supabase/supabase-js';

import React, { useState, useEffect } from 'react';

const supabase = createClient(
  'https://zdxlzmekrckaffbzupmh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkeGx6bWVrcmNrYWZmYnp1cG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzNzM1MTEsImV4cCI6MjAwMzk0OTUxMX0.YI14GVJfa6H0eXOUqCKXT8AHLxK4GcAb8UYPTH4QLKQ'
);

const PreviousTest = () => {
  const [pageState, setPageState] = useState(false);
  const [previousTestRecord, setPreviousTestRecord] = useState([]);
  const [product, setProduct] = useState([]);
  async function getProduct() {
    const { data } = await supabase.from('product').select();
    // console.log(data);
    setProduct(data);
  }
  async function getPreviousTestRecord() {
    const { data } = await supabase.from('find_good_tea_record').select();
    data.forEach((item) => {
      const originalDate = new Date(item.created_time);
      const year = originalDate.getFullYear();
      const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
      const day = originalDate.getDate().toString().padStart(2, '0');
      item.created_time = `${year}/${month}/${day}`;
    });
    console.log(data);
    setPreviousTestRecord(data.filter((item) => item.input_type === 0));
  }
  useEffect(() => {
    getPreviousTestRecord();
    getProduct();
  }, []);
  // const flavorData = [
  //   {
  //     date: '2023/06/01',
  //     teaType: '張協興鐵觀音',
  //     sheet: {
  //       烘培味: 2,
  //       煙燻味: 4,
  //       青果味: 3,
  //       熟果味: 3,
  //       乾果味: 1,
  //       清花香: 0,
  //       濃花香: 2,
  //       奶香味: 1,
  //       糖香味: 0,
  //       蜜香味: 1,
  //       草香味: 5,
  //       藥草味: 0,
  //       蔬菜味: 2,
  //       豆味: 2,
  //       堅果味: 0,
  //       穀物味: 2,
  //       根莖植物味: 3,
  //       海洋味: 1,
  //       陳味: 5,
  //       發酵味: 0,
  //       香料味: 2,
  //       中藥味: 0,
  //       木質香: 2,
  //       酸: 1,
  //       甜: 2,
  //       圓滑感: 1,
  //       厚重感: 3,
  //       甘醇度: 2,
  //       喉後韻: 4,
  //       回香感: 2,
  //     },
  //   },
  //   { date: '2023/05/03', teaType: '張協興包種茶' },
  //   { date: '2023/04/30', teaType: '張協興包種茶' },
  //   { date: '2023/04/05', teaType: '威叔鐵觀音紅茶' },
  //   // Add more tea data here
  // ];
  return (
    <div className="w-full">
      <div className="w-4/5 flex justify-between">
        <div>前測</div>
        {pageState && (
          <button onClick={() => setPageState(false)}>回上頁</button>
        )}
      </div>
      {!pageState && (
        <table className="w-4/5 border-collapse border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">時間</th>
              <th className="py-2 px-4 border">茶款</th>
            </tr>
          </thead>
          <tbody>
            {previousTestRecord.map((record, index) => (
              <tr key={index} onClick={() => setPageState(true)}>
                <td className="py-2 px-4 border">{record.created_time}</td>
                <td className="py-2 px-4 border">
                  {product.length !== 0 &&
                    product.find((item) => item.prod_id === record.test_result)
                      .prod_name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* {pageState && (
        <table className="w-4/5 border-collapse border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">風味描述</th>
              <th className="py-2 px-4 border">評分</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(flavorData[0].sheet).map((key) => {
              const value = flavorData[0].sheet[key];
              // console.log(`Key: ${key}, Value: ${value}`);
              return (
                <tr key={key}>
                  <td className="py-2 px-4 border">{key}</td>
                  <td className="py-2 px-4 border">{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )} */}
    </div>
  );
};

export default PreviousTest;
