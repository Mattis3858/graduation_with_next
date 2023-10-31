'use client';
import React from 'react';
import './style.css';

const ProcessIntro = (props) => {
  return (
    <>
      <div className="page-layout ">
        <div className="flex items-center justify-center">
          <h4 className="text-4xl text-center big_title">
            泡<span className="tea">茶</span>準備&建議流程
          </h4>
        </div>
        <img
          src="/images/leaf.png"
          className="mx-auto mb-4"
          style={{ width: '35px', marginTop: '-1rem' }}
        />
      </div>
      <div className="w-full px-4 lg:px-32">
        <div className="flex flex-col lg:flex-row justify-between mb-20">
          <div className="w-full lg:w-1/2">
            <div>
              <div className="text-5xl font-normal text-center">泡茶準備</div>
            </div>
            <div className="pt-8 text-2xl text-gray-500">
              <div>
                <div className="">1. 沖泡器具:</div>
                <div>茶具 / 快沖壺 / 馬克杯 / 沖茶袋 / 濾茶球...等</div>
              </div>
              <div className="pt-4">
                <div>2. 待測茶葉:</div>
                <div>
                  張協興茶行鐵觀音、張協興茶行包種茶、威叔茶莊鐵觀音、
                  威叔鐵茶莊觀音紅茶、寒舍茶坊包種茶、寒舍茶坊鐵觀音紅茶
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <div className="grid grid-cols-2 gap-0">
              <img
                src="/images/image12041-i1oe-300h.png"
                alt="image12041"
                className="w-56 h-56 object-cover"
              />
              <img
                src="/images/image22042-4xx-300h.png"
                alt="image22042"
                className="w-56 h-56 object-cover"
              />
              <img
                src="/images/image32042-3h6q-300h.png"
                alt="image32042"
                className="w-56 h-56 object-cover"
              />
              <img
                src="/images/image42042-v9d8-300h.png"
                alt="image42042"
                className="w-56 h-56 object-cover"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="text-center mb-8">
            <div className=" text-5xl">建議泡茶流程</div>
            <div className="bg-yellow-500 h-1 w-20 mt-1 mx-auto"></div>
          </div>
          <div className="bg-white rounded-3xl shadow-md p-4 mb-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-6">
              <div className="text-5xl font-bold mb-4">用水種類</div>
              <div className="text-xl text-gray-500 mb-4">
                市售飲用水或飲水機煮至沸水(100度c)
              </div>
              <div className="text-5xl font-bold pt-6 pb-4">茶水比例</div>
              <div className="text-xl text-gray-500">
                3g 茶葉(一包夾鏈袋) : 150 ml 沸水(100度c)
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/images/用水種類.png"
                alt="用水種類"
                className="w-full"
              />
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-md p-4 mb-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-6">
              <img
                src="/images/泡茶方式.png" //泡茶方式-溫潤泡
                alt="泡茶方式"
                className=""
              />
            </div>
            <div className="w-full md:w-1/2">
                <div className="text-5xl font-bold mb-4">泡茶方式</div>
                <div className="text-xl text-gray-500 mb-4">
                  {/* 溫潤泡:置入茶葉後，先以熱水沖茶葉，立即將茶水倒出後再泡茶 */}
                  將茶包放入茶杯後沖入熱水， 3分鐘後可即取出茶包，靜置 3分鐘即可聞茶香，
                  待茶湯靜置至6分鐘後，冷卻即可享用
                </div>
                {/* <div className="text-5xl font-bold pt-6 pb-4">沖泡時間</div>
                <div className="text-xl text-gray-500">
                  沖泡 3 分鐘後可即取出茶葉(瀝出茶湯) 靜置 3 分鐘，即可聞茶香
                  待茶湯靜置至六分鐘後，冷卻即可享用
                </div>*/}
              </div> 
            </div>
          <div className="bg-white rounded-3xl shadow-md p-4 mb-4 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-6">
              <div className="text-5xl font-bold mb-4">拍攝注意事項</div>
              <div className="text-xl text-gray-500 mb-4">
                請盡量在充足光源下從正上方拍攝茶包，並將茶湯置於鏡頭中間。
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/images/示範影片.png" //示範影片
                alt="示範影片"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="justify-items-start overflow-x-auto">
        <div className="portfolio-simple-footer-portfolio-simple-footer">
          <div className="portfolio-simple-footer-projects">
            <div className="gap-1 flex items-center flex-col justify-center">
              <span className="portfolio-simple-footer-text titleh2">
                <span>建議泡茶流程</span>
              </span>
              <img
                src="/images/rectangle195351-pie-200h.png"
                alt="Rectangle195351"
                className="portfolio-simple-footer-rectangle19"
              />
            </div>
            <div className="portfolio-simple-footer-project1">
              <div className="portfolio-simple-footer-projectnfo">
                <div className="portfolio-simple-footer-frame3350">
                  <span className="portfolio-simple-footer-text02">
                    <span>用水種類</span>
                  </span>
                  <span className="portfolio-simple-footer-text04">
                    <span>
                      <span>市售飲用水或飲水機煮至沸水(100度c)</span>
                      <br></br>
                      <span></span>
                    </span>
                  </span>
                </div>
                <div className="portfolio-simple-footer-frame33511">
                  <span className="portfolio-simple-footer-text09">
                    <span></span>
                    <br></br>
                    <span></span>
                  </span>
                </div>
                <div className="portfolio-simple-footer-frame3352"></div>
                <div className="portfolio-simple-footer-frame33521">
                  <span className="portfolio-simple-footer-text13">
                    <span>茶水比例</span>
                  </span>
                  <span className="portfolio-simple-footer-text15">
                    <span>
                      <span>3g 茶葉(一包夾鏈袋) : 150 ml 沸水(100度c)</span>
                      <br></br>
                      <span></span>
                    </span>
                  </span>
                </div>
              </div>
              <img
                src="/images/pexelsellyfairytale38232071216-8suq-600h.png" //用水種類
                alt="pexelsellyfairytale38232071216"
                className="portfolio-simple-footer-pexelsellyfairytale38232071"
              />
            </div>
            <div className="portfolio-simple-footer-project2">
              <img
                src="/images/rectangle72062-53xd-600h.png" //泡茶方式-溫潤泡
                alt="Rectangle72062"
                className="portfolio-simple-footer-rectangle7"
              />
              <div className="portfolio-simple-footer-projectnfo1">
                <div className="portfolio-simple-footer-frame33501">
                  <span className="portfolio-simple-footer-text20">
                    <span>泡茶方式-溫潤泡</span>
                  </span>
                  <span className="portfolio-simple-footer-text22">
                    <span>
                      置入茶葉後，先以熱水沖茶葉，立即將茶水倒出後再泡茶
                    </span>
                  </span>
                </div>
                <div className="portfolio-simple-footer-frame33512">
                  <span className="portfolio-simple-footer-text24">
                    <span></span>
                    <br></br>
                    <span></span>
                  </span>
                </div>
                <div className="portfolio-simple-footer-frame33522"></div>
                <div className="portfolio-simple-footer-frame33523">
                  <span className="portfolio-simple-footer-text28">
                    <span>沖泡時間</span>
                  </span>
                  <span className="portfolio-simple-footer-text30">
                    <span>
                      <span>沖泡 3 分鐘後可即取出茶葉(瀝出茶湯)</span>
                      <br></br>
                      <span>靜置 3 分鐘，即可聞茶香</span>
                      <br></br>
                      <span>待茶湯靜置至六分鐘後，冷卻即可享用</span>
                      <br></br>
                      <span></span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="portfolio-simple-footer-project3">
              <div className="portfolio-simple-footer-projectnfo2">
                <div className="portfolio-simple-footer-frame33502">
                  <span className="portfolio-simple-footer-text39">
                    <span>示範影片</span>
                  </span>
                  <span className="portfolio-simple-footer-text41">
                    <span>
                      此影片為參考用，您仍然可以選擇最適合您的沖泡方式
                    </span>
                  </span>
                </div>
              </div>
              <img
                src="/images/rectangle7161-7p2-600h.png" //示範影片
                alt="Rectangle7161"
                className="portfolio-simple-footer-rectangle71"
              />
            </div>
          </div>
          <div className="portfolio-simple-footer-content">
            <span className="portfolio-simple-footer-text43 titleh2 YourFontName,serif">
              <span>泡茶準備</span>
            </span>
            <div className="portfolio-simple-footer-subheadline">
              <span className="portfolio-simple-footer-text45">
                <span>
                  <span>
                    1.沖泡器具: 茶具 / 快沖壺 / 馬克杯/ 沖茶袋 / 濾茶球...等
                  </span>
                  <br></br>
                  <span>
                    2.待測茶葉:
                    張協興鐵觀音、張協興包種茶、威叔鐵觀音、威叔鐵觀音紅茶、寒舍包種茶、寒舍鐵觀音紅茶
                  </span>
                </span>
              </span>
            </div>
          </div>
          <img
            src="/images/image12041-i1oe-300h.png" //泡茶準備1
            alt="image12041"
            className="portfolio-simple-footer-image1"
          />
          <img
            src="/images/image22042-4xx-300h.png" //泡茶準備2
            alt="image22042"
            className="portfolio-simple-footer-image2"
          />
          <img
            src="/images/image32042-3h6q-300h.png" //泡茶準備3
            alt="image32042"
            className="portfolio-simple-footer-image3"
          />
          <img
            src="/images/image42042-v9d8-300h.png" //泡茶準備4
            alt="image42042"
            className="portfolio-simple-footer-image4"
          />
        </div>
      </div> */}
      {/* <style jsx>
        {`
          .portfolio-simple-footer-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .portfolio-simple-footer-portfolio-simple-footer {
            width: 100%;
            height: 2991px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-bg-gray);
          }
          .portfolio-simple-footer-projects {
            gap: 80px;
            top: 685px;
            left: 188px;
            width: 992px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .portfolio-simple-footer-frame3351 {
            gap: 4px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .portfolio-simple-footer-text {
            color: var(--dl-color-font-highemphasis);
            height: auto;
            text-align: center;
            line-height: 72px;
          }
          .portfolio-simple-footer-rectangle19 {
            width: 100px;
            height: 4px;
            border-radius: 2px;
          }
          .portfolio-simple-footer-project1 {
            width: 992px;
            height: 524px;
            display: flex;
            overflow: hidden;
            box-shadow: 0px 6px 64px 0px
              rgba(112, 144, 176, 0.10000000149011612);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 24px;
          }
          .portfolio-simple-footer-projectnfo {
            width: 496px;
            height: 524px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-bg-white);
          }
          .portfolio-simple-footer-frame3350 {
            gap: 24px;
            top: 70px;
            left: 45px;
            width: 407px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .portfolio-simple-footer-text02 {
            color: var(--dl-color-font-highemphasis);
            height: auto;
            font-size: 40px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Playfair Display;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .portfolio-simple-footer-text04 {
            color: var(--dl-color-font-mediumemphasis);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Nunito;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .portfolio-simple-footer-frame33511 {
            gap: 24px;
            top: 112px;
            left: 45px;
            width: 407px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .portfolio-simple-footer-text09 {
            color: var(--dl-color-font-mediumemphasis);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Nunito;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .portfolio-simple-footer-frame3352 {
            gap: 24px;
            top: 137.5px;
            left: 45px;
            width: 407px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .portfolio-simple-footer-frame33521 {
            gap: 24px;
            top: 262px;
            left: 45px;
            width: 407px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .portfolio-simple-footer-text13 {
            color: var(--dl-color-font-highemphasis);
            height: auto;
            font-size: 40px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: ChenYuluoyan;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .portfolio-simple-footer-text15 {
            color: var(--dl-color-font-mediumemphasis);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: YourFontName;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .portfolio-simple-footer-pexelsellyfairytale38232071 {
            width: 496px;
            height: 526px;
          }
          .portfolio-simple-footer-project2 {
            height: 524px;
            display: flex;
            overflow: hidden;
            box-shadow: 0px 6px 64px 0px
              rgba(112, 144, 176, 0.10000000149011612);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 24px;
          }
          .portfolio-simple-footer-rectangle7 {
            width: 496px;
            height: 524px;
          }
          .portfolio-simple-footer-projectnfo1 {
            width: 496px;
            height: 524px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-bg-white);
          }
          .portfolio-simple-footer-frame33501 {
            gap: 24px;
            top: 82px;
            left: 45px;
            width: 407px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .portfolio-simple-footer-text20 {
            color: var(--dl-color-font-highemphasis);
            height: auto;
            font-size: 40px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Playfair Display;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .portfolio-simple-footer-text22 {
            color: var(--dl-color-font-mediumemphasis);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Nunito;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .portfolio-simple-footer-frame33512 {
            gap: 24px;
            top: 112px;
            left: 45px;
            width: 407px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .portfolio-simple-footer-text24 {
            color: var(--dl-color-font-mediumemphasis);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Nunito;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .portfolio-simple-footer-frame33522 {
            gap: 24px;
            top: 137.5px;
            left: 45px;
            width: 407px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .portfolio-simple-footer-frame33523 {
            gap: 24px;
            top: 235px;
            left: 45px;
            width: 407px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .portfolio-simple-footer-text28 {
            color: var(--dl-color-font-highemphasis);
            height: auto;
            font-size: 40px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Playfair Display;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .portfolio-simple-footer-text30 {
            color: var(--dl-color-font-mediumemphasis);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Nunito;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .portfolio-simple-footer-project3 {
            height: 524px;
            display: flex;
            overflow: hidden;
            box-shadow: 0px 6px 64px 0px
              rgba(112, 144, 176, 0.10000000149011612);
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 24px;
          }
          .portfolio-simple-footer-projectnfo2 {
            width: 496px;
            height: 524px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: var(--dl-color-bg-white);
          }
          .portfolio-simple-footer-frame33502 {
            gap: 24px;
            top: 82px;
            left: 45px;
            width: 407px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .portfolio-simple-footer-text39 {
            color: var(--dl-color-font-highemphasis);
            height: auto;
            font-size: 40px;
            align-self: stretch;
            font-style: Bold;
            text-align: left;
            font-family: Playfair Display;
            font-weight: 700;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .portfolio-simple-footer-text41 {
            color: var(--dl-color-font-mediumemphasis);
            height: auto;
            font-size: 18px;
            align-self: stretch;
            font-style: Regular;
            text-align: left;
            font-family: Nunito;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .portfolio-simple-footer-rectangle71 {
            width: 496px;
            height: 524px;
          }
          .portfolio-simple-footer-intro {
            gap: 12px;
            top: 149px;
            left: 120px;
            width: 486px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .portfolio-simple-footer-content {
            gap: 32px;
            top: 188px;
            left: 140px;
            width: 486px;
            height: 292px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .portfolio-simple-footer-text43 {
            color: var(--dl-color-font-highemphasis);
            width: 450px;
            height: auto;
            text-align: left;
            line-height: 120.00000476837158%;
          }
          .portfolio-simple-footer-subheadline {
            gap: 12px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .portfolio-simple-footer-text45 {
            color: var(--dl-color-font-mediumemphasis);
            width: 486px;
            height: auto;
            font-size: 24px;
            font-style: Regular;
            text-align: left;
            font-family: Nunito;
            font-weight: 400;
            line-height: 150%;
            font-stretch: normal;
            text-decoration: none;
          }
          .portfolio-simple-footer-image1 {
            top: 123px;
            left: 725px;
            width: 225px;
            height: 225px;
            position: absolute;
          }
          .portfolio-simple-footer-image2 {
            top: 123px;
            left: 950px;
            width: 225px;
            height: 225px;
            position: absolute;
          }
          .portfolio-simple-footer-image3 {
            top: 348px;
            left: 725px;
            width: 225px;
            height: 225px;
            position: absolute;
          }
          .portfolio-simple-footer-image4 {
            top: 348px;
            left: 950px;
            width: 225px;
            height: 225px;
            position: absolute;
          }

          .textarea {
            color: var(--dl-color-gray-black);
            cursor: auto;
            padding: 0.5rem;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: 4px;
            background-color: var(--dl-color-gray-white);
          }

          .Content {
            font-size: 16px;
            font-family: Inter;
            font-weight: 400;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .Heading {
            font-size: 32px;
            font-family: Inter;
            font-weight: 700;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .titleh1 {
            font-size: 64px;
            font-style: normal;
            font-family: YourFontName, serif;
            font-weight: 700px;
            font-stretch: normal;
          }
          .titleh2 {
            font-size: 48px;
            font-style: normal;
            font-family: YourFontName;
            font-weight: 700px;
            font-stretch: normal;
            text-align: center;
            margin: 0 auto;
          }
          .body24px {
            font-size: 24px;
            font-style: normal;
            font-family: Nunito;
            font-weight: 400px;
            font-stretch: normal;
          }
          .body18px {
            font-size: 18px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500px;
            font-stretch: normal;
          }
        `}
      </style> */}
    </>
  );
};

export default ProcessIntro;
