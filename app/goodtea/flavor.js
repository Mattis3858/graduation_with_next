import { useState } from 'react';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Box, Slider, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function Flavor() {
    

  // 假设有一个 flavors 数组包含所有風味的信息
  const flavors = [
    { flavId:1, name: '烘焙味', description: '爆米香、麵包、炒栗子' },
    { flavId:1, name: '煙燻味', description: '煙燻、烏梅、鍋巴' },
    { flavId:1, name: '青果味', description: '芭樂、檸檬、梨子' },
    { flavId:1, name: '熟果味', description: '芒果、荔枝、水蜜桃' },
    { flavId:1, name: '乾果味', description: '葡萄乾、龍眼乾' },
    { flavId:1, name: '清花香', description: '玉蘭花、桂花、茉莉花' },
    { flavId:1, name: '濃花香', description: '玫瑰花、茉莉花、梔子花' },
    { flavId:1, name: '奶香味', description: '牛奶、椰奶、奶油' },
    { flavId:1, name: '糖香味', description: '蔗糖、楓糖、麥芽糖' },
    { flavId:1, name: '蜜香味', description: '蜂蜜' },
    { flavId:1, name: '草香味', description: '乾草、青草、仙草' },
    { flavId:1, name: '藥草味', description: '就是藥草' },
    { flavId:1, name: '蔬菜味', description: '空心菜、地瓜葉、玉米筍' },
    { flavId:1, name: '豆味', description: '豆腐、綠豆、豌豆' },
    { flavId:1, name: '堅果味', description: '開心果、榛果、芝麻' },
    { flavId:1, name: '穀物味', description: '花生、稻米、決明子' },
    { flavId:1, name: '根莖植物味', description: '甘藷、芋頭' },
    { flavId:1, name: '海洋味', description: '海味兒' },
    { flavId:1, name: '陳味', description: '陳味兒' },
    { flavId:1, name: '發酵味', description: '發酵味兒' },
    { flavId:1, name: '香料味', description: '香料味兒' },
    { flavId:1, name: '中藥味', description: '中藥味兒' },
    { flavId:1, name: '木質香', description: '木質香味兒' },
    { flavId:2, name: '酸', description: '酸酸' },
    { flavId:2, name: '甜', description: '甜甜' },
    { flavId:2, name: '圓滑感', description: '好ㄏ' },
    { flavId:2, name: '厚重感', description: '喝拎' },
    { flavId:3, name: '甘醇度', description: '飲後回甘口感' },
    { flavId:3, name: '喉後韻', description: '茶湯入口生津後感' },
    { flavId:3, name: '回香感', description: '茶湯入喉後仍然感受到的香氣(留香、餘香)' },
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

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        請填寫風味資訊
      </Typography>
      <Typography gutterBottom>
        0 - 無  1 - 輕微 2 - 偏輕 3 - 普通 4 - 偏重 5 - 超級重
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ width: '15%' }}>
                    代表風味
                  </TableCell>
                  <TableCell align="center" sx={{ width: '35%' }}>
                    描述
                  </TableCell>
                  <TableCell align="center" sx={{ width: '55%' }}>
                    量化數字
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                <TableCell colSpan={3}>
                  香氣:泡好茶湯，取出茶葉，或瀝出茶湯後，靜置三分鐘等待茶湯冷卻，即可開始聞香，並填寫下方表格。
                  </TableCell>
                  </TableRow>
                
                  {flavors.map((flavor, index) => (
                  <React.Fragment key={flavor.name}>
                    {index > 0 && flavors[index - 1].flavId !== flavor.flavId && (
                      <TableRow key={`inserted-row-${flavor.flavId}-${index}`}>
                        <TableCell colSpan={3}>
                          {flavIdToInsertText[flavor.flavId]}
                        </TableCell>
                      </TableRow>
                    )}
                    <TableRow>
                      <TableCell>{flavor.name}</TableCell>
                      <TableCell>{flavor.description}</TableCell>
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
                            label="量化數字"
                            type="number"
                            value={quantitativeValues[index].value}
                            inputProps={{
                              min: 0,
                              max: 5,
                              step: 0.0001,
                            }}
                            onChange={(event) => handleTextChange(event, index)}
                            sx={{ marginLeft: '20px', width: '100px' }}
                          />
                        </Box>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}