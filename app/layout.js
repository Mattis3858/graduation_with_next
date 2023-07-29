'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from 'react-use-cart';
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
      <body
        className={inter.className}
        style={{ backgroundImage: 'url("images/4245552.jpg")' }}
      >
        <div className="min-h-screen flex flex-col">
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </div>
      </body>
    </html>
  );
}
