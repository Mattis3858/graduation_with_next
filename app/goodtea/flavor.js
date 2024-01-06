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
  (
    {
      postData: externalPostData,
      onFlavorDataSubmit,
      inputType = 0,
      setApiSentData,
    },

    ref
  ) => {
    const marks = [
      {
        value: 0,
        label: '無(None)',
      },
      {
        value: 2.5,
        label: '稍重(Significant)',
      },
      {
        value: 5,
        label: '超重(Heavy)',
      },
    ];

    // 用來 check 小螢幕斷點
    const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    // 在香氣、滋味、結束品茶間插入文字
    const flavIdToInsertText = {
      1: [
        '茶葉可能展現的多樣香氣，涵蓋了焙烤、果香、花香、甜香、青草、果仁和木質等各種迷人風味。<br />(The diverse aromas that tea leaves may exhibit encompass a wide range of enchanting flavors, including roasted, fruity, floral, sweet, grassy, nutty, and woody notes.)',
        '香氣:泡好茶湯，取出茶葉，或瀝出茶湯後，靜置三分鐘等待茶湯冷卻，即可開始聞香，並填寫下方表格。<br />(Aroma: After brewing the tea and removing the leaves or straining the tea, allow it to sit for three minutes to cool. Begin to smell the aroma and proceed to fill in the form below.)',
      ],
      2: [
        '滋味:茶葉可能呈現出清新酸爽、甜美馥郁、口感圓滑以及濃郁厚重的多樣滋味<br />Flavor: Tea leaves can present a variety of flavors, including refreshing tartness, delightful sweetness, rich and full-bodied smoothness, as well as intense and robust richness',
        '滋味:填寫完香氣分數後，待茶湯靜置至六分鐘，即可開始品嘗滋味了!請填寫以下滋味分數。',
      ],
      3: [
        "茶韻:喝完茶後，人們可能會體會到茶韻，一種平衡的回甘口感、滑順清爽的喉後韻以及從咽喉回鼻腔的迴盪香氣。<br />Tea Aftertaste: After consuming tea, individuals may experience tea's aftertaste, characterized by a balanced lingering sweetness, a smooth and refreshing sensation at the back of the throat, and the lingering aroma resonating from the throat to the nasal cavity.",
        '結束品茶:品嘗完茶湯後，感受口中香氣與喉內滋味，綜合填寫下方分數。',
      ],
    };

    // 呈現於表格上的風味名稱、描述
    const flavors = [
      {
        flavId: 1,
        name: '焙烤香 - 烘焙味',
        description: '爆米香、麵包、炒栗子',
        enName: 'Roasted Aroma - Roasted Flavor',
        enDescription: 'Popped rice, bread, roasted chestnut',
      },
      {
        flavId: 1,
        name: '焙烤香 - 煙燻味',
        description: '煙燻、烏梅、鍋巴',
        enName: 'Smoky Aroma - Smoked Flavor',
        enDescription: 'Smokiness, dried plum, toasted rice',
      },
      {
        flavId: 1,
        name: '果香 - 乾果味',
        description: '葡萄乾、龍眼乾',
        enName: 'Fruity Aroma - Dried Fruit Flavor',
        enDescription: 'Raisins, longan',
      },
      {
        flavId: 1,
        name: '花香 - 清香',
        description: '玉蘭花、桂花、茉莉花',
        enName: 'Floral Aroma - Light Fragrance',
        enDescription: 'Magnolia, osmanthus, jasmine',
      },
      {
        flavId: 1,
        name: '花香 - 濃香',
        description: '玫瑰花、野薑花、柚花',
        enName: 'Floral Aroma - Intense Fragrance',
        enDescription: 'Rose, ginger flower, pomelo flower',
      },
      {
        flavId: 1,
        name: '甜香 - 糖香味',
        description: '蔗糖、楓糖、麥芽糖',
        enName: 'Sweet Aroma - Sugary Flavor',
        enDescription: 'Cane sugar, maple syrup, malt sugar',
      },
      {
        flavId: 1,
        name: '甜香 - 蜜香味',
        description: '蜂蜜',
        enName: 'Sweet Aroma - Honey Flavor',
        enDescription: 'Honey',
      },
      {
        flavId: 1,
        name: '青草香 - 草香味',
        description: '乾草、青草、仙草',
        enName: 'Grassy Aroma - Herbal Flavor',
        enDescription: 'Hay, grass, pennyroyal',
      },
      {
        flavId: 1,
        name: '果仁香 - 堅果味',
        description: '開心果、榛果、芝麻',
        enName: 'Nutty Aroma - Nutty Flavor',
        enDescription: 'Pistachio, hazelnut, sesame',
      },
      {
        flavId: 1,
        name: '木質香',
        description: '乾燥木材、樹皮，或者燻木的味道',
        enName: 'Woody Aroma',
        enDescription: 'Dry wood, bark, or the flavor of smoked wood',
      },
      {
        flavId: 2,
        name: '酸味',
        description: '清新而活潑的口感，類似水果的自然酸度',
        enName: 'Sourness',
        enDescription:
          'Fresh and lively sensation similar to the natural acidity of fruits',
      },
      {
        flavId: 2,
        name: '甜味',
        description: '帶有蜜糖、果香或焦糖的甜美',
        enName: 'Sweetness',
        enDescription:
          'Sweetness reminiscent of honey, fruity notes, or caramel',
      },
      {
        flavId: 2,
        name: '圓滑感',
        description: '口中滑順，沒有刺激感或粗糙感',
        enName: 'Smoothness',
        enDescription: 'Smooth sensation without any sharpness or roughness',
      },
      {
        flavId: 2,
        name: '厚重感',
        description: '濃郁、飽滿，給人一種滿足感',
        enName: 'Heaviness',
        enDescription: 'Rich, full-bodied, giving a sense of satisfaction',
      },
      {
        flavId: 3,
        name: '甘醇度',
        description: '飲後回甘口感，在口中感覺平衡，沒有過分的苦澀或澀味',
        enName: 'Mellowness',
        enDescription:
          'Mellow aftertaste upon drinking, a balanced sensation in the mouth without excessive bitterness or astringency',
      },
      {
        flavId: 3,
        name: '喉後韻',
        description:
          '茶水下喉後留在喉嚨和口腔內的感覺，擁有一種滑順、清爽、甚至稍有涼感的喉韻',
        enName: 'Throat Sensation',
        enDescription:
          'Sensation felt in the throat and mouth after swallowing tea, with a smooth, refreshing, and sometimes slightly cool aftertaste',
      },
      {
        flavId: 3,
        name: '回香感',
        description: '茶水入口後，香氣透過咽喉回到鼻腔的餘韻感',
        enName: 'Aroma Resonance',
        enDescription:
          'The lingering aroma that travels back to the nasal cavity through the throat after drinking tea',
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
    useEffect(() => {
      setApiSentData(flavorScores);
    }, [flavorScores]);
    // ref，讓父組件能夠呼叫它
    useImperativeHandle(ref, () => ({
      handleFormSubmit,
    }));

    // 處理 postData 資料更新狀態
    React.useEffect(() => {
      // console.log('externalPostData', externalPostData);
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
        {/* {console.log(flavorScores)} */}
        <div className="sub_title" gutterBottom>
          請填寫風味資訊(Please fill in flavor information)
        </div>
        <div className="para" gutterBottom>
          0 - 無 1 - 輕微 2 - 偏輕 3 - 普通 4 - 偏重 5 - 超級重(0 - None 1 -
          Mild 2 - Slight 3 - Moderate 4 - Significant 5 - Severe)
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
                        香氣:茶葉可能展現的多樣香氣，涵蓋了焙烤、果香、花香、甜香、青草、果仁和木質等各種迷人風味。(Aroma:The
                        diverse aromas that tea leaves may exhibit encompass a
                        wide range of enchanting flavors, including roasted,
                        fruity, floral, sweet, grassy, nutty, and woody notes.)
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
                        代表風味(Representative flavors)
                      </TableCell>
                      <TableCell className="table_top" sx={{ width: '30%' }}>
                        描述(Description)
                      </TableCell>
                      <TableCell className="table_top" sx={{ width: '50%' }}>
                        量化數字(Quantitative figures)
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      {inputType === 1 ? (
                        <TableCell className="cell_bt_cell" colSpan={3}>
                          香氣:泡好茶湯，取出茶葉，或瀝出茶湯後，靜置三分鐘等待茶湯冷卻，即可開始聞香，並填寫下方表格。
                        </TableCell>
                      ) : (
                        <TableCell className="cell_bt_cell" colSpan={3}>
                          香氣:茶葉可能展現的多樣香氣，涵蓋了焙烤、果香、花香、甜香、青草、果仁和木質等各種迷人風味。
                          <br />
                          The diverse aromas that tea leaves may exhibit
                          encompass a wide range of enchanting flavors,
                          including roasted, fruity, floral, sweet, grassy,
                          nutty, and woody notes.
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
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      flavIdToInsertText[flavor.flavId][
                                        inputType
                                      ],
                                  }}
                                />
                              </TableCell>
                            </TableRow>
                          )}
                        <TableRow>
                          <TableCell className="tea_name">
                            {flavor.name}
                            <br />
                            {flavor.enName}
                          </TableCell>
                          <TableCell className="tea_desc">
                            {flavor.description}
                            <br />
                            {flavor.enDescription}
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
