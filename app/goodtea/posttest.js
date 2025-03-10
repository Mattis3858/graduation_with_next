import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
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
import { CheckCircleOutline } from '@mui/icons-material';
import { getUserID } from '../components/module';
import { useSession } from 'next-auth/react';

const Posttest = ({ onDataSubmit }) => {
  const attributeLabels = {
    b_baked: '焙烤香 - 烘焙味',
    b_smoky: '焙烤香 - 煙燻味',
    f_dried_fruit: '果香 - 乾果味',
    f_light: '花香 - 清香',
    f_heavy: '花香 - 濃香',
    s_sweet: '甜香 - 糖香味',
    s_honey: '甜香 - 蜜香味',
    g_grass: '青草香 - 草香味',
    n_nutty: '果仁香 - 堅果味',
    w_woody: '木質香',
    sour: '酸味',
    sweet: '甜味',
    sleek: '圓滑感',
    thick: '厚重感',
    glycol: '甘醇度',
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
  const { data: session, status } = useSession();
  const [userID, setUserID] = useState();
  const [userData, setUserData] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [defaultResult, setDefaultResult] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  // const get_record_apiUrl = `https://good-tea.vercel.app/goodTea_record/${userId}/`;
  useEffect(() => {
    getUserID(setUserID, session);
  }, [session]);
  useEffect(() => {
    fetchData(userID);
  }, [userID]);

  const fetchData = async (userId) => {
    try {
      const response = await axios.get(
        `https://good-tea.vercel.app/goodTea_record/${userId}/`
      );
      console.log('API Response:', response.data);
      const formattedData = formatData(response.data);
      console.log('Formatted Data:', formattedData);
      setUserData(formattedData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 注意月份要加 1
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatData = (apiData) => {
    return apiData.map((entry) => ({
      id: entry.find_good_tea_id,
      time: formatDate(entry.created_time),
      teaName: testResultLabels[entry.test_result],
      results: Object.keys(attributeLabels).map((attribute) => ({
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
    if (userData.find((entry) => entry.id === selectedItem)) {
      const selectedData = userData.find((entry) => entry.id === selectedItem);
      const postDataArray = Array.isArray(selectedData)
        ? selectedData
        : [selectedData]; // 确保 selectedData 是一个数组
      setDefaultResult(selectedData);
      onDataSubmit(postDataArray); // 將選中的數據通過onDataSubmit傳遞給父組件
      setOpenDialog(false);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container>
      <div className="sub_title" gutterBottom>
        選擇後測結果
      </div>
      <div className="para" gutterBottom>
        若不需要，可直接按下一步
      </div>
      <Box
        mt={2}
        className={
          isSmScreen
            ? 'select_box_center_vertical'
            : 'select_box_center_horizontal'
        }
      >
        <FormControl>
          <InputLabel>請選擇後測結果</InputLabel>
          <Select
            value={selectedItem}
            onChange={handleSelectChange}
            style={{ width: '300px' }}
          >
            <MenuItem value="">請選擇後測結果</MenuItem>
            {userData.map((entry, index) => (
              <MenuItem key={entry.id} value={entry.id}>
                {`${index + 1} - ${entry.time} - ${entry.teaName}`}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {selectedItem !== '' && (
          <div onClick={handleSetDefaultResult} className="confirm_button">
            選擇此次後測結果作為預設值
          </div>
        )}
      </Box>
      {selectedItem !== '' &&
      userData.find((entry) => entry.id === selectedItem) ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="col_title">風味</TableCell>
                <TableCell className="col_title">分數</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData
                .find((entry) => entry.id === selectedItem)
                .results.map((item) => (
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
        <DialogTitle id="alert-dialog-title">
          確定選擇此結果作為預測值?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            選擇後測結果將會設定為預測值，確定要這麼做嗎？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            取消
          </Button>
          <Button
            onClick={handleConfirmSetDefaultResult}
            color="primary"
            autoFocus
          >
            確定
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Posttest;
