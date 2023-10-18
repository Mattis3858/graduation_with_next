'use client';
import { useState } from 'react';
import { getProviders, signIn } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { options } from '../api/auth/[...nextauth]/options';

export default function Signin() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="page-layout">
      <div>
        <form className="">
          <input
            name="username"
            value={userName}
            className=""
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="">
            <button type="submit" className="">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
