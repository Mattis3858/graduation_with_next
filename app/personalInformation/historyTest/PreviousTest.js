'use client';
import React, { useState, useEffect } from 'react';
import {
  getPreviousTestRecord,
  getProduct,
  flavorTable,
} from '../../components/module';

const PreviousTest = ({ userID }) => {
  const [pageState, setPageState] = useState(false);
  const [previousTestRecord, setPreviousTestRecord] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    userID && getPreviousTestRecord(setPreviousTestRecord, userID);
    getProduct(setProduct);
  }, [userID]);
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
    <div className="w-auto md:w-2/5 text-xs sm:text-base">
      <div className="flex justify-between mx-auto">
        <div>前測</div>
        {pageState && (
          <button onClick={() => setPageState(false)}>回上頁</button>
        )}
      </div>
      {!pageState && (
        <table className="w-full border-collapse border mx-auto table-auto overflow-x-auto">
          <thead>
            <tr>
              <th className="py-2 px-1 sm:px-4 border">時間</th>
              <th className="py-2 px-1 sm:px-4 border">茶款</th>
            </tr>
          </thead>
          <tbody>
            {previousTestRecord.map((record, index) => (
              <tr
                key={index}
                onClick={() => {
                  setPageState(true);
                  setSelectedRecord(record);
                }}
                className="hover:bg-lime-200 cursor-pointer"
              >
                <td className="py-2 px-1 sm:px-4 border">
                  {record.created_time}
                </td>
                <td className="py-2 px-1 sm:px-4 border">
                  {product.length !== 0 &&
                    product.find((item) => item.id === record.test_result)
                      .prod_name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {pageState && selectedRecord && (
        <table className="w-full border-collapse border mx-auto table-auto overflow-x-auto">
          {/* {console.log(selectedRecord)} */}
          <thead>
            <tr>
              <th className="py-2 px-4 border">風味描述</th>
              <th className="py-2 px-4 border">評分</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(flavorTable).map((key) => (
              <tr key={key}>
                <td className="py-2 px-4 border">{flavorTable[key]}</td>
                <td className="py-2 px-4 border">
                  {selectedRecord[key] ? selectedRecord[key] : 0}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PreviousTest;
