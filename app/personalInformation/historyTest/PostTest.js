'use client';
import React, { useState, useEffect } from 'react';
import {
  getPostTestRecord,
  getProduct,
  flavorTable,
} from '../../components/module';

const PostTest = ({ userID }) => {
  const [postPageState, setPostPageState] = useState(false);
  const [postTestRecord, setPostTestRecord] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct(setProduct);
    userID && getPostTestRecord(setPostTestRecord, userID);
  }, [userID]);

  return (
    <div className="w-full">
      <div>
        <div className="w-4/5 flex justify-between mx-auto">
          <div>後測</div>
          {postPageState && (
            <button onClick={() => setPostPageState(false)}>回上頁</button>
          )}
        </div>
        {!postPageState && (
          <table className="w-4/5 border-collapse border mx-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 border">時間</th>
                <th className="py-2 px-4 border">茶款</th>
              </tr>
            </thead>
            <tbody>
              {/* {console.log(postTestRecord)} */}
              {postTestRecord.map((record, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    setPostPageState(true);
                    setSelectedRecord(record);
                  }}
                  className=" hover:bg-lime-200 cursor-pointer"
                >
                  <td className="py-2 px-4 border">{record.created_time}</td>
                  <td className="py-2 px-4 border">
                    {product.length !== 0 &&
                      product.find((item) => item.id === record.test_result)
                        .prod_name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {postPageState && selectedRecord && (
          <table className="w-4/5 border-collapse border mx-auto">
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
                  <td className="py-2 px-4 border">{selectedRecord[key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PostTest;
