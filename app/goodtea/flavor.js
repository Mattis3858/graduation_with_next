import { useState } from 'react';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import {
  Box,
  Slider,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

export default function Flavor() {
  // 假设有一个 flavors 数组包含所有風味的信息
  const flavors = [
    { name: '焙烤', description: '爆米香、麵包、炒栗子' },
    { name: '煙燻', description: '煙燻、烏梅、鍋巴' },
    { name: '堅果雜糧', description: '開心果、榛果、芝麻' },
    { name: '青果', description: '芭樂、檸檬、梨子' },
    { name: '熟果', description: '芒果、荔枝、水蜜桃' },
    { name: '乾果', description: '葡萄乾、龍眼乾' },
    { name: '花香', description: '玫瑰花、茉莉花、梔子花' },
    { name: '糖香', description: '蔗糖、楓糖、麥芽糖' },
    { name: '奶香', description: '牛奶、椰奶、奶油' },
    { name: '蜜香', description: '爆米香、麵包、炒栗子' },
    { name: '草', description: '乾草、青草、仙草' },
    { name: '蔬菜', description: '空心菜、地瓜葉' },
    { name: '豆', description: '豆腐、綠豆、豌豆' },
    { name: '酸', description: '...' },
    { name: '甜', description: '...' },
    { name: '圓滑感', description: '...' },
    { name: '厚重感', description: '...' },
    { name: '甘醇度', description: '飲後回甘口感' },
    { name: '喉後韻', description: '茶湯入口生津後感' },
    { name: '回香感', description: '茶湯入喉後仍然感受到的香氣(留香、餘香)' },
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
                {flavors.map((flavor, index) => (
                  <TableRow key={flavor.name}>
                    <TableCell>{flavor.name}</TableCell>
                    <TableCell>{flavor.description}</TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <Slider
                          value={quantitativeValues[index].value}
                          min={0}
                          max={4}
                          step={0.01}
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
                            max: 4,
                            step: 0.01,
                          }}
                          onChange={(event) => handleTextChange(event, index)}
                          sx={{ marginLeft: '20px', width: '100px' }}
                        />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
