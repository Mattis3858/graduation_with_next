'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
// import API_URI from '../api/reference';
async function getStaticProps(formData) {
  try {
    const response = await axios.post(`${API_URI}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important: Set the content type to FormData
      },
    });
    console.log(response.data);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: null,
      },
    };
  }
}
const BrewGoodTea = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [selectedTea, setSelectedTea] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleChange(e) {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      setMessage('Please select an image.');
      return;
    }

    setIsLoading(true);
    setFile(selectedFile);

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('teaType', selectedTea);
    try {
      const response = await axios.post(
        `${process.env.API_URI}/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Important: Set the content type to FormData
          },
        }
      );
      const data = response.data;
      console.log(data);
      setMessage(data['similarity']);
      setIsLoading(false);
      console.log(message);
      return {
        props: {
          data,
        },
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: {
          data: null,
        },
      };
    }
    // try {
    //   const response = await fetch('http://140.119.19.30:5566/upload', {
    //     method: 'POST',
    //     body: formData,
    //   });

    //   const data = await response.json();
    //   setMessage(`相似程度: ${data.similarity}`);
    // } catch (error) {
    //   console.log('Error uploading file:', error);
    //   setMessage('An error occurred. Please try again later.');
    // } finally {
    //   setIsLoading(false);
    // }
  }

  function handleTeaChange(e) {
    setSelectedTea(e.target.value); // Update the selected tea type
  }

  return (
    <>
      <div className="page-layout">
        <div className="grid-rows-1 ml-10 mr-10 flex items-center justify-center main-vision">
          <h4 className="text-4xl text-center big_title">
            <span className="tea">茶</span>湯濃淡辨識
          </h4>
          <img
            src="/images/leaf.png"
            style={{ width: '3%', marginTop: '-1rem' }}
          />
        </div>
        <div className="grid grid-rows-1 mx-4 md:mx-10 my-6 flex items-center justify-center">
          <div className="content bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md w-full md:w-auto">
            <div className="mb-4">
              <h2 className="mb-2 text-lg md:text-xl font-semibold">
                茶種選擇
              </h2>
              <select
                value={selectedTea}
                onChange={handleTeaChange}
                className="w-full p-2 border rounded"
              >
                <option value="">請選擇茶的種類</option>
                <option value="張協興鐵觀音">張協興茶行鐵觀音</option>
                <option value="威叔鐵觀音紅茶">威叔茶莊鐵觀音紅茶</option>
                <option value="威叔鐵觀音">威叔茶莊鐵觀音</option>
                <option value="寒舍包種">寒舍茶坊包種</option>
                <option value="寒舍鐵觀音紅茶">寒舍茶坊鐵觀音紅茶</option>
                <option value="張協興包種">張協興茶行包種</option>
              </select>
            </div>
            <div className="mb-4">
              <h2 className="mb-2 text-lg md:text-xl font-semibold">
                圖片上傳
              </h2>
              <input
                id="imgTea"
                type="file"
                onChange={handleChange}
                accept="image/gif, image/jpeg, image/png"
                className="w-full p-2 border rounded"
              />

              {isLoading ? (
                <div className="text-blue-500">Loading...</div>
              ) : message ? (
                <div className="message">{message}</div>
              ) : (
                <></>
              )}
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Selected"
                  className="mt-2 rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
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
                    威叔茶莊鐵觀音紅茶、寒舍茶坊包種茶、寒舍茶坊鐵觀音紅茶
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
                <div className="text-5xl font-bold mb-4">泡茶方式-溫潤泡</div>
                <div className="text-xl text-gray-500 mb-4">
                  置入茶葉後，先以熱水沖茶葉，立即將茶水倒出後再泡茶
                </div>
                <div className="text-5xl font-bold pt-6 pb-4">沖泡時間</div>
                <div className="text-xl text-gray-500">
                  沖泡 3 分鐘後可即取出茶葉(瀝出茶湯) 靜置 3 分鐘，即可聞茶香
                  待茶湯靜置至六分鐘後，冷卻即可享用
                </div>
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
    </>
  );
};

export default BrewGoodTea;
