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
    <div className="rounded-l-lg rounded-r-lg overflow-hidden lg:w-60 ">
      <Sidebar>
        <Menu className="bg-gray-300 text-cyan-900">
          {roleID === 1 && (
            <Link href="/personalInformation">
              <MenuItem>茶行檔案</MenuItem>
            </Link>
          )}
          {roleID === 2 && (
            <Link href="/personalInformation">
              <MenuItem className="">個人檔案</MenuItem>
            </Link>
          )}
          {roleID === 1 && (
            <Link href="/personalInformation/dataAnalysis">
              <MenuItem>後臺管理</MenuItem>
            </Link>
          )}
          {roleID === 1 && (
            <Link href="/personalInformation/teaRelease">
              <MenuItem>茶款上架</MenuItem>
            </Link>
          )}
          {roleID === 2 && (
            <Link href="/personalInformation/historyTest">
              <MenuItem>前後測表格</MenuItem>
            </Link>
          )}

          <Link href="/personalInformation/reservationRecord">
            <MenuItem>預約紀錄</MenuItem>
          </Link>

          <Link href="/personalInformation/purchaseRecord">
            <MenuItem>購買紀錄</MenuItem>
          </Link>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default PersonalInfoSidebar;
