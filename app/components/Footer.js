import React from 'react';
import './navbar.css';

function Footer() {
  return (
    <footer className="mt-auto p-2 footer">
      <div
        className="grid lg:grid-cols-3 gap-10
  text-center pt-2 text-slate-800 text-sm pb-3 "
      >
        <span>© 2023. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
      </div>
    </footer>
  );
}

export default Footer;
