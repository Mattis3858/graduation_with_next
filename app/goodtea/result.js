import * as React from 'react';
import { Grid, Paper, Link } from '@mui/material';
import './goodTea.css';

export default function Result({ result }) {
  console.log('result-page:', result);
  const predictionData = {};
  let prediction_id = null;
  let selectedPrediction = {};
  if (result) {
    console.log('Setting selectedPrediction...');
    const { prediction_id: resultPredictionId, prediction_name } = result;
    prediction_id = resultPredictionId;
    if (prediction_id === 1) {
      //張協興高山烏龍
      predictionData[prediction_id] = {
        prediction_name,
        pic_url: '/images/張協興烏龍.jpg',
        product_desc: '輕發酵的烏龍茶，花香明顯，口感鮮爽，入口芬芳',
        shop_name: '張協興茶行',
        shop_desc:
          '1954年由木柵茶區最著名的老茶人張丁頂創立的張協興茶行，傳承著六十幾年的炭焙方式，烘焙技術「忠於原味」而樹立了良好的口碑。茶行隨世代轉型，致力展現台灣精緻茶業的文化深度，是木柵鐵觀音的輝煌歷史代表。',
      };
    } else if (prediction_id === 2) {
      //張協興包種茶
      predictionData[prediction_id] = {
        prediction_name,
        pic_url: '/images/張協興紅茶.jpg',
        product_desc: '台茶18號，品種香氣特別，茶質強勁滋味濃厚',
        shop_name: '張協興茶行',
        shop_desc:
          '1954年由木柵茶區最著名的老茶人張丁頂創立的張協興茶行，傳承著六十幾年的炭焙方式，烘焙技術「忠於原味」而樹立了良好的口碑。茶行隨世代轉型，致力展現台灣精緻茶業的文化深度，是木柵鐵觀音的輝煌歷史代表。',
      };
    } else if (prediction_id === 3) {
      //威叔鐵觀音
      predictionData[prediction_id] = {
        prediction_name,
        pic_url: '/images/張協興鐵觀音.jpg',
        product_desc: '發酵度、烘焙度高，茶湯厚實，焙火香中帶有花果香',
        shop_name: '張協興茶行',
        shop_desc:
          '1949年張協興茶行由第一代老闆張丁頂先生創立，數十年來秉持著永續經營的理念不斷精進，永遠不變的是對茶專業的執著與獨門的烘焙技術，傳統與創新並俱，張協興茶行給您最優質的茶葉響宴！',
      };
    } else if (prediction_id === 4) {
      //威叔鐵觀音紅茶
      predictionData[prediction_id] = {
        prediction_name,
        pic_url: '/images/貓空茶神四季春.jpg',
        product_desc:
          '此款四季春茶產於全台最大四季春產地-南投名間區域，它是台灣近年最受年輕人歡迎的茶款之一，每一片茶葉都經過日曬後製造，沖泡後香氣強烈，茶湯入喉霸道的香氣瞬間充滿口腔。',
        shop_name: '貓空茶神',
        shop_desc: `張慶泉先生於１９８４年接手家裡的製茶功夫並且自行創立＂清泉茶園＂，家裡的茶園在張先生接手之前是一間沒有名氣的茶園，但製茶的工藝還是一代接著一代地傳了下來，直到第六代時，張慶泉先生憑藉著自身匠人的精神，台灣北中南四處與其他茶人請教、切磋製茶、焙茶的技術，也百次拜訪中國大陸各個產茶省分，深入了解不同茶的茶性與特色，讓他在＂茶＂這一途，打下牢不可破的基礎自從民國８３年拿到人生中第一次鐵觀音茶特等獎後，在往後的二十多年也多次獲得特等獎的殊榮，更多次蟬聯特等獎的寶座，「茶神」的名號不脛而走，茶樹底下的十多年成長加上匠人三十年的執著，使張大師悟出了茶最自然的滋味。清泉茶園於民國104年正式更名為＂貓空茶神＂至今。`,
      };
    } else if (prediction_id === 5) {
      //寒舍包種茶
      predictionData[prediction_id] = {
        prediction_name,
        pic_url: '/images/貓空茶神烏龍.jpg',
        product_desc:
          '此款高山烏龍茶產於海拔1200公尺到1350公尺的高山，它是台灣最具象徵意義的茶款，每一片茶葉都經由手工採摘以此保證能取得茶樹最好的部分，沖泡後香氣十足、茶湯先經過微苦的感受後帶出高海拔茶區特有的回甘清甜。',
        shop_name: '貓空茶神',
        shop_desc: `張慶泉先生於１９８４年接手家裡的製茶功夫並且自行創立＂清泉茶園＂，家裡的茶園在張先生接手之前是一間沒有名氣的茶園，但製茶的工藝還是一代接著一代地傳了下來，直到第六代時，張慶泉先生憑藉著自身匠人的精神，台灣北中南四處與其他茶人請教、切磋製茶、焙茶的技術，也百次拜訪中國大陸各個產茶省分，深入了解不同茶的茶性與特色，讓他在＂茶＂這一途，打下牢不可破的基礎自從民國８３年拿到人生中第一次鐵觀音茶特等獎後，在往後的二十多年也多次獲得特等獎的殊榮，更多次蟬聯特等獎的寶座，「茶神」的名號不脛而走，茶樹底下的十多年成長加上匠人三十年的執著，使張大師悟出了茶最自然的滋味。清泉茶園於民國104年正式更名為＂貓空茶神＂至今。`,
      };
    } else if (prediction_id === 6) {
      //寒舍鐵觀音紅茶
      predictionData[prediction_id] = {
        prediction_name,
        pic_url: '/images/貓空茶神鐵觀音紅茶.jpg',
        product_desc:
          '有別於一般鐵觀音的做法，此紅茶特別選用夏季的鐵觀音茶製造而成，其風味為擁有著被小綠葉蟬啜吸後的蜜香，也有著鐵觀音特有的熟果香，是一款既前衛又新奇的特殊茶款。 海拔：三百公尺',
        shop_name: '貓空茶神',
        shop_desc: `張慶泉先生於１９８４年接手家裡的製茶功夫並且自行創立＂清泉茶園＂，家裡的茶園在張先生接手之前是一間沒有名氣的茶園，但製茶的工藝還是一代接著一代地傳了下來，直到第六代時，張慶泉先生憑藉著自身匠人的精神，台灣北中南四處與其他茶人請教、切磋製茶、焙茶的技術，也百次拜訪中國大陸各個產茶省分，深入了解不同茶的茶性與特色，讓他在＂茶＂這一途，打下牢不可破的基礎自從民國８３年拿到人生中第一次鐵觀音茶特等獎後，在往後的二十多年也多次獲得特等獎的殊榮，更多次蟬聯特等獎的寶座，「茶神」的名號不脛而走，茶樹底下的十多年成長加上匠人三十年的執著，使張大師悟出了茶最自然的滋味。清泉茶園於民國104年正式更名為＂貓空茶神＂至今。`,
      };
    } else if (prediction_id === 7) {
      //寒舍鐵觀音紅茶
      predictionData[prediction_id] = {
        prediction_name,
        pic_url: '/images/貓空茶神鐵觀音.jpg',
        product_desc:
          '鐵觀音是木柵最具代表性的茶葉，因為木柵地區是保留傳統鐵觀音作法最完整的產地，此鐵觀音以濃厚的果香與烘烤的木質香為其風味特色。',
        shop_name: '貓空茶神',
        shop_desc: `張慶泉先生於１９８４年接手家裡的製茶功夫並且自行創立＂清泉茶園＂，家裡的茶園在張先生接手之前是一間沒有名氣的茶園，但製茶的工藝還是一代接著一代地傳了下來，直到第六代時，張慶泉先生憑藉著自身匠人的精神，台灣北中南四處與其他茶人請教、切磋製茶、焙茶的技術，也百次拜訪中國大陸各個產茶省分，深入了解不同茶的茶性與特色，讓他在＂茶＂這一途，打下牢不可破的基礎自從民國８３年拿到人生中第一次鐵觀音茶特等獎後，在往後的二十多年也多次獲得特等獎的殊榮，更多次蟬聯特等獎的寶座，「茶神」的名號不脛而走，茶樹底下的十多年成長加上匠人三十年的執著，使張大師悟出了茶最自然的滋味。清泉茶園於民國104年正式更名為＂貓空茶神＂至今。`,
      };
    } else if (prediction_id === 8) {
      //寒舍鐵觀音紅茶
      predictionData[prediction_id] = {
        prediction_name,
        pic_url: '/images/寒舍鐵觀音.jpg',
        product_desc: '屬於中發酵重烘培的茶。味濃而醇厚，入口回甘喉韻強。',
        shop_name: '寒舍茶坊',
        shop_desc:
          '貓空第一家有機茶店，重視生態，堅持無毒耕作，留給後人一方淨土',
      };
    } else if (prediction_id === 9) {
      //寒舍鐵觀音紅茶
      predictionData[prediction_id] = {
        prediction_name,
        pic_url: '/images/雙橡園鐵觀音.jpg',
        product_desc:
          '香氣附有甘醇的熟果、熟火香，茶色琥珀略紅，茶湯味濃而醇厚，滋味微澀中帶甘潤！',
        shop_name: '雙橡園',
        shop_desc:
          '貓空第一家有機茶店，重視生態，堅持無毒耕作，留給後人一方淨土',
      };
    } else if (prediction_id === 10) {
      //寒舍鐵觀音紅茶
      predictionData[prediction_id] = {
        prediction_name,
        pic_url: '/images/雙橡園蜜香紅茶.jpg',
        product_desc:
          '茶葉外觀形狀為條鎖型，滋味醇厚圓滑、耐泡、色澤鮮豔紅褐有光澤，茶湯落喉甘滑韻味強。',
        shop_name: '雙橡園',
        shop_desc: `貓空雙橡園茶坊開業至今30個年頭、除了推廣自家茶園栽種的手摘鐵觀音紅茶以外還將自家栽種的蔬菜水果運用在茶坊的菜色與飲品中；遊客也可以上網預約親子DIY鐵觀音茶鳳梨酥結合自然生態導覽，並將自製鐵觀音鳳梨酥點心搭配茶席享用！`,
      };
    } else if (prediction_id === 11) {
      //寒舍鐵觀音紅茶
      predictionData[prediction_id] = {
        prediction_name,
        pic_url: '/images/張協興文山包種.jpg',
        product_desc: '發酵度較低，條型蓬鬆，花香入水',
        shop_name: '張協興茶行',
        shop_desc:
          '1949年張協興茶行由第一代老闆張丁頂先生創立，數十年來秉持著永續經營的理念不斷精進，永遠不變的是對茶專業的執著與獨門的烘焙技術，傳統與創新並俱，張協興茶行給您最優質的茶葉響宴！',
      };
    } else if (prediction_id === 12) {
      //寒舍鐵觀音紅茶
      predictionData[prediction_id] = {
        prediction_name,
        pic_url: '/images/寒舍鐵觀音紅茶.jpg',
        product_desc:
          '由鐵觀音樹種製成的紅茶，只有在台北市的木柵山區才喝得到！',
        shop_name: '寒舍茶坊',
        shop_desc:
          '貓空第一家有機茶店，重視生態，堅持無毒耕作，留給後人一方淨土',
      };
    }
    selectedPrediction = predictionData[prediction_id];
    console.log('selectedPrediction:', selectedPrediction);
  }
  return (
    <React.Fragment>
      <div className="loading-spinner-container">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="sub_title" gutterBottom>
            以下是最適合您的茶款：
          </div>
          {Object.keys(selectedPrediction).length > 0 ? (
            <div className="sub_title">
              <Link href="/reservation" color="primary">
                立即預約試喝
              </Link>
            </div>
          ) : null}
        </div>
        <Grid container spacing={2}>
          {Object.keys(selectedPrediction).length > 0 ? (
            <>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3}>
                  <img
                    src={selectedPrediction.pic_url}
                    alt="Product"
                    width="100%"
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                  <div className="para_b">商品名稱:</div>
                  <div className="para">
                    {selectedPrediction.prediction_name}
                  </div>
                  <div className="para_b">商品描述:</div>
                  <div className="para">{selectedPrediction.product_desc}</div>
                  <div className="para_b">茶行名稱:</div>
                  <div className="para"> {selectedPrediction.shop_name}</div>
                  <div className="para_b">茶行介绍:</div>
                  <div className="para">{selectedPrediction.shop_desc}</div>
                </Paper>
              </Grid>
            </>
          ) : (
            <div className="loading-spinner">
              <div className="spinner"></div>
              <div className="spinner-word-container">
                <div className="spinner_word">找好茶ing...</div>
              </div>
            </div>
          )}
        </Grid>
      </div>
    </React.Fragment>
  );
}
