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
  const [user, setUser] = useState([]);
  const currentDate = new Date();

  async function getUser() {
    const { data } = await supabase.from('user').select();
    console.log(data);
    setUser(data);
  }
  useEffect(() => {
    getUser();
  }, []);

  return (
    <main className="">
      <div className="">
        {user.length !== 0 && (
          <Profile
            name={user[0].user_name}
            birthDate={user[0].user_birth}
            age={Math.floor(
              (currentDate - new Date(user[0].user_birth)) /
                (1000 * 60 * 60 * 24 * 365.25)
            )}
            gender={user[0].user_gender === 1 ? '女' : '男'}
            email={user[0].user_email}
            phoneNumber={user[0].user_tel}
          />
        )}
      </div>
    </main>
  );
}
