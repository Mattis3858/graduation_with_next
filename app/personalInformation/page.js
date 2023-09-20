'use client';
import Profile from './Profile';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
  'https://zdxlzmekrckaffbzupmh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkeGx6bWVrcmNrYWZmYnp1cG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzNzM1MTEsImV4cCI6MjAwMzk0OTUxMX0.YI14GVJfa6H0eXOUqCKXT8AHLxK4GcAb8UYPTH4QLKQ'
);

export default function Home() {
  const [buyRecord, setBuyRecord] = useState([]);

  useEffect(() => {
    getBuyRecord();
  }, []);

  async function getBuyRecord() {
    const { data } = await supabase.from('buy_record').select();
    console.log(data);
  }

  return (
    <main className="">
      <div className="">
        <Profile
          name="Jason Kou"
          birthDate={'2000/00/00'}
          age="200"
          gender="男"
          email="jasonkou@ggmail.com"
          phoneNumber={'0800000123'}
        />
      </div>
    </main>
  );
}
