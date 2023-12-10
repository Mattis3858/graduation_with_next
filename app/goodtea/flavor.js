import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import * as React from 'react';
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
import { useMediaQuery } from '@mui/material';

const Flavor = forwardRef(
  ({ postData: externalPostData, onFlavorDataSubmit, ref, inputType }) => {
    const marks = [
      {
        value: 0,
        label: '無',
      },
      {
        value: 2.5,
        label: '稍重',
      },
      {
        value: 5,
        label: '超重',
      },
    ];

    // 用來 check 小螢幕斷點
    const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    // 在香氣、滋味、結束品茶間插入文字
    const flavIdToInsertText = {
      1: [
        '茶葉可能展現的多樣香氣，涵蓋了焙烤、果香、花香、甜香、青草、果仁和木質等各種迷人風味。',
        '香氣:泡好茶湯，取出茶葉，或瀝出茶湯後，靜置三分鐘等待茶湯冷卻，即可開始聞香，並填寫下方表格。',
      ],
      2: [
        '滋味:茶葉可能呈現出清新酸爽、甜美馥郁、口感圓滑以及濃郁厚重的多樣滋味',
        '滋味:填寫完香氣分數後，待茶湯靜置至六分鐘，即可開始品嘗滋味了!請填寫以下滋味分數。',
      ],
      3: [
        '茶韻:喝完茶後，人們可能會體會到茶韻，一種平衡的回甘口感、滑順清爽的喉後韻以及從咽喉回鼻腔的迴盪香氣。',
        '結束品茶:品嘗完茶湯後，感受口中香氣與喉內滋味，綜合填寫下方分數。',
      ],
    };

    // 呈現於表格上的風味名稱、描述
    const flavors = [
      {
        flavId: 1,
        name: '焙烤香 - 烘焙味',
        description: '爆米香、麵包、炒栗子',
      },
      { flavId: 1, name: '焙烤香 - 煙燻味', description: '煙燻、烏梅、鍋巴' },
      { flavId: 1, name: '果香 - 乾果味', description: '葡萄乾、龍眼乾' },
      { flavId: 1, name: '花香 - 清香', description: '玉蘭花、桂花、茉莉花' },
      { flavId: 1, name: '花香 - 濃香', description: '玫瑰花、野薑花、柚花' },
      { flavId: 1, name: '甜香 - 糖香味', description: '蔗糖、楓糖、麥芽糖' },
      { flavId: 1, name: '甜香 - 蜜香味', description: '蜂蜜' },
      { flavId: 1, name: '青草香 - 草香味', description: '乾草、青草、仙草' },
      { flavId: 1, name: '果仁香 - 堅果味', description: '開心果、榛果、芝麻' },
      {
        flavId: 1,
        name: '木質香',
        description: '乾燥木材、樹皮，或者燻木的味道',
      },
      {
        flavId: 2,
        name: '酸味',
        description: '清新而活潑的口感，類似水果的自然酸度',
      },
      { flavId: 2, name: '甜味', description: '帶有蜜糖、果香或焦糖的甜美' },
      {
        flavId: 2,
        name: '圓滑感',
        description: '口中滑順，沒有刺激感或粗糙感',
      },
      { flavId: 2, name: '厚重感', description: '濃郁、飽滿，給人一種滿足感' },
      {
        flavId: 3,
        name: '甘醇度',
        description: '飲後回甘口感，在口中感覺平衡，沒有過分的苦澀或澀味',
      },
      {
        flavId: 3,
        name: '喉後韻',
        description:
          '茶水下喉後留在喉嚨和口腔內的感覺，擁有一種滑順、清爽、甚至稍有涼感的喉韻',
      },
      {
        flavId: 3,
        name: '回香感',
        description: '茶水入口後，香氣透過咽喉回到鼻腔的餘韻感',
      },
    ];

    // 對應 postData 結果的 falvorScores 變數
    const [flavorScores, setFlavorScores] = useState({}); // to store user changes

    const handleFormSubmit = () => {
      console.log('Flavor - handleFormSubmit is called'); // 确保这行代码被执行了
      if (onFlavorDataSubmit) {
        const flavorDataArray = Object.entries(flavorScores).map(
          ([name, value]) => ({ name, value })
        );
        console.log('Flavor - calling onFlavorDataSubmit', flavorDataArray); // 确保这行代码被执行了并且打印出了正确的数据
        onFlavorDataSubmit(flavorDataArray);
      }
    };

    // ref，讓父組件能夠呼叫它
    useImperativeHandle(ref, () => ({
      handleFormSubmit,
    }));

    // 處理 postData 資料更新狀態
    React.useEffect(() => {
      console.log('externalPostData', externalPostData);
      if (Array.isArray(externalPostData)) {
        const updatedFlavorScores = {};
        externalPostData.forEach((entry) => {
          entry.results.forEach((result) => {
            const { flavor, score } = result;
            updatedFlavorScores[flavor] = score;
          });
        });
        setFlavorScores(updatedFlavorScores);
      }
    }, [externalPostData]);

    // 清晰區分Slider和TextField的onChange處理程序
    const handleSliderChange = (event, newValue, flavorName) => {
      setFlavorScores((prevFlavorScores) => ({
        ...prevFlavorScores,
        [flavorName]: newValue,
      }));
    };

    const handleTextFieldChange = (event, flavorName) => {
      setFlavorScores((prevFlavorScores) => ({
        ...prevFlavorScores,
        [flavorName]: parseFloat(event.target.value),
      }));
    };

    return (
      <React.Fragment>
        <div className="sub_title" gutterBottom>
          請填寫風味資訊
        </div>
        <div className="para" gutterBottom>
          0 - 無 1 - 輕微 2 - 偏輕 3 - 普通 4 - 偏重 5 - 超級重
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              {isSmScreen ? (
                <Table>
                  <TableRow>
                    {inputType === 1 ? (
                      <TableCell className="cell_bt_cell" colSpan={3}>
                        香氣:泡好茶湯，取出茶葉，或瀝出茶湯後，靜置三分鐘等待茶湯冷卻，即可開始聞香，並填寫下方表格。
                      </TableCell>
                    ) : (
                      <TableCell className="cell_bt_cell" colSpan={3}>
                        香氣:茶葉可能展現的多樣香氣，涵蓋了焙烤、果香、花香、甜香、青草、果仁和木質等各種迷人風味。
                      </TableCell>
                    )}
                  </TableRow>
                  <TableBody>
                    {flavors.map((flavor, index) => (
                      <React.Fragment key={flavor.name}>
                        {index > 0 &&
                          flavors[index - 1].flavId !== flavor.flavId && (
                            <TableRow
                              key={`inserted-row-${flavor.flavId}-${index}`}
                            >
                              <TableCell className="cell_bt_cell" colSpan={3}>
                                {flavIdToInsertText[flavor.flavId][inputType]}
                              </TableCell>
                            </TableRow>
                          )}
                        <TableRow>
                          <TableCell className="tea_name_v">
                            {flavor.name}
                          </TableCell>
                          <TableCell className="tea_desc_v">
                            {flavor.description}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell colSpan={3}>
                            <Box display="flex" alignItems="center">
                              <Slider
                                value={flavorScores[flavor.name] || 0}
                                min={0}
                                max={5}
                                step={0.0001}
                                onChange={(event, newValue) =>
                                  handleSliderChange(
                                    event,
                                    newValue,
                                    flavor.name
                                  )
                                }
                                marks={marks}
                              />
                              <TextField
                                id={`quantitative-value-${flavor.name}`}
                                className="quantitative_value_input"
                                label=""
                                type="number"
                                value={flavorScores[flavor.name] || 0}
                                inputProps={{
                                  min: 0,
                                  max: 5,
                                  step: 0.0001,
                                }}
                                variant="standard"
                                onChange={(event) =>
                                  handleTextFieldChange(event, flavor.name)
                                }
                                sx={{ marginLeft: '20px', width: '100px' }}
                              />
                            </Box>
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className="table_top" sx={{ width: '20%' }}>
                        代表風味
                      </TableCell>
                      <TableCell className="table_top" sx={{ width: '30%' }}>
                        描述
                      </TableCell>
                      <TableCell className="table_top" sx={{ width: '50%' }}>
                        量化數字
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {console.log(inputType)}
                      {inputType === 1 ? (
                        <TableCell className="cell_bt_cell" colSpan={3}>
                          香氣:泡好茶湯，取出茶葉，或瀝出茶湯後，靜置三分鐘等待茶湯冷卻，即可開始聞香，並填寫下方表格。
                        </TableCell>
                      ) : (
                        <TableCell className="cell_bt_cell" colSpan={3}>
                          香氣:茶葉可能展現的多樣香氣，涵蓋了焙烤、果香、花香、甜香、青草、果仁和木質等各種迷人風味。
                        </TableCell>
                      )}
                    </TableRow>
                    {flavors.map((flavor, index) => (
                      <React.Fragment key={flavor.name}>
                        {index > 0 &&
                          flavors[index - 1].flavId !== flavor.flavId && (
                            <TableRow
                              key={`inserted-row-${flavor.flavId}-${index}`}
                            >
                              <TableCell className="cell_bt_cell" colSpan={3}>
                                {flavIdToInsertText[flavor.flavId][inputType]}
                              </TableCell>
                            </TableRow>
                          )}
                        <TableRow>
                          <TableCell className="tea_name">
                            {flavor.name}
                          </TableCell>
                          <TableCell className="tea_desc">
                            {flavor.description}
                          </TableCell>
                          <TableCell>
                            <Box display="flex" alignItems="center">
                              <Slider
                                value={flavorScores[flavor.name] || 0}
                                min={0}
                                max={5}
                                step={0.0001}
                                onChange={(event, newValue) =>
                                  handleSliderChange(
                                    event,
                                    newValue,
                                    flavor.name
                                  )
                                }
                                marks={marks}
                              />
                              <TextField
                                id={`quantitative-value-${flavor.name}`}
                                className="quantitative_value_input"
                                label=""
                                type="number"
                                value={flavorScores[flavor.name] || 0}
                                inputProps={{
                                  min: 0,
                                  max: 5,
                                  step: 0.0001,
                                }}
                                variant="standard"
                                onChange={(event) =>
                                  handleTextFieldChange(event, flavor.name)
                                }
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
);

export default Flavor;
