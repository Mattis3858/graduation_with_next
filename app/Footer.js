import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-300 to-white mt-auto p-2">
      <div
        className="grid lg:grid-cols-3 gap-10
  text-center pt-2 text-slate-800 text-sm pb-3"
      >
        <span>© 2023 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
      </div>
    </footer>
  );
}

export default Footer;
