import * as React from 'react';
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
import CircularProgress from '@mui/material/CircularProgress';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { PieChart } from 'react-minimal-pie-chart'; // Import PieChart component


const steps = [
  {
    label: '準備材料',
    description: `
    準備快沖壺、馬克杯
    準備茶葉 3g : 熱水 100g`,
  },
  {
    label: '溫杯',
    description:
      '溫杯溫杯溫杯溫杯方法',
  },
  {
    label: '沖泡',
    description: `將水溫維持在95 - 100 度C
    第一泡沖泡 1 分鐘`,
  },
  {
    label: '續沖',
    description: `可泡約 5-7 次
    每泡時間增加 10 秒`,
  },
];

const teaProducts = [
  '茶品1',
  '茶品2',
  '茶品3',
  '茶品4',
  '茶品5',
  '茶品6',
  '茶品7',
  '茶品8',
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
      <Typography variant="h6" gutterBottom>
        泡茶流程
      </Typography>
      <Typography variant="body2" gutterBottom>
        來學泡好茶R
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Select Tea Product</InputLabel>
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
      <Box sx={{ maxWidth: 400 }}>
        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <Typography variant="subtitle1">Brew Steps</Typography>
        </Box>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                icon={<PhotoCameraIcon />}
                optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
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
          <Typography variant="subtitle1">Tea Color Test</Typography>
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
              {uploadedFile ? 'File uploaded successfully!' : 'No file uploaded'}
            </Typography>
          </Box>
        </Box>
      )}
        
      </Box>
    </>
  );
};
export default TeaColorTest;