import React from 'react';

function ProcessIntro() {
  return (
    <>
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
                    src="images/mattis.jpg"
                    style={{ width: '80px', height: '100px' }}
                    alt="Image"
                  />
                </td>
                <td>
                  <h1 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                    文山包種茶
                  </h1>
                  <p style={{ marginBottom: '20px', maxWidth: '500px' }}>
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
                  <p style={{ marginBottom: '20px', maxWidth: '500px' }}>
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
