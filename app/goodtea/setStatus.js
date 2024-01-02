import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Grid, Button, Box } from '@mui/material';
import EmojiFoodBeverageRoundedIcon from '@mui/icons-material/EmojiFoodBeverageRounded';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';

export default function SetStatus({ onOptionSelect }) {
  // 傳遞選擇品評方式的參數
  const handleButtonClick = (option) => {
    onOptionSelect({ input_type: option }); // 直接傳送選擇的選項，而不是保存到某個狀態中。
    setSelectedButton(option);
  };

  const [selectedButton, setSelectedButton] = React.useState(null);

  return (
    <React.Fragment>
      <div className="sub_title" gutterBottom>
        選擇品評方式
      </div>
      <div className="para" gutterBottom>
        •
        如果您是首次體驗我們的推薦系統，選擇「開始探索風味」，您將迎來一段全新的找茶之旅！
      </div>
      <div className="para" gutterBottom>
        •
        想將品茶提升至更高境界？選擇「一邊品味茶葉，一邊感受風味」，將為您帶來美味的茶葉盛宴！
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <div
              variant="outlined"
              size="large"
              sx={{
                width: '100%',
                height: '100px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              onClick={() => {
                handleButtonClick(0);
                setSelectedButton(0);
              }}
              className={`status_button ${
                selectedButton === 0 ? 'clicked' : ''
              }`}
            >
              <AppRegistrationRoundedIcon className="explore_flavor" />
              開始探索風味
            </div>
          </Box>
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <div
              variant="outlined"
              size="large"
              sx={{ width: '100%', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              onClick={() => {
                handleButtonClick(1);
                setSelectedButton(1);
               }}
               className={`status_button ${selectedButton === 1 ? 'clicked' : ''}`}
            >
              <EmojiFoodBeverageRoundedIcon className='tea_cup'/>
              一邊品味茶葉一邊感受風味
            </div>
          </Box>
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
