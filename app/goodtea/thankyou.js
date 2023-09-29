import * as React from 'react';
import { Typography, Link, Paper, Grid, IconButton } from '@mui/material';
import { CheckCircleOutline as CheckCircleOutlineIcon } from '@mui/icons-material';


export default function Thankyou(){
    return(
        <>
            <Grid item>
                <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                    <IconButton color="primary" style={{ fontSize: 200 }}>
                        <CheckCircleOutlineIcon className='checkcircle'/>
                    </IconButton>
                    <div className='title'>
                        感謝您的風味填寫
                    </div>
                    <div className='sub_title'>
                        已經幫您紀錄在個人化的茶葉檔案中。
                    </div>
                    <Typography variant="body1">
                        <Link href="/personalInformation" color="primary">
                            點選查看您的茶葉檔案
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </>
    );
}