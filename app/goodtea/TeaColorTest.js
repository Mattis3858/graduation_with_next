import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import EmojiFoodBeverageRoundedIcon from '@mui/icons-material/EmojiFoodBeverageRounded';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CircularProgress from '@mui/material/CircularProgress';
import { PieChart } from 'react-minimal-pie-chart'; // Import PieChart component
import { LinearProgress } from '@mui/material';


const steps = [
  {
    label: '泡茶準備',
    description: `
    器材準備:\n
    \t1. 茶具 / 快沖壺 / 馬克杯/ 沖茶袋 / 濾茶球...等\n
    \t2. 茶葉\n
    用水比例:市售飲用水或飲水機煮至沸水（100度c）\n
    `,
  },
  {
    label: '溫杯燙壺',
    description:`   
      1. 杯中加入一半25度常溫水後，再加入一半90-100度熱水\n
      2. 靜置30秒後，倒掉杯中一半的溫熱水，再加滿step1.同樣溫度熱水\n
      3. 同樣靜置30秒後，再重複一次step2.倒掉一半水再加滿熱水\n
      4. 此時杯身已緩緩溫杯完成，即可開始泡茶\n
      `,
  },
  {
    label: '泡茶方式 - 溫潤泡',
    description: '茶水比例：3g 茶葉(一包夾鏈袋) : 150 ml 沸水(100度c)\n泡茶方式 - 溫潤泡：置入茶葉後，先以熱水沖茶葉，立即將茶水倒出後再泡茶。\n沖泡時間：\n1. 使用100度C水\n2. 沖泡 3 分鐘後可即取出茶葉(瀝出茶湯)\n 3. 靜置 3 分鐘，即可聞茶香\n4. 待茶湯靜置至 6 分鐘後，冷卻即可享用\n',
  },
  {
    label: '續沖方式',
    description: '每泡茶可泡約 5-7 次，每泡時間增加 10 秒',
  },
];

const teaProducts = [
  '張協興鐵觀音',
  '張協興包種',
  '威叔鐵觀音',
  '威叔鐵觀音紅茶',
  '寒舍包種',
  '寒舍鐵觀音紅茶',
];


const TeaColorTest = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedTea, setSelectedTea] = React.useState('');
  const [file, setFile] =  React.useState(null);
  const [message, setMessage] =  React.useState('');
  const [isLoading, setIsLoading] =  React.useState(false);
  
  // 茶湯濃淡辨識API
  async function handleChange(e) {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      setMessage('Please select an image.');
      return;
    }

    setIsLoading(true);
    setFile(selectedFile);

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('teaType', selectedTea);
    try {
      const response = await axios.post(
        'https://c7f1-140-119-19-30.ngrok-free.app/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Important: Set the content type to FormData
          },
        }
      );
      const data = response.data;
      console.log(data);
      setMessage(data);
      return {
        props: {
          data,
        },
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: {
          data: null,
        },
      };
    }finally {
      setIsLoading(false); 
    }
    
  };  
    
  function handleTeaChange(e) {
    setSelectedTea(e.target.value); // Update the selected tea type
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <div className='sub_title' >
        品茶步驟
      </div>
      <div className='para' >
        跟著以下步驟一同走進茶香，品味茶湯。
      </div>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>請選擇您現在所泡的茶款</InputLabel>
        <Select
          value={selectedTea} 
          onChange={handleTeaChange}
          label="Select Tea Product"
        >
          {/* Map over the teaProducts array to generate the MenuItem components */}
          {teaProducts.map((product) => (
            <MenuItem key={product} value={product}>
              {product}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={{ maxWidth: '100%' }}>
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
        <div className='sub_title' >泡茶步驟</div>
        </Box>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                icon={<EmojiFoodBeverageRoundedIcon />}
                optional={index === 2 ? <div className='para'>最後一步</div> : null}
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <div className='para'>{step.description}</div>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        </Box>
      <div>
      <div className='sub_title' >茶湯濃淡檢驗小遊戲</div>
      <div className='para' >請上傳照片，可以拍照或選擇照片</div>
        <input
          id="imgTea"
          type="file"
          accept="image/gif, image/jpeg, image/png"
          style={{ display: 'none' }}
          onChange={handleChange}
        />
        <div className="button-and-message">
        <label htmlFor="imgTea">
          <Button variant="contained" component="span">
            Upload Image
          </Button>
        </label>
        {!isLoading && message.similarity && (
          <div className="message">{message.similarity}</div>
        )}
      </div>
        <div className="upload-container">
          {isLoading ? <LinearProgress className="progress-bar" /> : null}
          {file &&  (
            <img src={URL.createObjectURL(file)} alt="Selected" className="uploaded-image" />
          ) }
        </div>
    </div>
    </div>
  );
};

export default TeaColorTest;