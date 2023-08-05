"use client"; // This is a client component 

import * as React from 'react';
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
import SetPersonalInformation from './setPersonalInformation'; // 填寫個人資料 autofilled
import Flavor from './flavor'; // 填寫風味
import TeaColorTest from'./TeaColorTest'; // tea color test + brew tea steps
import Posttest from './posttest'; // 前測 Step2 點選前次後測資訊

const steps = ['選擇是否喝過茶', '', '填寫風味資訊'];

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // 设置主题的主要颜色
    },
    secondary: {
      main: '#f50057', // 设置主题的次要颜色
    },
  },
});

const FindGoodTea = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState('');
  const [currentStep, setCurrentStep] = React.useState(1);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setCurrentStep(option === '直接評測風味' ? 2 : 1);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepLabel = (index) => {
    if (index === 1) {
      if (selectedOption === '直接評測風味') {
        return '參考前次後測結果';
      } else if (selectedOption === '一邊品茶一邊感受風味') {
        return '學習喝茶流程';
      }
    }
    return steps[index];
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <SetStatus onOptionSelect={handleOptionSelect} />;
      case 1:
        return selectedOption === '直接評測風味' ? <Posttest /> : <TeaColorTest />;
      case 2:
        return <Flavor />;
      default:
        return null;
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position="absolute"
          color="default"
          elevation={0}
          sx={{
            position: 'relative',
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        ></AppBar>
        <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" align="center">
              找好茶風味配對
            </Typography>
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
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default FindGoodTea;
