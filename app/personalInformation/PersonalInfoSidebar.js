'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useSession } from 'next-auth/react';
import { findUserRole } from '../components/module';
const PersonalInfoSidebar = () => {
  const { data: session, status } = useSession();
  const [roleID, setRoleID] = useState();

  useEffect(() => {
    findUserRole(setRoleID, session);
  }, [session]);
  return (
    <div className=" w-60 rounded-l-lg rounded-r-lg overflow-hidden">
      <Sidebar>
        <Menu className="bg-gray-300 text-cyan-900">
          <MenuItem
            className="py-3 pl-4 pr-6 hover:bg-gray-400 hover:text-cyan-800"
            activeclassname="bg-gray-400"
          >
            <Link href="/personalInformation">個人檔案</Link>
          </MenuItem>
          {roleID === 1 && (
            <MenuItem
              className="py-3 pl-4 pr-6 hover:bg-gray-400 hover:text-cyan-800"
              activeclassname="bg-gray-400"
            >
              <Link href="/personalInformation/dataAnalysis">後臺管理</Link>
            </MenuItem>
          )}
          {roleID === 2 && (
            <MenuItem
              className="py-3 pl-4 pr-6 hover:bg-gray-400 hover:text-cyan-800"
              activeclassname="bg-gray-400"
            >
              <Link href="/personalInformation/historyTest">前後測表格</Link>
            </MenuItem>
          )}
          <MenuItem
            className="py-3 pl-4 pr-6 hover:bg-gray-400 hover:text-cyan-800"
            activeclassname="bg-gray-400"
          >
            <Link href="/personalInformation/reservationRecord">預約紀錄</Link>
          </MenuItem>
          <MenuItem
            className="py-3 pl-4 pr-6 hover:bg-gray-400 hover:text-cyan-800"
            activeclassname="bg-gray-400"
          >
            <Link href="/personalInformation/purchaseRecord">購買紀錄</Link>
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default PersonalInfoSidebar;
