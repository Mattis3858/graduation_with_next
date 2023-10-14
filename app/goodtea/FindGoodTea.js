'use client'; // This is a client component

import React, { useState, useCallback, useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SetStatus from './setStatus'; // First Step: Choose Status
import Flavor from './flavor'; // Fill in Flavor
import TeaColorTest from './TeaColorTest'; // Second Step 1: Tea color test + brew tea flow
import Posttest from './posttest'; // Second Step 0: Posttest data
import './goodTea.css';
import Thankyou from './thankyou'; // Third Step 1: Thank you page
import Result from './result'; // Third Step 0: Result page

// step label on the step bar
const steps = ['選擇品評方式', '', '填寫風味資訊'];

// theme settings
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#329d9c',
      light: '#68cbca',
      dark: '#1f8684',
    },
    secondary: {
      main: '#d8a48f',
      light: '#f1cbbc',
      dark: '#cd8366',
    },
    text: {
      primary: '#2d2d2e',
      secondary: '#4a4a4d',
    },
    background: {},
  },
});

// FindGoodTea component
const FindGoodTea = () => {
  const [activeStep, setActiveStep] = useState(0); // 取得前往的step
  const [selectedOption, setSelectedOption] = useState(''); // 取得selected option
  const [currentStep, setCurrentStep] = React.useState(1); // 設定當前的 selected option 預設為0
  const [posttestData, setPosttestData] = useState(null); // 取得來自posttest.js 的 posttestData
  const [valuesArray, setValuesArray] = useState([]); // 用來存values 的 dictionary，格式{'input_type':0,'flavor_name_1':'flavor_score_1','flavor_name_2':'flavor_score_2',...}
  const [apiResult, setApiResult] = useState(null); // 取得 API return 的結果
  const [valuesObject, setValuesObject] = useState({});

  const flavorRef = useRef();
  // user click on button in setStatus.js to choose 0 or 1
  const handleOptionSelect = (data) => {
    console.log(valuesArray);
    setSelectedOption(data.input_type); // get selected option
    setCurrentStep(data.input_type === 0 ? 2 : 1); // if data=0, go to case2, otherwise case1
    setValuesObject({ ...valuesObject, input_type: data.input_type }); // save ['input_type':0 or 1 to the array]
  };

  // call SensoryApi below is just an example url
  // 原始中文属性名称映射到英文
  const chineseToEnglishAttributeLabels = {
    '焙烤香 - 烘焙味': 'b_baked',
    '焙烤香 - 煙燻味': 'b_smoky',
    '果香 - 乾果味': 'f_dried_fruit',
    '花香 - 清香': 'f_light',
    '花香 - 濃香': 'f_heavy',
    '甜香 - 糖香味': 's_sweet',
    '甜香 - 蜜香味': 's_honey',
    '青草香 - 草香味': 'g_grass',
    '果仁香 - 堅果味': 'n_nutty',
    木質香: 'w_woody',
    酸味: 'sour',
    甜味: 'sweet',
    圓滑感: 'sleek',
    厚重感: 'thick',
    甘醇度: 'glycol',
    喉後韻: 'after_rhyme',
    回香感: 'aftertaste',
  };

  const translateAttributesToEnglish = (attributes) => {
    const translatedAttributes = {};
    for (const key in attributes) {
      if (chineseToEnglishAttributeLabels[key]) {
        translatedAttributes[chineseToEnglishAttributeLabels[key]] =
          attributes[key];
      }
    }
    return translatedAttributes;
  };

  const callSensoryApi = async (data) => {
    try {
      const translatedData = translateAttributesToEnglish(data);
      console.log('Sending request with data:', JSON.stringify(translatedData));
      const response = await fetch(
        `${process.env.API_URI}/SensoryAI/predict_Siamese_network`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(translatedData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log('Received response:', responseData);
      return responseData;
    } catch (error) {
      console.error('API call failed:', error);
      throw error;
    }
  };

  // 在這裡，更新 valuesArray 當 Flavor 組件提交時
  const handleFlavorDataSubmit = (flavorData) => {
    console.log(
      'FindGoodTea - handleFlavorDataSubmit is called with data:',
      flavorData
    ); // 确保这行代码被执行了并且收到了正确的数据
    let newValuesObject = { ...valuesObject };
    flavorData.forEach(({ name, value }) => {
      newValuesObject[name] = value;
    });
    setValuesObject(newValuesObject); // 更新 state
    console.log(
      'FindGoodTea - valuesObject should be updated:',
      newValuesObject
    ); // 打印出新的 state 值，确认它是否正确
  };

  // user click step_button, go to next step
  const handleNext = () => {
    if (activeStep === 2) {
      //一定要是2! 請務必注意Step 順序
      flavorRef.current && flavorRef.current.handleFormSubmit(); // 在这里，您通过ref调用Flavor组件中的handleFormSubmit方法。
    }
    setActiveStep((prevStep) => prevStep + 1);
  };

  React.useEffect(() => {
    console.log('valuesObject has changed:', valuesObject);
  }, [valuesObject]);

  // when click on 'see result' call api
  React.useEffect(() => {
    if (activeStep === 3) {
      const callApi = async () => {
        try {
          const { input_type, ...filteredValuesObject } = valuesObject;

          console.log('data to sensory_api:', filteredValuesObject);
          const result = await callSensoryApi(filteredValuesObject);
          setApiResult(result);
        } catch (error) {
          console.error('API call failed', error);
        }
      };
      callApi();
    }
  }, [activeStep, valuesObject]);

  // user click on back button, go to last step
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // posttest.js return posttest data for flavor.js, data may be null
  const handlePosttestData = (data) => {
    setPosttestData(data); // set posttest data
    setActiveStep(activeStep + 1); // go to next step
  };

  // steplabel settings
  const getStepLabel = (index) => {
    if (index === 1) {
      if (selectedOption === 0) {
        //choose"開始探索風味"
        return '參考前次結果';
      } else if (selectedOption === 1) {
        //choose"一邊品味茶葉一邊探索風味"
        return '學習品茶步驟';
      }
    }
    return steps[index];
  };

  // step settings
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <SetStatus onOptionSelect={handleOptionSelect} />; // need to return selected option
      case 1:
        return selectedOption === 0 ? (
          // need to return posttestdata
          <Posttest onDataSubmit={handlePosttestData} />
        ) : (
          <TeaColorTest />
        );
      case 2: // send posttest data to flavor.js and return the current flavor data in flavor.js
        return (
          <Flavor
            ref={flavorRef}
            postData={posttestData}
            onFlavorDataSubmit={handleFlavorDataSubmit}
          />
        );
      case 3:
        return selectedOption === 0 ? (
          <Result result={apiResult} />
        ) : (
          <Thankyou />
        );
      default:
        return null;
    }
  };

  return (
    <div className="page-layout">
      <div className="grid-rows-1 ml-10 mr-10 flex items-center justify-center main-vision">
        <h4 className="text-4xl text-center big_title">
          找好<span className="tea">茶</span>系統
        </h4>
        {/* <img src='/images/5730.png' className='decoration'/> */}
        <img
          src="/images/leaf.png"
          style={{ width: '3%', marginTop: '-1rem' }}
        />
      </div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar className="step_bar" elevation={0}></AppBar>
        <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
          <Paper
            elevation={3}
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <div className="title">茶香味指南：發掘您最喜愛的茶風味</div>
            <div className="title_eng">
              Tea Aroma Guide: Discover Your Favorite Tea Flavors
            </div>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>{getStepLabel(index)}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {renderStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <div
                    className="back_button"
                    onClick={handleBack}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Back
                  </div>
                )}
                {activeStep < steps.length && (
                  <div
                    className="step_button"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'See Result' : 'Next'}
                  </div>
                )}
              </Box>
            </React.Fragment>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default FindGoodTea;
