'use client';
import { createClient } from '@supabase/supabase-js';
import React, { useState, useEffect } from 'react';

const flavorTable = {
  b_baked: '焙烤香 - 烘焙味',
  b_smoky: '焙烤香 - 煙燻味',
  f_dried_fruit: '果香 - 乾果味',
  f_heavy: '花香 - 清香',
  f_light: '花香 - 濃香',
  s_sweet: '甜香 - 糖香味',
  s_honey: '甜香 - 蜜香味',
  g_grass: '青草香 - 草香味',
  n_nutty: '果仁香 - 堅果味',
  w_woody: '木質香',
  sour: '酸味',
  sweet: '甜味',
  sleek: '圓滑感',
  thick: '厚重感',
  glycol: '甘醇度',
  after_rhyme: '喉後韻',
  aftertaste: '回香感',
};

const supabase = createClient(
  process.env.SUPABASE_URI,
  process.env.SUPABASE_SECRET
);
const PostTest = ({ userID }) => {
  const [postPageState, setPostPageState] = useState(false);
  const [postTestRecord, setPostTestRecord] = useState([]);
  // 假設你有一個用來顯示詳細內容的變數，假設叫做`selectedRecord`，你可以在點擊時設定它的值
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [product, setProduct] = useState([]);
  // console.log(userID);
  async function getProduct() {
    const { data, error } = await supabase.from('product').select('*');
    setProduct(data);
  }
  async function getPostTestRecord() {
    const { data } = await supabase
      .from('find_good_tea_record')
      .select('*')
      .eq('input_type', 1)
      .eq('user_id', userID);
    // console.log(data);
    if (data) {
      const sortedData = data
        .slice()
        .sort((a, b) => new Date(b.created_time) - new Date(a.created_time));
      console.log(sortedData);
      sortedData.forEach((item) => {
        const originalDate = new Date(item.created_time);
        const year = originalDate.getFullYear();
        const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
        const day = originalDate.getDate().toString().padStart(2, '0');
        item.created_time = `${year}/${month}/${day}`;
      });
      setPostTestRecord(sortedData);
    } else {
      setPostTestRecord([]);
    }
  }
  useEffect(() => {
    getProduct();
    getPostTestRecord();
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
  const handleClick = () => {};
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
                  className=" hover:bg-lime-200"
                >
                  <td className="py-2 px-4 border">{record.created_time}</td>
                  <td className="py-2 px-4 border">
                    {product.length !== 0 &&
                      product.find(
                        (item) => item.prod_id === record.test_result
                      ).prod_name}
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
