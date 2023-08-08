import React from 'react';

function ProcessIntro() {
  return (
    <>
    <h1 style={{ fontWeight: 'bold', fontSize: '2rem', textAlign: 'center' }}>
        品茶流程
      </h1>
      <div className="tea-preparation" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ fontWeight: 'bold'}}>泡茶準備：</h2>
        <ul>
        <li style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>1.茶具 / 快沖壺 / 馬克杯 / 沖茶袋 / 濾茶球...等</li>
        <li style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>2.待測茶葉</li>
        </ul>

        <h2 style={{ fontWeight: 'bold'}}>用水種類：</h2>
        <p style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>市售飲用水或飲水機煮至沸水(100度c)</p>
        <h2 style={{ fontWeight: 'bold'}}>茶水比例：</h2>
        <p style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>3g 茶葉(一包夾鏈袋) : 150 ml 沸水(100度c)</p>
        <h2 style={{ fontWeight: 'bold'}}>泡茶方式 - 溫潤泡：</h2>
        <p style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
          置入茶葉後，先以熱水沖茶葉，立即將茶水倒出後再泡茶。
        </p>

        <h2 style={{ fontWeight: 'bold'}}>沖泡時間：</h2>
  
        <ul>
        <li style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>1.使用100度C的水</li>
        <li style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>2.沖泡 3 分鐘後可即取出茶葉(瀝出茶湯)</li>
        <li style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>3.靜置 3 分鐘，即可聞茶香</li>
        <li style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>4.待茶湯靜置至六分鐘後，冷卻即可享用</li>
        </ul>

        <h2 style={{ fontWeight: 'bold'}}>茶具示意圖：</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEUFsKGFeqcT60xX5HSGCi33vIPCVXjlSQA&usqp=CAU"
          alt="茶具示意圖"
        />

        <h2 style={{ fontWeight: 'bold'}}>快充壺示意圖：</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpgglozDnoF-O41zO8JLRG2gPTNaWB6L7xA&usqp=CAU"
          alt="快沖壺示意圖"
        />

        <h2 style={{ fontWeight: 'bold'}}>沖茶袋示意圖(搭配馬克杯)：</h2>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tOhlV5ExlwMsHz7I80P5I-3wNdNLr1babQ&usqp=CAU"
          alt="沖茶袋示意圖"
        />
        <h2 style={{ fontWeight: 'bold'}}>濾茶球示意圖（搭配馬克杯）：</h2>
      
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbEoZnATizeM_n4Zy-Of4s1MwNH6IbahsF35YGvvcgk2iKGKhSzYqNwU8zyuTNIl1Plk&usqp=CAU"
          alt="濾茶球示意圖"
        />
      </div>
    <h1 style={{ fontWeight: 'bold', fontSize: '2rem', textAlign: 'center' }}>
        茶產品介紹
      </h1>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-xl">
          <table className="w-full">
            <tbody>
              <tr>
                <td className=" text-center pr-4">
                  <img
                    src="images/mattis.jpg"
                    style={{ width: '80px', height: '100px' }}
                    alt="Image"
                  />
                </td>
                <td>
                  <h1 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                    文山包種茶
                  </h1>
                  <p style={{ marginBottom: '20px', maxWidth: '600px' }}>
                    文山包種茶為輕度發酵的部分發酵茶類，在臺茶風味輪的歸納中隸屬於清香型條形包種茶，茶樹品種主要為青心烏龍及臺茶12
                    號，產區分布於新北市坪林區、石碇區、深坑區、平溪區、汐止區、新店區及三峽區，台北市南港區及木柵區等。
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                  <iframe
                    width="600"
                    height="360"
                    src="https://www.youtube.com/embed/pCh3Kp6qxo8"
                    title="(G)I-DLE - I DO (Official Music Video)"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 2 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <td style={{ textAlign: 'center', paddingRight: '10px' }}>
                  <img
                    src="images/irontea.jpg"
                    style={{ width: '80px', height: '100px' }}
                    alt="Image"
                  />
                </td>
                <td>
                  <h1 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                    鐵觀音紅茶
                  </h1>
                  <p style={{ marginBottom: '20px', maxWidth: '600px' }}>
                    1.沖泡的時間：多次沖泡，參考時間為60s、50s、60s、80s、120s，共五泡。{' '}
                    <br />
                    2.使用的茶量：茶、水是有黃金比例，1g：50c.c. 最泛用。 <br />
                    3.使用的溫度：推薦使用攝氏100度水溫，沸騰佳。 <br />
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                  <iframe
                    width="600"
                    height="360"
                    src="https://www.youtube.com/embed/ArmDp-zijuc"
                    title="NewJeans (뉴진스) &#39;Super Shy&#39; Official MV"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 3 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <td style={{ textAlign: 'center', paddingRight: '10px' }}>
                  <img
                    src="images/irontea.jpg"
                    style={{ width: '80px', height: '100px' }}
                    alt="Image"
                  />
                </td>
                <td>
                  <h1 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                    鐵觀音
                  </h1>
                  <p style={{ marginBottom: '20px', maxWidth: '500px' }}>
                    波音で消されちゃった はっきりと聞かせろって わざとらしい海原
                    100回以上の失敗は ダーウィンさんも感涙の ユニークな進化の礎
                    あの日のことは忘れないよ しずくの小惑星の真ん中で
                    流れるまんま 流されたら 抗おうか 美しい鰭で
                    壊れる夜もあったけれど 自分でいられるように
                    びっくらこいた展開に よろめく足を踏ん張って 冷たい水を一口
                    心配性の限界は 超えてるけれどこうやって
                    コツをつかんで生きて来た 秘密守ってくれてありがとうね
                    もう遠慮せんで放っても大丈夫
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                  <iframe
                    width="600"
                    height="360"
                    src="https://www.youtube.com/embed/KbGPM9jFeGg"
                    title="スピッツ / 美しい鰭"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProcessIntro;