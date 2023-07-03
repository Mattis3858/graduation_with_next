import Link from 'next/link';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

export default function Home() {
  return (
    <main className="mt-8">
      <SystemIntroduction
        title="找好茶茶葉推薦"
        customer="kdfmlskdmgk"
        description="sldkgnlajlsdjadg"
        marginLeft="m-auto ml-10"
        link="/goodtea"
      />
      <SystemIntroduction
        title="茶葉夏洛克辨識系統"
        customer=";arjg;ajrg"
        description=";erjng;awrjh;kjng;jskdngl"
        marginLeft="m-auto mr-10"
        link="/sherlock"
      />
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
      className={`w-7/12 border-solid border-lime-700 rounded-3xl border-2 mb-8 ${marginLeft}`}
    >
      <div className="ml-4">
        <div className=" flex">
          <div className="text-5xl mt-4">{title}</div>
          <span className=" relative">
            <Link href={link} className="mt-4 absolute top-1.5 left-10">
              <BsFillArrowRightCircleFill size={40} />
            </Link>
          </span>
        </div>

        <div className="mt-4">
          <div>適合客群：</div>
          <div>{customer}</div>
        </div>
        <div className="mt-4 mb-4">
          <div>系統介紹：</div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};
