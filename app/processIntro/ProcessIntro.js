'use client';
import React, { useState } from 'react';
import './style.css';

const ProcessIntro = (props) => {
  const [selectedTool, setSelectedTool] = useState(null);
  const [showImage, setShowImage] = useState(true);
  const [showImage1, setShowImage1] = useState(true);
  const [showImage2, setShowImage2] = useState(true);
  const [showImage3, setShowImage3] = useState(true);

  const selectTool = (tool) => {
    setSelectedTool(selectedTool === tool ? null : tool);
  };
  const toggleImage = () => {
    setShowImage(!showImage);
  };
  const toggleImage1 = () => {
    setShowImage1(!showImage1);
  };

  const toggleImage2 = () => {
    setShowImage2(!showImage2);
  };

  const toggleImage3 = () => {
    setShowImage3(!showImage3);
  };
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
              <div className="text-5xl font-bold text-center">泡茶準備</div>
            </div>
            <div className="pt-8 text-2xl text-gray-500">
              <div>
                <div className="">沖泡器具:</div>
                <div className="flex">
                  {['茶具', '快沖壺', '馬克杯', '沖茶袋'].map((tool) => (
                    <button
                      key={tool}
                      className={`text-blue-500 underline mr-4 ${
                        selectedTool === tool ? 'font-bold' : ''
                      }`}
                      onClick={() => selectTool(tool)}
                    >
                      {tool}
                    </button>
                  ))}
                </div>
                {/* <div>茶具 / 快沖壺 / 馬克杯 / 沖茶袋 / 濾茶球...等</div> */}
                {selectedTool && (
                  <div className="mt-4">
                    {selectedTool === '茶具' && <div>較專業的傳統茶具組，如茶壺、聞香杯、各式茶器等，適合已具備一定泡茶知識者使用</div>}
                    {selectedTool === '快沖壺' && (
                      <div>方便快速的選擇，適合剛接觸泡茶的使用者使用</div>
                    )}
                    {selectedTool === '馬克杯' && (
                      <div>如果家裡沒有專門喝茶的茶杯可以直接用馬克杯替代即可</div>
                    )}
                    {selectedTool === '沖茶袋' && (
                      <div>使用馬克杯泡茶與濾茶球的使用者，如果怕茶葉在杯中散掉的話可以事先使用沖茶袋將茶葉放入其中</div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4">
                <div>目前茶款:</div>
                <div>
                  張協興茶行鐵觀音、張協興茶行包種茶、威叔茶莊鐵觀音、
                  威叔茶莊鐵觀音紅茶、寒舍茶坊包種茶、寒舍茶坊鐵觀音紅茶
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <div className="grid grid-cols-2 gap-0">
              {showImage ? (
                <img
                  src="/images/image12041-i1oe-300h.png"
                  alt="image12041"
                  className="w-56 h-56 object-cover cursor-pointer"
                  onClick={toggleImage}
                />
              ) : (
                <div className="w-56 h-56 object-cover" onClick={toggleImage}>
                  Text to be displayed instead of the image.
                </div>
              )}
              {showImage1 ? (
                <img
                  src="/images/image22042-4xx-300h.png"
                  alt="image22042"
                  className="w-56 h-56 object-cover cursor-pointer"
                  onClick={toggleImage1}
                />
              ) : (
                <div className="w-56 h-56 object-cover" onClick={toggleImage1}>
                  Text to be displayed instead of the image.
                </div>
              )}

              {showImage2 ? (
                <img
                  src="/images/image32042-3h6q-300h.png"
                  alt="image32042"
                  className="w-56 h-56 object-cover cursor-pointer"
                  onClick={toggleImage2}
                />
              ) : (
                <div className="w-56 h-56 object-cover" onClick={toggleImage2}>
                  Text to be displayed instead of the image.
                </div>
              )}

              {showImage3 ? (
                <img
                  src="/images/image42042-v9d8-300h.png"
                  alt="image42042"
                  className="w-56 h-56 object-cover cursor-pointer"
                  onClick={toggleImage3}
                />
              ) : (
                <div className="w-56 h-56 object-cover" onClick={toggleImage3}>
                  Text to be displayed instead of the image.
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="mb-8 text-center">
            <div className="text-5xl font-bold">建議泡茶流程</div>
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
                {/* 溫杯燙壺:<br></br>
                1. 杯中加入一半25度常溫水後，再加入一半90-100度熱水<br></br>
                2. 靜置30秒後，倒掉杯中一半的溫熱水，再加滿step1.同樣溫度熱水<br></br>
                3. 同樣靜置30秒後，再重複一次step2.倒掉一半水再加滿熱水<br></br>
                4. 此時杯身已緩緩溫杯完成，即可開始泡茶<br></br><br></br>
                溫潤泡:<br></br>
                1. 使用100度C水沖泡 3 分鐘後可即取出茶葉(瀝出茶湯)<br></br>
                2. 靜置 3 分鐘，即可聞茶香<br></br>
                3. 待茶湯靜置至 6 分鐘後，冷卻即可享用<br></br><br></br>
                續沖方式:<br></br>
                每泡茶可泡約 5-7 次，每泡時間增加 10 秒 */}
                {/* 溫潤泡:置入茶葉後，先以熱水沖茶葉，立即將茶水倒出後再泡茶
                將茶包放入茶杯後沖入熱水， 3分鐘後即可取出茶包，靜置
                3分鐘即可聞茶香， 待茶湯靜置至6分鐘後，冷卻即可享用 */}
                <div>
                
                <div className="flex">
                  {['1.溫杯燙壺', '2.溫潤泡', '3.續沖方式'].map((tool) => (
                    <button
                      key={tool}
                      className={`text-blue-500 underline mr-4 ${
                        selectedTool === tool ? 'font-bold' : ''
                      }`}
                      onClick={() => selectTool(tool)}
                    >
                      {tool}
                    </button>
                  ))}
                </div>
              
                {selectedTool && (
                  <div className="mt-4">
                    {selectedTool === '1.溫杯燙壺' && <div>1. 杯中加入一半25度常溫水後，再加入一半90-100度熱水<br></br>
                2. 靜置30秒後，倒掉杯中一半的溫熱水，再加滿step1.同樣溫度熱水<br></br>
                3. 同樣靜置30秒後，再重複一次step2.倒掉一半水再加滿熱水<br></br>
                4. 此時杯身已緩緩溫杯完成，即可開始泡茶</div>}
                    {selectedTool === '2.溫潤泡' && (
                      <div>1. 使用100度C水沖泡 3 分鐘後可即取出茶葉(瀝出茶湯)<br></br>
                      2. 靜置 3 分鐘，即可聞茶香<br></br>
                      3. 待茶湯靜置至 6 分鐘後，冷卻即可享用</div>
                    )}
                    {selectedTool === '3.續沖方式' && (
                      <div>每泡茶可泡約 5-7 次，每泡時間增加 10 秒</div>
                    )}
                    {/* {selectedTool === '沖茶袋' && (
                      <div>沖茶袋的相關文字內容</div>
                    )} */}
                  </div>
                )}
              </div>
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
    </>
  );
};

export default ProcessIntro;
