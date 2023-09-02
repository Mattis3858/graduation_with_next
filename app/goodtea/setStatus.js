import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Grid, Button, Box } from '@mui/material';
import EmojiFoodBeverageRoundedIcon from '@mui/icons-material/EmojiFoodBeverageRounded';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';

export default function SetStatus({ onOptionSelect }) {
  const handleButtonClick = (option) => {
    onOptionSelect(option); // Pass the selected option to the parent component
  };

  return (
    <React.Fragment>
      <Typography className='sub_title' gutterBottom>
        選擇品評方式
      </Typography>
      <Typography className='para' gutterBottom>
        • 如果您是首次體驗我們的推薦系統，選擇「開始探索風味」，您將迎來一段全新的找茶之旅！
      </Typography>
      <Typography className='para' gutterBottom>
        • 想將品茶提升至更高境界？選擇「一邊品味茶葉，一邊感受風味」，將為您帶來美味的茶葉盛宴！
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Button
              variant="outlined"
              size="large"
              sx={{ width: '100%', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              onClick={() => handleButtonClick('直接評測風味')}
              className= 'status_button'
            >
              <AppRegistrationRoundedIcon className="explore_flavor"/>
              開始探索風味
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Button
              variant="outlined"
              size="large"
              sx={{ width: '100%', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              onClick={() => handleButtonClick('一邊品茶一邊感受風味')}
              className= 'status_button'
            >
              <EmojiFoodBeverageRoundedIcon className='tea_cup'/>
              一邊品味茶葉一邊感受風味
            </Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}