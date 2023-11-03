'use client';
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import PreviousTest from './PreviousTest';
import PostTest from './PostTest';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSession } from 'next-auth/react';

const supabase = createClient(
  'https://zdxlzmekrckaffbzupmh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkeGx6bWVrcmNrYWZmYnp1cG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzNzM1MTEsImV4cCI6MjAwMzk0OTUxMX0.YI14GVJfa6H0eXOUqCKXT8AHLxK4GcAb8UYPTH4QLKQ'
);
export default function Home() {
  const { data: session, status } = useSession();

  const [tea, setTea] = React.useState('');
  const [testRecord, setTestRecord] = useState([]);
  const [userID, setUserID] = useState();
  async function getTestRecord() {
    const { data } = await supabase.from('find_good_tea_record').select('*');
    console.log(data);
    setTestRecord(data);
  }
  useEffect(() => {
    getTestRecord();
  }, []);
  const handleTeaChange = (event) => {
    setTea(event.target.value);
  };
  async function getUserID() {
    if (session?.user?.name) {
      const { data: user, error } = await supabase
        .from('user')
        .select('*')
        .eq('user_name', session.user.name);
      console.log(user[0].user_id);
      setUserID(user[0].user_id);
    }
  }
  useEffect(() => {
    getUserID();
  }, [session]);
  return (
    <main className="bg-white p-6 pt-0 rounded-lg shadow-md">
      <div className="w-full text-center items-center justify-center">
        <div className="flex items-center justify-center align-bottom mx-auto">
          <h1 className="text-4xl mt-6 text-center big_title">
            過去前後測表格
          </h1>
          {/* <FormControl sx={{ ml: 2, minWidth: 120 }} size="small">
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
          </FormControl> */}
        </div>
        <div className="mt-6 flex">
          {' '}
          {/* PreviousTest */}
          <PreviousTest userID={userID} />
          <PostTest userID={userID} />
        </div>
      </div>
    </main>
  );
}
