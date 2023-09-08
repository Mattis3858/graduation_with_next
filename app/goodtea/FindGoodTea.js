"use client"; // This is a client component 

import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SetStatus from './setStatus'; // choose status
import Flavor from './flavor'; // 填寫風味
import TeaColorTest from'./TeaColorTest'; // tea color test + brew tea steps
import Posttest from './posttest'; // 前測 Step2 點選前次後測資訊
import './goodTea.css';
import Thankyou from './thankyou'; 
import Result from './result';

const steps = ['選擇品評方式', '', '填寫風味資訊'];

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
    background: {
      
    }
  },
});

const FindGoodTea = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [currentStep, setCurrentStep] = React.useState(1);
  const [posttestData, setPosttestData] = useState(null); 

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setCurrentStep(option === 0 ? 2 : 1);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handlePosttestData = (data) => {
    setPosttestData(data); // 設定選中的後測數據
    setActiveStep(activeStep + 1); // 切換到下一個步驟
  };

  const getStepLabel = (index) => {
    if (index === 1) {
      if (selectedOption === 0) { //選擇"開始探索風味" 
        return '參考前次結果';
      } else if (selectedOption === 1) { //選擇"一邊品味茶葉一邊探索風味"
        return '學習品茶步驟';
      }
    }
    return steps[index];
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <SetStatus onOptionSelect={handleOptionSelect} />;
      case 1:
        return selectedOption === 0 ? (
          <Posttest onDataSubmit={handlePosttestData} />
        ) : (
          <TeaColorTest />
        );
      case 2:
        return <Flavor postData={posttestData} />;
      case 3:
        return selectedOption === 0 ? (
          <Result />
        ) : (
          <Thankyou />
        );
      default:
        return null;
    }
  };

  return (
    <div className='page-layout'>
      <div className="grid grid-rows-1 ml-10 mr-10 my-6 flex items-center justify-center main-vision">
        <h4 className="text-4xl mt-6 text-center big_title">找好<span className='tea'>茶</span>系統</h4>
        {/* <img src='/images/5730.png' className='decoration'/> */}
        <img src='/images/leaf.png' className='leaf' style={{marginTop:'-1rem'}} />
      </div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar className='step_bar' elevation={0} ></AppBar>
        <Container component="main" maxWidth="md" sx={{ mb: 4 }} >
          <Paper elevation={3} variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
            <div className='title' >
            茶香味指南：發掘您最喜愛的茶風味
            </div>
            <div className='title_eng' >
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
                  <div className='back_button' onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </div>
                )}
                <div className='step_button' onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
                  {activeStep === steps.length - 1 ? 'See Result' : 'Next'}
                </div>
              </Box>
            </React.Fragment>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default FindGoodTea;
