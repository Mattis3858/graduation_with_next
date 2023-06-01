import Link from 'next/link';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
export default function Home() {
  return (
    <main className="mt-8">
      <SystemIntroduction
        title="產地辨識茶葉推廣系統"
        customer="對於木柵鐵觀音、品茶知識有興趣者"
        description="1.兼具教育娛樂性質的感官品評茶產地辨識，以品茶師的角度進行品茶流程體驗、並嘗試判斷鐵觀音製作地。2.系統依照使用者品評輸入分辨此茶品喝起來像木柵茶或非木柵茶，以及顯示專業品茶師、專業型消費者感官數據統計，讓使用者進行比對，藉此提升消費者感官與品茶能力。3.將品茶流程用更簡易方式引導使用者品茶。"
        marginLeft="m-auto ml-10"
        link="/teaidentification"
      />
      <SystemIntroduction
        title="茶葉知音推薦系統"
        customer="品茶初學者、送禮、自用需求、大多沒喝過木柵鐵觀音"
        description="1.主打多用途、初階、簡易、快速的推薦系統，推薦一款「最符合需求」的茶產品。2.消費者勾選輸入需求(x)包含風味、規格、功能、送禮對象等等，此時系統會推薦相關木柵鐵觀音產品，並提供購買連結。(不需要輸入所有指標)"
        marginLeft="m-auto mr-10"
        link="/teafriend"
      />
      <SystemIntroduction
        title="找好茶推薦系統"
        customer="平時喝茶頻率較高，有喝過木柵鐵觀音，並熟悉滋味希望能依據自身口味找到更相符的鐵觀音"
        description="
        1.主打精準、專業、深度的推薦系統，使用者輸入風味需求後，系統能為其推薦一款「最符合指定風味」的茶產品。2.消費者以勾選的方式輸入產品風味需求(x)，系統會推薦與該風味描述最相關的木柵鐵觀音產品，並提供購買連結。(不需要輸入所有指標，但有會更精準)"
        marginLeft="m-auto ml-10"
        link="/goodtea"
      />
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
