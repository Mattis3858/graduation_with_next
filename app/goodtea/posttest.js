import * as React from 'react';
import { useState } from 'react';
import { 
    Container,
    Typography,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    useMediaQuery,
  } from '@mui/material';

  const Posttest = () => {
    const [selectedItem, setSelectedItem] = useState('');
    const [defaultResult, setDefaultResult] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    // 假設後測結果資料
    const testData = {
      1: [
        { id: 1, time: '2023-08-05', teaName: '張協興鐵觀音', results: [
          { flavor: '花香', description: '花香濃郁', score: 8 },
          { flavor: '茶香', description: '茶香獨特', score: 7 },
          { flavor: '甘甜', description: '甘甜香氣', score: 9 },
          { flavor: '焦糖', description: '焦糖香氣', score: 8 },
          { flavor: '草本', description: '草本氣息', score: 6 },
        ]},
      ],
      2: [
        { id: 2, time: '2023-08-06', teaName: '威叔鐵觀音紅茶', results: [
          { flavor: '果香', description: '果香清新', score: 9 },
          { flavor: '茶香', description: '茶香淡雅', score: 8 },
          { flavor: '甘甜', description: '甘甜口感', score: 9 },
          { flavor: '焦糖', description: '焦糖香氣', score: 7 },
          { flavor: '花香', description: '花香綿密', score: 8 },
        ]},
      ],
      // 其他后测结果...
    };
  
    const handleSelectChange = (event) => {
      const selectedIndex = event.target.value;
  
      if (selectedIndex === '') {
        setSelectedItem('');
      } else {
        setSelectedItem(selectedIndex);
        setDefaultResult(null);
      }
    };
    const handleSetDefaultResult = () => {
        if (selectedItem !== '') {
          setOpenDialog(true);
        }
      };
    /*const handleConfirmSetDefaultResult = () => {
        setDefaultResult(testData.find((item) => item.id === selectedItem));
        setOpenDialog(false);
      };
      */
    const handleConfirmSetDefaultResult = () => {
        if (testData[selectedItem]) {
          setDefaultResult(testData[selectedItem][0]);
          setOpenDialog(false);
        }
      };
    const handleCloseDialog = () => {
        setOpenDialog(false);
      };

      // 用來check 斷點
    const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  
      return (
        <Container>
          <Typography className='sub_title' gutterBottom>
            選擇後測結果
          </Typography>
          <Typography className='para' gutterBottom>
            若不需要，可直接按下一步
            </Typography>
          <Box mt={2} className={isSmScreen ? 'select_box_center_vertical' : 'select_box_center_horizontal'}>
            <FormControl>
              <InputLabel className='input_style'>請選擇後測結果</InputLabel>
              <Select
                value={selectedItem}
                onChange={handleSelectChange}
                style={{ width: '300px' }}
              >
                <MenuItem value="">
                  請選擇後測結果
                </MenuItem>
                {Object.keys(testData).map((key) => (
                  <MenuItem key={key} value={key}>
                    {`${testData[key][0].id} - ${testData[key][0].time} - ${testData[key][0].teaName}`}
                </MenuItem>
                ))}
              </Select>
            </FormControl>
            {selectedItem !== '' && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSetDefaultResult}
                style={{ marginLeft: '10px' }}
              >
                選擇此次後測結果作為預設值
              </Button>
            )}
          </Box>
          {selectedItem !== '' && testData[selectedItem] ? (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className='col_title'>風味</TableCell>
                  <TableCell className='col_title'>描述</TableCell>
                  <TableCell className='col_title'>分數</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {testData[selectedItem][0].results.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.flavor}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          // 如果条件不满足的情况
          <>
            
          </>
          )}
         <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">確定選擇此結果作為預測值?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            選擇後測結果將會設定為預設值，確定要這麼做嗎？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            取消
          </Button>
          <Button onClick={handleConfirmSetDefaultResult} color="primary" autoFocus>
            確定
          </Button>
        </DialogActions>
      </Dialog>
      </Container>
    );
  }
  
  
export default Posttest;