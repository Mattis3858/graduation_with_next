'use client';
import React, { useState, useEffect } from 'react';
import PreviousTest from './PreviousTest';
import PostTest from './PostTest';
import { useSession } from 'next-auth/react';
import { getUserID } from '../../components/module';

export default function Home() {
  const { data: session, status } = useSession();
  const [userID, setUserID] = useState();

  useEffect(() => {
    getUserID(setUserID, session);
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
        <div className="mt-6 flex flex-row justify-evenly sm:w-auto">
          <PreviousTest userID={userID} />
          <PostTest userID={userID} />
        </div>
      </div>
    </main>
  );
}
