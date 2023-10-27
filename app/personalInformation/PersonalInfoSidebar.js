'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useSession } from 'next-auth/react';
// import { supabase } from './supabase'; // Import your Supabase client
import { createClient } from '@supabase/supabase-js';
const PersonalInfoSidebar = () => {
  const { data: session, status } = useSession();
  const [roleID, setRoleID] = useState();
  console.log(session);

  const supabase = createClient(
    process.env.SUPABASE_URI,
    process.env.SUPABASE_SECRET
  );
  async function findUserRole() {
    const { data: user, error } = await supabase
      .from('user')
      .select('*')
      .eq('user_name', session.user.name);
    console.log(user[0].role_id);
    setRoleID(user[0].role_id);
  }
  useEffect(() => {
    findUserRole();
  }, []);
  return (
    <div className=" w-60 rounded-l-lg rounded-r-lg overflow-hidden">
      <Sidebar>
        <Menu className="bg-gray-300 text-cyan-900">
          <Link href="/personalInformation">
            <MenuItem
              className="py-3 pl-4 pr-6 hover:bg-gray-400 hover:text-cyan-800"
              activeclassname="bg-gray-400"
            >
              個人檔案
            </MenuItem>
          </Link>
          {roleID === 1 && (
            <Link href="/personalInformation/dataAnalysis">
              <MenuItem
                className="py-3 pl-4 pr-6 hover:bg-gray-400 hover:text-cyan-800"
                activeclassname="bg-gray-400"
              >
                後臺管理
              </MenuItem>
            </Link>
          )}
          <Link href="/personalInformation/historyTest">
            <MenuItem
              className="py-3 pl-4 pr-6 hover:bg-gray-400 hover:text-cyan-800"
              activeclassname="bg-gray-400"
            >
              前後測表格
            </MenuItem>
          </Link>
          <Link href="/personalInformation/reservationRecord">
            <MenuItem
              className="py-3 pl-4 pr-6 hover:bg-gray-400 hover:text-cyan-800"
              activeclassname="bg-gray-400"
            >
              預約紀錄
            </MenuItem>
          </Link>
          <Link href="/personalInformation/purchaseRecord">
            <MenuItem
              className="py-3 pl-4 pr-6 hover:bg-gray-400 hover:text-cyan-800"
              activeclassname="bg-gray-400"
            >
              購買紀錄
            </MenuItem>
          </Link>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default PersonalInfoSidebar;
