'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import './brewGoodTea.css';
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
        `https://7a8f-140-119-19-30.ngrok-free.app/upload`,
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
      <div className="page-layout p-4 md:p-10">
        <div className="grid grid-rows-1 ml-4 md:ml-10 mr-4 md:mr-10 my-6 flex items-center justify-center main-vision">
          <h4 className="text-4xl mt-6 text-center title">
            茶湯<span className="tea">濃淡</span>評分
          </h4>
          {/* <img
            src="/images/leaf.png"
            style={{ width: '3%', marginTop: '-1rem' }}
            alt="Leaf"
          /> */}
        </div>
        <div className="grid grid-rows-1 ml-4 md:ml-10 mr-4 md:mr-10 my-6 flex items-center justify-center banner">
          <div className="content">
            <div className="mb-4">
              <h2 className="mb-2">Select Tea Type:</h2>
              <select
                value={selectedTea}
                onChange={handleTeaChange}
                className="w-full p-2 border rounded"
              >
                <option value="">請選擇茶的種類</option>
                <option value="張協興鐵觀音">張協興鐵觀音</option>
                <option value="威叔鐵觀音紅茶">威叔鐵觀音紅茶</option>
                <option value="威叔鐵觀音">威叔鐵觀音</option>
                <option value="寒舍包種">寒舍包種</option>
                <option value="寒舍鐵觀音紅茶">寒舍鐵觀音紅茶</option>
                <option value="張協興包種">張協興包種</option>
              </select>
            </div>
            <div className="mb-4">
              <h2 className="mb-2">Add Image:</h2>
              <input
                id="imgTea"
                type="file"
                onChange={handleChange}
                accept="image/gif, image/jpeg, image/png"
                className="w-full p-2 border rounded"
              />
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                <div className="message">{message}</div>
              )}
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Selected"
                  className="mt-2"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="portfolio-simple-footer-container p-4 md:p-10"
        style={{ justifyContent: 'flex-start', overflowX: 'auto' }}
      >
        <Head>
          <title>exported project</title>
        </Head>
        <div className="portfolio-simple-footer-portfolio-simple-footer">
          <div className="portfolio-simple-footer-projects">
            <div className="portfolio-simple-footer-frame3351 mb-8">
              <span className="text-4xl font-bold mb-4">建議泡茶流程</span>
              <img
                src="/images/rectangle195351-pie-200h.png"
                alt="Rectangle195351"
                className="portfolio-simple-footer-rectangle19"
              />
            </div>
            <div className="">
              <div className="">
                <div className="">
                  <span className="">用水種類</span>
                  <span className="text-lg">
                    市售飲用水或飲水機煮至沸水(100度c)
                  </span>
                </div>
                <div className=""></div>
                <div className="">
                  <span className="">茶水比例</span>
                  <span className="">
                    3g 茶葉(一包夾鏈袋) : 150 ml 沸水(100度c)
                  </span>
                </div>
              </div>
              <img
                src="/images/pexelsellyfairytale38232071216-8suq-600h.png"
                alt="pexelsellyfairytale38232071216"
                className=""
              />
            </div>
            <div className="">
              <img
                src="/images/rectangle72062-53xd-600h.png"
                alt="Rectangle72062"
                className=""
              />
              <div className="">
                <div className="">
                  <span className="">
                    泡茶方式-溫潤泡
                  </span>
                  <span className="">
                    置入茶葉後，先以熱水沖茶葉，立即將茶水倒出後再泡茶
                  </span>
                </div>
                <div className=""></div>
                <div className="">
                  <span className="">沖泡時間</span>
                  <span className="">
                    沖泡 3 分鐘後可即取出茶葉(瀝出茶湯)
                    <br />
                    靜置 3 分鐘，即可聞茶香
                    <br />
                    待茶湯靜置至六分鐘後，冷卻即可享用
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="">
                <div className="">
                  <span className="">泡茶方式-冷卻泡</span>
                  <span className="">
                    置入茶葉後，立即以冷卻熱水沖茶葉，香味溫和
                  </span>
                </div>
                <div className=""></div>
                <div className="">
                  <span className="">沖泡時間</span>
                  <span className="">
                    沖泡 3 分鐘後可即取出茶葉(瀝出茶湯)
                    <br />
                    靜置 3 分鐘，即可聞茶香
                    <br />
                    待茶湯靜置至六分鐘後，冷卻即可享用
                  </span>
                </div>
              </div>
              <img
                src="/images/rectangle98161-bpkf-600h.png"
                alt="Rectangle98161"
                className=""
              />
            </div>
          </div>
        </div>
      </div> */}
      <div
        className="portfolio-simple-footer-container p-4 md:p-10"
        style={{ justifyContent: 'flex-start', overflowX: 'auto' }}
      >
        <Head>
          <title>exported project</title>
        </Head>
        <div className="portfolio-simple-footer-portfolio-simple-footer">
          <div className="portfolio-simple-footer-projects">
            <div className="portfolio-simple-footer-frame3351 mb-8">
              <span className="text-4xl font-bold mb-4">建議泡茶流程</span>
              <img
                src="/images/rectangle195351-pie-200h.png"
                alt="Rectangle195351"
                className="portfolio-simple-footer-rectangle19"
              />
            </div>
            <div className="">
              <div className="">
                <div className="">
                  <span className="">用水種類</span>
                  <span className="text-lg">
                    市售飲用水或飲水機煮至沸水(100度c)
                  </span>
                </div>
                <div className="portfolio-simple-footer-frame3352"></div>
                <div className="portfolio-simple-footer-frame33521 mb-4">
                  <span className="">茶水比例</span>
                  <span className="text-lg">
                    3g 茶葉(一包夾鏈袋) : 150 ml 沸水(100度c)
                  </span>
                </div>
              </div>
              <img
                src="/images/pexelsellyfairytale38232071216-8suq-600h.png"
                alt="pexelsellyfairytale38232071216"
                className="portfolio-simple-footer-pexelsellyfairytale38232071"
              />
            </div>
            <div className="portfolio-simple-footer-project2">
              <img
                src="/images/rectangle72062-53xd-600h.png"
                alt="Rectangle72062"
                className="portfolio-simple-footer-rectangle7"
              />
              <div className="1">
                <div className="portfolio-simple-footer-frame33501 mb-4">
                  <span className="">泡茶方式-溫潤泡</span>
                  <span className="text-lg">
                    置入茶葉後，先以熱水沖茶葉，立即將茶水倒出後再泡茶
                  </span>
                </div>
                <div className="portfolio-simple-footer-frame33522"></div>
                <div className="portfolio-simple-footer-frame33523 mb-4">
                  <span className="">沖泡時間</span>
                  <span className="text-lg">
                    沖泡 3 分鐘後可即取出茶葉(瀝出茶湯)
                    <br />
                    靜置 3 分鐘，即可聞茶香
                    <br />
                    待茶湯靜置至六分鐘後，冷卻即可享用
                  </span>
                </div>
              </div>
            </div>
            <div className="portfolio-simple-footer-project3">
              <div className="2">
                <div className="portfolio-simple-footer-frame33502 mb-4">
                  <span className="">泡茶方式-冷卻泡</span>
                  <span className="text-lg">
                    置入茶葉後，立即以冷卻熱水沖茶葉，香味溫和
                  </span>
                </div>
                <div className="portfolio-simple-footer-frame33524"></div>
                <div className="portfolio-simple-footer-frame33525 mb-4">
                  <span className="">沖泡時間</span>
                  <span className="text-lg">
                    沖泡 3 分鐘後可即取出茶葉(瀝出茶湯)
                    <br />
                    靜置 3 分鐘，即可聞茶香
                    <br />
                    待茶湯靜置至六分鐘後，冷卻即可享用
                  </span>
                </div>
              </div>
              <img
                src="/images/rectangle98161-bpkf-600h.png"
                alt="Rectangle98161"
                className="portfolio-simple-footer-rectangle9"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrewGoodTea;
