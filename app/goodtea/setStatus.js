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
      <Typography variant="h6" gutterBottom>
        想直接用感官評測您喜歡哪種茶款嗎?
      </Typography>
      <Typography variant="h6" sx={{ fontSize: '14px' }} gutterBottom>
        若您為初次使用推薦系統，可點選「直接評測風味」；<br />
        若您想學習品茶流程，評測您現在正喝的茶風味是否和預想的一樣請點選「一邊品茶一邊感受風味」
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Button
              variant="outlined"
              size="large"
              sx={{ width: '100%', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              onClick={() => handleButtonClick('直接評測風味')}
            >
              <AppRegistrationRoundedIcon />
              直接評測風味
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
            >
              <EmojiFoodBeverageRoundedIcon />
              一邊品茶一邊感受風味
            </Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}