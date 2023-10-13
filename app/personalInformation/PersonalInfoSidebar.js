'use client';
import React from 'react';
import Link from 'next/link';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

const PersonalInfoSidebar = () => {
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
          <Link href="/personalInformation/dataAnalysis">
            <MenuItem
              className="py-3 pl-4 pr-6 hover:bg-gray-400 hover:text-cyan-800"
              activeclassname="bg-gray-400"
            >
              後臺管理
            </MenuItem>
          </Link>
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
