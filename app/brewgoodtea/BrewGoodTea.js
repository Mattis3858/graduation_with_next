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
            <span className="tea">茶</span>湯濃淡評分
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
                <option value="張協興鐵觀音">張協興鐵觀音</option>
                <option value="威叔鐵觀音紅茶">威叔鐵觀音紅茶</option>
                <option value="威叔鐵觀音">威叔鐵觀音</option>
                <option value="寒舍包種">寒舍包種</option>
                <option value="寒舍鐵觀音紅茶">寒舍鐵觀音紅茶</option>
                <option value="張協興包種">張協興包種</option>
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
      <div className="">
        <div className="ml-10 mr-10 mt-6 mb-0 flex items-center justify-center">
          <h4 className="text-4xl mt-6 text-center big_title">
            泡<span className="tea">茶</span>準備&建議流程
          </h4>
        </div>
        <img
          src="/images/leaf.png"
          className="mx-auto"
          style={{ width: '35px' }}
        />
      </div>
      {/* <div
        className="portfolio-simple-footer-container"
        style={{ justifyContent: 'flex-start', overflowX: 'auto' }}
      >
        <div className="portfolio-simple-footer-portfolio-simple-footer">
          <div className="portfolio-simple-footer-projects">
            <div
              className="portfolio-simple-footer-frame3351"
              style={{
                gap: '4px',
                display: 'flex',
                alignitems: 'center',
                flexdirection: 'column',
                justifycontent: 'center',
              }}
            >
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
                src="/images/rectangle7161-7p2-600h.png"
                alt="Rectangle7161"
                className="portfolio-simple-footer-rectangle71"
              />
            </div>
          </div>
          <div className="portfolio-simple-footer-intro"></div>
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
            src="/images/image12041-i1oe-300h.png"
            alt="image12041"
            className="portfolio-simple-footer-image1"
          />
          <img
            src="/images/image22042-4xx-300h.png"
            alt="image22042"
            className="portfolio-simple-footer-image2"
          />
          <img
            src="/images/image32042-3h6q-300h.png"
            alt="image32042"
            className="portfolio-simple-footer-image3"
          />
          <img
            src="/images/image42042-v9d8-300h.png"
            alt="image42042"
            className="portfolio-simple-footer-image4"
          />
        </div>
      </div> */}
      {/* <style jsx>
        {`
          @font-face {
            font-family: 'ChenYuluoyan';
            src: url('/font/ChenYuluoyan-Thin.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
          }
          .custom-font {
            font-family: 'ChenYuluoyan', sans-serif; 
          }
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
          :root {
            --dl-color-bg-gray: rgba(249, 250, 255, 1);
            --dl-color-bg-line: rgba(37, 40, 43, 1);
            --dl-color-bg-white: rgba(255, 255, 255, 1);
            --dl-color-gray-500: #595959;
            --dl-color-gray-700: #999999;
            --dl-color-gray-900: #d9d9d9;
            --dl-size-size-large: 144px;
            --dl-size-size-small: 48px;
            --dl-color-danger-300: #a22020;
            --dl-color-danger-500: #bf2626;
            --dl-color-danger-700: #e14747;
            --dl-color-gray-black: #000000;
            --dl-color-gray-white: #ffffff;
            --dl-size-size-medium: 96px;
            --dl-size-size-xlarge: 192px;
            --dl-size-size-xsmall: 16px;
            --dl-space-space-unit: 16px;
            --dl-color-primary-100: #003eb3;
            --dl-color-primary-300: #0074f0;
            --dl-color-primary-500: #14a9ff;
            --dl-color-primary-700: #85dcff;
            --dl-color-success-300: #199033;
            --dl-color-success-500: #32a94c;
            --dl-color-success-700: #4cc366;
            --dl-size-size-xxlarge: 288px;
            --dl-color-brand-yellow: rgba(253, 196, 53, 1);
            --dl-size-size-maxwidth: 1400px;
            --dl-radius-radius-round: 50%;
            --dl-space-space-halfunit: 8px;
            --dl-space-space-sixunits: 96px;
            --dl-space-space-twounits: 32px;
            --dl-radius-radius-radius2: 2px;
            --dl-radius-radius-radius4: 4px;
            --dl-radius-radius-radius8: 8px;
            --dl-space-space-fiveunits: 80px;
            --dl-space-space-fourunits: 64px;
            --dl-color-font-lowemphasis: rgba(154, 159, 168, 1);
            --dl-space-space-threeunits: 48px;
            --dl-color-font-highemphasis: rgba(37, 40, 43, 1);
            --dl-color-font-mediumemphasis: rgba(130, 130, 130, 1);
            --dl-space-space-oneandhalfunits: 24px;
          }
          .button {
            color: var(--dl-color-gray-black);
            display: inline-block;
            padding: 0.5rem 1rem;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: 4px;
            background-color: var(--dl-color-gray-white);
          }
          .input {
            color: var(--dl-color-gray-black);
            cursor: auto;
            padding: 0.5rem 1rem;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: 4px;
            background-color: var(--dl-color-gray-white);
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
          .list {
            width: 100%;
            margin: 1em 0px 1em 0px;
            display: block;
            padding: 0px 0px 0px 1.5rem;
            list-style-type: none;
            list-style-position: outside;
          }
          .list-item {
            display: list-item;
          }
          .teleport-show {
            display: flex !important;
            transform: none !important;
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
      </div>
      
      
      
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
      </div> */}
    </>
  );
};

export default BrewGoodTea;
