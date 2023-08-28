import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

const attributeLabels = {
  b_baked: '焙烤香 - 烘焙味',
  b_smoky: '焙烤香 - 煙燻味',
  f_dried_fruit: '果香 - 乾果味',
  f_light: '花香 - 清香',
  f_heavy: '花香 - 濃香',
  s_sweet: '甜香 - 糖香味',
  s_honey: '甜香 - 蜜香味',
  g_grass: '青草香 - 草香味',
  n_nutty: '果仁香 - 堅果味	',
  w_woody: '木質香',
  sour: '酸味',
  sweet: '甜味',
  sleek: '圓滑感',
  thick: '厚重感',
  glycol: '甘醇度	',
  after_rhyme: '喉後韻',
  aftertaste: '回香感',
};

const testResultLabels = {
  1: '張協興鐵觀音',
  2: '張協興包種茶',
  3: '威叔鐵觀音',
  4: '威叔鐵觀音包種茶',
  5: '寒舍包種茶',
  6: '寒舍鐵觀音紅茶',
};

const Posttest = () => {
    const [userId, setUserId] = useState(''); 
    const [userData, setUserData] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const [defaultResult, setDefaultResult] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);
    const get_record_apiUrl = `https://good-tea.vercel.app/goodTea_record/${user_id}/`;

    useEffect(() => {
      const loggedInUserId = '1'; 
      setUserId(loggedInUserId);
      fetchData(loggedInUserId);
    }, []);

    const fetchData = async (userId) => {
      try {
        const response = await axios.get(get_record_apiUrl);
        const formattedData = formatData(response.data);
        setUserData(formattedData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }    

    const formatData = (apiData) => {
      return apiData.map(entry => ({
        id: entry.find_good_tea_id,
        time: entry.created_time,
        teaName: testResultLabels[entry.test_result],
        results: Object.keys(attributeLabels).map(attribute => ({
          flavor: attributeLabels[attribute],
          score: entry[attribute],
        })),
      }));
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

    const handleConfirmSetDefaultResult = () => {
      if (userData.find(entry => entry.id === selectedItem)) {
        setDefaultResult(userData.find(entry => entry.id === selectedItem));
        setOpenDialog(false);
      }
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
      };

    
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
              {userData.map(entry => (
                <MenuItem key={entry.id} value={entry.id}>
                  {`${index + 1} - ${entry.time} - ${entry.teaName}`}
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
        {selectedItem !== '' && userData.find(entry => entry.id === selectedItem) ? (
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
                {userData.find(entry => entry.id === selectedItem).results.map((item) => (
                  <TableRow key={item.flavor}>
                    <TableCell>{item.flavor}</TableCell>
                    <TableCell>{item.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : null}
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">確定選擇此結果作為預測值?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              選擇後測結果將會設定為預測值，確定要這麼做嗎？
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
  };
  
  
export default Posttest;



   {/* // 假設後測結果資料
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
  */}