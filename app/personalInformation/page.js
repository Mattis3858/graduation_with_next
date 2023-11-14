'use client';

import { useSession } from 'next-auth/react';
import Profile from './Profile';
import { useEffect, useState } from 'react';
import { getUser } from '../components/module';

export default function Home() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState();
  const currentDate = new Date();

  useEffect(() => {
    getUser(setUser, session);
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
