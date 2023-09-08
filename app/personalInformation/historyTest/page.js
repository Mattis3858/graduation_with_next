'use client';
import React, { useState } from 'react';

import PreviousTest from './PreviousTest';
import PostTest from './PostTest';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default function Home() {
  const [tea, setTea] = React.useState('');

  const handleTeaChange = (event) => {
    setTea(event.target.value);
  };
  return (
    <main className="">
      <div className="w-full text-center items-center justify-center">
        <div className="flex items-center justify-center align-bottom">
          <h1 className="font-bold text-4xl mt-6 text-center">
            過去前後測表格
          </h1>
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
          {' '}
          {/* PreviousTest */}
          <PreviousTest />
          <PostTest />
        </div>
      </div>
    </main>
  );
}
