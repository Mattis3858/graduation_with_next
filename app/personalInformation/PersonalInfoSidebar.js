'use client';
import React from 'react';
import Link from 'next/link';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const PersonalInfoSidebar = () => {
  return (
    <div className="">
      <Sidebar>
        <Menu>
          <Link href="/personalInformation">
            <MenuItem>個人檔案</MenuItem>
          </Link>
          <Link href="/personalInformation/dataAnalysis">
            <MenuItem> 後臺管理 </MenuItem>
          </Link>
          <Link href="/personalInformation/historyTest">
            <MenuItem> 前後測表格 </MenuItem>
          </Link>
          <Link href="/personalInformation/reservationRecord">
            <MenuItem> 預約紀錄 </MenuItem>
          </Link>
          <Link href="/personalInformation/purchaseRecord">
            <MenuItem> 購買紀錄 </MenuItem>
          </Link>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default PersonalInfoSidebar;
