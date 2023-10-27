'use client';

import { useSession } from 'next-auth/react';

import Profile from './Profile';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const supabase = createClient(
  process.env.SUPABASE_URI,
  process.env.SUPABASE_SECRET
);
export default function Home() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState();
  const [roleID, setRoleID] = useState();
  console.log(session);

  const supabase = createClient(
    process.env.SUPABASE_URI,
    process.env.SUPABASE_SECRET
  );
  async function getUser() {
    if (session?.user?.name) {
      const { data: user, error } = await supabase
        .from('user')
        .select('*')
        .eq('user_name', session.user.name);
      console.log(user[0]);
      setUser(user[0]);
    }
  }
  // const [user, setUser] = useState([]);
  const currentDate = new Date();

  // async function getUser() {
  //   const { data } = await supabase.from('user').select();
  //   console.log(data);
  //   setUser(data);
  // }
  useEffect(() => {
    getUser();
  }, [session]);

  return (
    <main className="">
      <div className="">
        {user && (
          <Profile
            name={user.user_name}
            birthDate={user.user_birth}
            age={Math.floor(
              (currentDate - new Date(user.user_birth)) /
                (1000 * 60 * 60 * 24 * 365.25)
            )}
            gender={user.user_gender === 1 ? '女' : '男'}
            email={user.user_email}
            phoneNumber={user.user_tel}
          />
        )}
      </div>
    </main>
  );
}
