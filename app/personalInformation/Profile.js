'use client';
import React, { useState } from 'react';
import PreviousTest from './PreviousTest';
import PostTest from './PostTest';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Profile = ({ name, birthDate, email, gender, phoneNumber }) => {
  const [tea, setTea] = React.useState('');

  const handleTeaChange = (event) => {
    setTea(event.target.value);
  };
  return (
    <div className="">
      <div className="">
        <h1 className="font-bold text-4xl mt-6 text-center">個人檔案</h1>
        <div className="flex ml-10">
          <div className="mt-6 w-1/3">
            <div className="text-2xl font-semibold mb-6 text-center">
              基本資料
            </div>
            <table className="mt-6">
              <tbody className="">
                <tr>
                  <td className="font-medium text-xl">姓名：</td>
                  <td className="font-medium text-xl">{name}</td>
                </tr>
                <tr>
                  <td className="font-medium text-xl">生日：</td>
                  <td className="font-medium text-xl">{birthDate}</td>
                </tr>
                <tr>
                  <td className="font-medium text-xl">年齡：</td>
                  {/* <td className="font-medium text-xl">{age}</td> */}
                </tr>
                <tr>
                  <td className="font-medium text-xl">性別：</td>
                  <td className="font-medium text-xl">{gender}</td>
                </tr>
                <tr>
                  <td className="font-medium text-xl">電子郵件：</td>
                  <td className="font-medium text-xl">{email}</td>
                </tr>
                <tr>
                  <td className="font-medium text-xl">電話：</td>
                  <td className="font-medium text-xl">{phoneNumber}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 w-2/3">
            <div className="flex items-center justify-center align-bottom">
              <div className="text-2xl font-semibold">過去前後測表格</div>
              <FormControl sx={{ ml: 2, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">選擇茶款</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={tea}
                  label="茶款"
                  onChange={handleTeaChange}
                >
                  <MenuItem value={'所有茶款'}>所有茶款</MenuItem>
                  <MenuItem value={'張協興鐵觀音'}>張協興鐵觀音</MenuItem>
                  <MenuItem value={'威叔鐵觀音紅茶'}>威叔鐵觀音紅茶</MenuItem>
                  <MenuItem value={'張協興包種茶'}>張協興包種茶</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="mt-6 flex">
              <PreviousTest />
              <PostTest />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
