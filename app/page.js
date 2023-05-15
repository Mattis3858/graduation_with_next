'use client';
import Image from 'next/image';
import Navbar from './Navbar';
import Login from './Login';
import SignUp from './SignUp';

export default function Home() {
  return (
    <main className="bg-white">
      <Login />
    </main>
  );
}
