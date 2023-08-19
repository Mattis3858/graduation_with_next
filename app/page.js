'use client';
import Link from 'next/link';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Product from './product/Product';
// import { useState, useEffect } from 'react';

export default function Home() {
  // const [message, setMassage] = useState('Loading');
  // useEffect(() => {
  //   fetch('http://localhost:8080/api/home')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMassage(data.message);
  //       console.log(message);
  //     });
  // }, []);
  return (
    <main className=" flex justify-evenly">
      <Product />
      {/* <SystemIntroduction
        title="找好茶茶葉推薦"
        description="sldkgnlajlsdjadg"
        marginLeft=""
        link="/goodtea"
      />
      <SystemIntroduction
        title="泡好茶系統"
        description=";erjng;awrjh;kjng;jskdngl"
        marginLeft=""
        link="/brewgoodtea"
      /> */}
      {/* <SystemIntroduction
        title="找好茶推薦系統"
        customer="平時喝茶頻率較高，有喝過木柵鐵觀音，並熟悉滋味希望能依據自身口味找到更相符的鐵觀音"
        description="
        1.主打精準、專業、深度的推薦系統，使用者輸入風味需求後，系統能為其推薦一款「最符合指定風味」的茶產品。2.消費者以勾選的方式輸入產品風味需求(x)，系統會推薦與該風味描述最相關的木柵鐵觀音產品，並提供購買連結。(不需要輸入所有指標，但有會更精準)"
        marginLeft="m-auto ml-10"
        link="/goodtea"
      /> */}
    </main>
  );
}

const SystemIntroduction = ({
  title = '',
  customer = '',
  description = '',
  marginLeft = '',
  link = '/',
}) => {
  return (
    <div
      className={`w-5/12 border-solid border-lime-700 rounded-3xl border-2 ${marginLeft}`}
    >
      <Link href={link} className="mt-4 top-1.5 left-10">
        <div className="">
          <div className="flex border-b-2 border-lime-600">
            <div className="text-5xl my-4 ml-4 text-center">{title}</div>
            <div className="mt-4 ml-4">
              <BsFillArrowRightCircleFill size={50} />
            </div>
          </div>

          <div className="ml-4 mt-4 mb-4 text-lg font-medium">
            <div className="">系統介紹：</div>
            <div>{description}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
