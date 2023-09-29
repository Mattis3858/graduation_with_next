import * as React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import './goodTea.css';


export default function Result({ result }){
    console.log('result-page:',result); 
    const predictionData = {};
    let prediction_id = null;
    let selectedPrediction = {};
    if (result) {
        console.log('Setting selectedPrediction...');
        const { prediction_id: resultPredictionId, prediction_name } = result;
        prediction_id = resultPredictionId;
        if (prediction_id === 0) { //張協興鐵觀音
            predictionData[prediction_id] = {
              prediction_name,
              pic_url: '/images/張協興鐵觀音.jpg', 
              product_desc: '木柵鐵觀音每年春、冬兩季比賽，優良獎每罐300公克。 一般春茶茶湯滋味較好，冬茶茶香冬氣冷冽', 
              shop_name: '張協興茶行', 
              shop_desc:'1954年由木柵茶區最著名的老茶人張丁頂創立的張協興茶行，傳承著六十幾年的炭焙方式，烘焙技術「忠於原味」而樹立了良好的口碑。茶行隨世代轉型，致力展現台灣精緻茶業的文化深度，是木柵鐵觀音的輝煌歷史代表。',
            };
          } else if (prediction_id === 1) { //張協興包種茶
            predictionData[prediction_id] = {
              prediction_name,
              pic_url: '/images/張協興文山包種茶.jpg', 
              product_desc: '坪林包種茶，輕發酵，不烘焙（生茶）', 
              shop_name: '張協興茶行', 
              shop_desc:'1954年由木柵茶區最著名的老茶人張丁頂創立的張協興茶行，傳承著六十幾年的炭焙方式，烘焙技術「忠於原味」而樹立了良好的口碑。茶行隨世代轉型，致力展現台灣精緻茶業的文化深度，是木柵鐵觀音的輝煌歷史代表。',
            };
          }else if (prediction_id === 2) { //威叔鐵觀音
            predictionData[prediction_id] = {
              prediction_name,
              pic_url: '/images/威叔鐵觀音.jpg', 
              product_desc: '鐵觀音茶，木柵在地特產，威叔的信心之作。 滋味醇厚，茶湯琥珀色，純正品種之茶葉菁原料，經過日光萎凋足、攪拌成度與靜置時程夠，加上3天以上布包團揉、文火慢焙，孕育熟果香，呈現若果酸的傳統風味。', 
              shop_name: '威叔茶莊', 
              shop_desc: '我們的有機茶園座落於貓空纜車貓空站正前方山上，距離貓空站僅150公尺，步行3~5分鐘即可到達。因為位於道路上方，不但無車煙危害，更可俯瞰大台北盆地美景。更重要的，這是一座隨大自然運作的有機茶園！',
            };
          }else if (prediction_id === 3) { //威叔鐵觀音紅茶
            predictionData[prediction_id] = {
              prediction_name,
              pic_url: '/images/威叔鐵觀音紅茶.jpg', 
              product_desc: '觀韻紅茶，鐵觀音茶樹的葉，夏秋之際採收做成紅茶，和魚池紅茶阿薩姆紅茶味道完全不同，有鐵觀音與紅茶交融的味道。', 
              shop_name: '威叔茶莊', 
              shop_desc: '我們的有機茶園座落於貓空纜車貓空站正前方山上，距離貓空站僅150公尺，步行3~5分鐘即可到達。因為位於道路上方，不但無車煙危害，更可俯瞰大台北盆地美景。更重要的，這是一座隨大自然運作的有機茶園！',
            };
          }else if (prediction_id === 4) { //寒舍包種茶
            predictionData[prediction_id] = {
              prediction_name,
              pic_url: '/images/寒舍文山包種茶.jpg', 
              product_desc: '發酵程度較輕微的茶類， 能享受其撲鼻的花香味,是茶中極品。', 
              shop_name: '寒舍茶坊', 
              shop_desc: '貓空第一家有機茶店，重視生態，堅持無毒耕作，留給後人一方淨土',
            };
          }else if (prediction_id === 5) { //寒舍鐵觀音紅茶
            predictionData[prediction_id] = {
              prediction_name,
              pic_url: '/images/寒舍鐵觀音紅茶.jpg', 
              product_desc: '由鐵觀音樹種製成的紅茶，只有在台北市的木柵山區才喝得到！', 
              shop_name: '寒舍茶坊', 
              shop_desc: '貓空第一家有機茶店，重視生態，堅持無毒耕作，留給後人一方淨土',
            };
          }
          selectedPrediction = predictionData[prediction_id];
          console.log('selectedPrediction:', selectedPrediction);

        }
    return (
        <React.Fragment>
        <div className="loading-spinner-container">
        <div className='sub_title' gutterBottom>
          以下是最適合您的茶款:
        </div>
        <Grid container spacing={2}>
            {Object.keys(selectedPrediction).length > 0 ? ( 
            <>
                <Grid item xs={12} sm={6}>
                <Paper elevation={3}>
                    <img src={selectedPrediction.pic_url} alt="Product" width="100%" />
                </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <div className='para_b'>商品名稱:</div><div className='para'>{selectedPrediction.prediction_name}</div>
                    <div className='para_b'>商品描述:</div><div className='para'>{selectedPrediction.product_desc}</div>
                    <div className='para_b'>茶行名稱:</div><div className='para'> {selectedPrediction.shop_name}</div>
                    <div className='para_b'>茶行介绍:</div><div className='para'>{selectedPrediction.shop_desc}</div>
                </Paper>
                </Grid>
            </>
            ) : (
              <div className="loading-spinner">
              <div className="spinner">
                <div className='spinner-word-container'>
                  <div className='spinner_word'>找好茶ing...</div>
                </div>
              </div>
            </div>
            )}
        </Grid>
        </div>
        </React.Fragment>
        );
    }