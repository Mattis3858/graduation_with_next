'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { getShop, getUserID } from '../../components/module';

const Home = () => {
  return (
    <main className="bg-white p-6 pt-0 rounded-lg shadow-md">
      <h1 className="text-4xl text-center mt-6 mb-4 big_title">茶行茶款上架</h1>
    </main>
  );
};

export default Home;
