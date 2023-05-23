'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './Navbar';
import Footer from './Footer';
const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Graduation Project',
//   description: 'Generated by create next app',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>木柵茶葉推廣平台</title>
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
