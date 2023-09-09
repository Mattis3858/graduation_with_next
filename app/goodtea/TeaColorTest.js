import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { PieChart } from 'react-minimal-pie-chart'; // Import PieChart component


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
  '張協興 - 鐵觀音',
  '張協興 - 包種茶',
  '威叔 - 鐵觀音',
  '威叔 - 鐵觀音紅茶',
  '寒舍 - 包種茶',
  '寒舍 - 鐵觀音紅茶',
];

const TeaColorTest = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedTea, setSelectedTea] = React.useState('');
  const [isUploading, setIsUploading] = React.useState(false);
  const [uploadSuccess, setUploadSuccess] = React.useState(false);
  const [uploadedFile, setUploadedFile] = React.useState(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleTeaSelect = (event) => {
    setSelectedTea(event.target.value);
  };

  // Callback function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // You can perform additional checks or validation on the file if needed
    setUploadedFile(file);
  };
  // Function to generate random color for the pie chart
  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const handleUpload = () => {
    setIsUploading(true);
    // Simulating the upload process with a delay
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
    }, 2000);
  };

  // Default similarity value (change this based on actual data)
  const similarityValue = 68;

  return (
    <>
      <Typography className='sub_title' gutterBottom>
        品茶步驟
      </Typography>
      <Typography className='para' gutterBottom>
        跟著以下步驟一同走進茶香，品味茶湯。
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>請選擇您現在所泡的茶款</InputLabel>
        <Select
          value={selectedTea}
          onChange={handleTeaSelect}
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
          <Typography variant="subtitle1">泡茶步驟</Typography>
        </Box>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                icon={<PhotoCameraIcon />}
                optional={index === 2 ? <Typography variant="caption">最後一步</Typography> : null}
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography className='para'>{step.description}</Typography>
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

        {/* Upload Box */}
      {uploadSuccess && (
        <Box sx={{ mt: 2, position: 'relative', textAlign: 'center' }}>
          {/* Donut Chart */}
          <PieChart
            data={[
              {
                value: similarityValue,
                key: 1,
                color: getRandomColor(),
                // Add label to display the similarity percentage in the center of the chart
                label: `${similarityValue}%`,
              },
            ]}
            animate
            lineWidth={15}
            paddingAngle={5}
            label={({ dataEntry }) => dataEntry.label} // Display the label added in the data
            labelStyle={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              fill: '#000',
            }}
            startAngle={270}
            lengthAngle={360}
            totalValue={100}
          />
          <Typography variant="body2">相似度</Typography>
        </Box>
      )}

      {/* File Upload */}
      {!uploadSuccess && (
        <Box sx={{ mt: 2 }}>
          <Typography className='sub_title'>茶湯濃淡檢驗小遊戲</Typography>
          <Typography variant="body2" gutterBottom>
            上傳照片，可以拍照或選擇照片
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <input
              accept="image/*"
              id="icon-button-file"
              type="file"
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />
            <label htmlFor="icon-button-file">
              <Button
                variant="contained"
                component="span"
                sx={{ mt: 1, mr: 1 }}
                startIcon={<PhotoCameraIcon />}
              >
                Upload
              </Button>
            </label>
            <Typography variant="body2">
              {uploadedFile ? '上傳成功 File uploaded successfully!' : '請上傳茶湯照片 No file uploaded'}
            </Typography>
          </Box>
        </Box>
      )}
        
      </Box>
    </>
  );
};
export default TeaColorTest;