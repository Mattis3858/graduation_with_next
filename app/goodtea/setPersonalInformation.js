import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { FormGroup, FormControlLabel, Checkbox,  FormLabel } from '@mui/material';


export default function SetPersonalInfomation() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        想知道更多關於您的資訊!
      </Typography>
      <Typography variant="h6" sx={{ fontSize: '14px' }} gutterBottom>
        請填寫您的基本資料，以幫助您最快速配對您的可能喜愛的風味
        <br />
      </Typography>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>性別</InputLabel>
            <Select label="性別">
              <MenuItem value="男性">男性</MenuItem>
              <MenuItem value="女性">女性</MenuItem>
              <MenuItem value="不想透漏">不想透漏</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>年齡</InputLabel>
            <Select label="年齡">
            {/* 生成1-100歲的選項 */}
            {Array.from({ length: 100 }, (_, index) => (
                <MenuItem key={index + 1} value={index + 1}>
                  {index + 1} 歲
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>飲食口味</InputLabel>
            <Select label="飲食口味">
              <MenuItem value="偏鹹">偏鹹</MenuItem>
              <MenuItem value="偏甜">偏甜</MenuItem>
              <MenuItem value="偏辣">偏辣</MenuItem>
              <MenuItem value="偏酸">偏酸</MenuItem>
              <MenuItem value="適中">適中</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>居住地</InputLabel>
            <Select label="居住地">
              <MenuItem value="北">北</MenuItem>
              <MenuItem value="西">西</MenuItem>
              <MenuItem value="南">南</MenuItem>
              <MenuItem value="東">東</MenuItem>
              <MenuItem value="其他">其他</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>飲茶經歷</InputLabel>
            <Select label="飲茶經歷">
              <MenuItem value="3個月以下">3個月以下</MenuItem>
              <MenuItem value="3個月~1年">3個月~1年</MenuItem>
              <MenuItem value="1~3年">1~3年</MenuItem>
              <MenuItem value="3~10年">3~10年</MenuItem>
              <MenuItem value="10年以上">10年以上</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>飲茶習慣</InputLabel>
            <Select label="飲茶習慣">
              <MenuItem value="每周1次以下">每周1次以下</MenuItem>
              <MenuItem value="每周1~3次">每周1~3次</MenuItem>
              <MenuItem value="每周3~5次">每周3~5次</MenuItem>
              <MenuItem value="每周5次以上">每周5次以上</MenuItem>
            </Select>
          </FormControl>
        </Grid>
 
        {/*
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
        */}
      </Grid>
    </React.Fragment>
  );
}
