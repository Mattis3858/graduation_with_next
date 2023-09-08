import { useState } from 'react';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, Slider, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useMediaQuery } from '@mui/material';

export default function Flavor({ postData }) {
  const flavIdToInsertText = {
    1: '香氣:泡好茶湯，取出茶葉，或瀝出茶湯後，靜置三分鐘等待茶湯冷卻，即可開始聞香，並填寫下方表格。',
    2: '滋味:填寫完香氣分數後，待茶湯靜置至六分鐘，即可開始品嘗滋味了!請填寫以下滋味分數。',
    3: '結束品茶:品嘗完茶湯後，感受口中香氣與喉內滋味，綜合填寫下方分數。',
    // 添加其他 flavId 和對應的插入文字
  };

  // 假设有一个 flavors 数组包含所有風味的信息
  const flavors = [
    { flavId:1, name: '焙烤香 - 烘焙味', description: '爆米香、麵包、炒栗子' },
    { flavId:1, name: '焙烤香 - 煙燻味', description: '煙燻、烏梅、鍋巴' },
    { flavId:1, name: '果香 - 乾果味', description: '葡萄乾、龍眼乾' },
    { flavId:1, name: '花香 - 清香', description: '玉蘭花、桂花、茉莉花' },
    { flavId:1, name: '花香 - 濃香', description: '玫瑰花、野薑花、柚花' },
    { flavId:1, name: '甜香 - 糖香味', description: '蔗糖、楓糖、麥芽糖' },
    { flavId:1, name: '甜香 - 蜜香味', description: '蜂蜜' },
    { flavId:1, name: '青草香 - 草香味', description: '乾草、青草、仙草' },
    { flavId:1, name: '果仁香 - 堅果味', description: '開心果、榛果、芝麻' },
    { flavId:1, name: '木質香', description: '木頭味' },
    { flavId:2, name: '酸味', description: '酸酸' },
    { flavId:2, name: '甜味', description: '甜甜' },
    { flavId:2, name: '圓滑感', description: '好ㄏ' },
    { flavId:2, name: '厚重感', description: '喝拎' },
    { flavId:3, name: '甘醇度', description: '飲後回甘口感' },
    { flavId:3, name: '喉後韻', description: '茶湯入口生津後感' },
    { flavId:3, name: '回香感', description: '茶湯入喉後仍然感受到的餘香' },
    // 添加其他風味的信息
  ];

  const [quantitativeValues, setQuantitativeValues] = useState(
    flavors.map((flavor) => ({ name: flavor.name, value: 2 }))
  );

  const handleSliderChange = (event, newValue, flavorIndex) => {
    setQuantitativeValues((prevQuantitativeValues) => {
      const newQuantitativeValues = [...prevQuantitativeValues];
      newQuantitativeValues[flavorIndex].value = newValue;
      return newQuantitativeValues;
    });
  };

  const handleTextChange = (event, flavorIndex) => {
    setQuantitativeValues((prevQuantitativeValues) => {
      const newQuantitativeValues = [...prevQuantitativeValues];
      newQuantitativeValues[flavorIndex].value = parseFloat(event.target.value);
      return newQuantitativeValues;
    });
  };

   // 用來check 斷點
   const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));


  return (
    <React.Fragment>
      <div className='sub_title' gutterBottom>
        請填寫風味資訊
      </div>
      <div className='para' gutterBottom>
        0 - 無  1 - 輕微 2 - 偏輕 3 - 普通 4 - 偏重 5 - 超級重
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
          {isSmScreen ? (
             <Table>
              <TableRow>
                <TableCell className='cell_bt_cell' colSpan={3}>
                  香氣:泡好茶湯，取出茶葉，或瀝出茶湯後，靜置三分鐘等待茶湯冷卻，即可開始聞香，並填寫下方表格。
                  </TableCell>
                  </TableRow>
             <TableBody>
               {flavors.map((flavor, index) => (
                 <React.Fragment key={flavor.name}>
                   {index > 0 && flavors[index - 1].flavId !== flavor.flavId && (
                     <TableRow key={`inserted-row-${flavor.flavId}-${index}`}>
                       <TableCell className='cell_bt_cell' colSpan={3}>
                         {flavIdToInsertText[flavor.flavId]}
                       </TableCell>
                     </TableRow>
                   )}
                   <TableRow>
                     <TableCell className='tea_name_v'>{flavor.name}</TableCell>
                     <TableCell className='tea_desc_v'>{flavor.description}</TableCell>
                   </TableRow>
                   <TableRow>
                     <TableCell colSpan={3}>
                       <Box display="flex" alignItems="center">
                       <Slider
                          value={quantitativeValues[index].value}
                          min={0}
                          max={5}
                          step={0.0001}
                          onChange={(event, newValue) =>
                            handleSliderChange(event, newValue, index)
                          }
                        />
                        <TextField
                          id={`quantitative-value-${flavor.name}`}
                          className='quantitative_value_input'
                          label=""
                          type="number"
                          value={quantitativeValues[index].value}
                          inputProps={{
                            min: 0,
                            max: 5,
                            step: 0.0001,
                          }}
                          variant="standard"
                          onChange={(event) => {
                            handleSliderChange(event, event.target.value, index); // 更新滑块值
                            handleTextChange(event, index); // 更新文本字段值
                          }}
                          sx={{ marginLeft: '20px', width: '100px' }}
                        />
                       </Box>
                     </TableCell>
                   </TableRow>
                 </React.Fragment>
               ))}
             </TableBody>
           </Table>
            ):( 
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className='table_top' sx={{ width: '20%' }}>
                    代表風味
                  </TableCell>
                  <TableCell className='table_top' sx={{ width: '30%' }}>
                    描述
                  </TableCell>
                  <TableCell className='table_top'  sx={{ width: '50%' }}>
                    量化數字
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                <TableCell className='cell_bt_cell' colSpan={3}>
                  香氣:泡好茶湯，取出茶葉，或瀝出茶湯後，靜置三分鐘等待茶湯冷卻，即可開始聞香，並填寫下方表格。
                  </TableCell>
                  </TableRow>
                
                  {flavors.map((flavor, index) => (
                  <React.Fragment key={flavor.name}>
                    {index > 0 && flavors[index - 1].flavId !== flavor.flavId && (
                      <TableRow key={`inserted-row-${flavor.flavId}-${index}`}>
                        <TableCell className='cell_bt_cell' colSpan={3}>
                          {flavIdToInsertText[flavor.flavId]}
                        </TableCell>
                      </TableRow>
                    )}
                    <TableRow>
                      <TableCell className='tea_name'>{flavor.name}</TableCell>
                      <TableCell className='tea_desc'>{flavor.description}</TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <Slider
                            value={quantitativeValues[index].value}
                            min={0}
                            max={5}
                            step={0.0001}
                            onChange={(event, newValue) =>
                              handleSliderChange(event, newValue, index)
                            }
                          />
                          <TextField
                            id={`quantitative-value-${flavor.name}`}
                            className='quantitative_value_input'
                            label=""
                            type="number"
                            value={quantitativeValues[index].value}
                            inputProps={{
                              min: 0,
                              max: 5,
                              step: 0.0001,
                            }}
                            variant="standard"
                            onChange={(event) => {
                              handleSliderChange(event, event.target.value, index); // 更新滑块值
                              handleTextChange(event, index); // 更新文本字段值
                            }}
                            sx={{ marginLeft: '20px', width: '100px' }}
                          />
                        </Box>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
            )}
          </TableContainer>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}