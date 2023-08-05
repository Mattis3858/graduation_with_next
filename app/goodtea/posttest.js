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
  } from '@mui/material';

  const Posttest = () => {
    const [selectedItem, setSelectedItem] = useState('');
    const [defaultResult, setDefaultResult] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    // 假設後測結果資料
    const testData = [
      { id: 1, time: '2023-08-05', teaName: '張協興鐵觀音', flavor: '花香', description: '花香濃郁', score: 8 },
      { id: 2, time: '2023-08-06', teaName: '威叔鐵觀音紅茶', flavor: '果香', description: '果香清新', score: 9 },
      // 其他後測結果...
    ];
  
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
    const handleConfirmSetDefaultResult = () => {
        setDefaultResult(testData.find((item) => item.id === selectedItem));
        setOpenDialog(false);
      };
    const handleCloseDialog = () => {
        setOpenDialog(false);
      };
  
      return (
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            選擇後測結果
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            若不需要，可直接按下一步
            </Typography>
          <Box mt={2}>
            <FormControl>
              <InputLabel>請選擇後測結果</InputLabel>
              <Select
                value={selectedItem}
                onChange={handleSelectChange}
                style={{ width: '300px' }}
              >
                <MenuItem value="">
                  請選擇後測結果
                </MenuItem>
                {testData.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {`${item.id} - ${item.time} - ${item.teaName}`}
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
          {selectedItem !== '' ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>風味</TableCell>
                    <TableCell>描述</TableCell>
                    <TableCell>分數</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {testData.map((item) => (
                    item.id === selectedItem && (
                      <TableRow key={item.id}>
                        <TableCell>{item.flavor}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell>{item.score}</TableCell>
                      </TableRow>
                    )
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
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