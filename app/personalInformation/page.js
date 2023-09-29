'use client';
import Profile from './Profile';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

const supabase = createClient(
  'https://zdxlzmekrckaffbzupmh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkeGx6bWVrcmNrYWZmYnp1cG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzNzM1MTEsImV4cCI6MjAwMzk0OTUxMX0.YI14GVJfa6H0eXOUqCKXT8AHLxK4GcAb8UYPTH4QLKQ'
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
