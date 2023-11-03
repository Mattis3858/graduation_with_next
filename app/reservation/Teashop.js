'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../product/product.css';

import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#f7fee7',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Teashop = ({ teaShopName, src, description }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // 在這裡處理預約邏輯，例如發送預約請求給伺服器等等
    console.log(name);
    name && date && email && window.alert('預約已提交');
    console.log('預約已提交');
    // 清除表單資料
    setOpen(false);
    // setName('');
    // setEmail('');
    // setDate('');
  };

  return (
    <div>
      <div className="border-2 border-lime-600 rounded-2xl bg-gray-200 font-sans card p-4">
        <div className="card-pic">
          <img src={src} alt="Tea" className="pic" />
        </div>
        <div className="card-content">
          <div>
            <div className="mt-2 text-2xl font-bold">{teaShopName}</div>
            <div className="mt-2 text-xl font-bold">{description}</div>
          </div>

          <div className="flex justify-start mt-3">
            <button
              onClick={handleOpen}
              className="card-button bg-lime-600 text-white p-2 rounded-md"
            >
              預約品茶
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="card p-4">
                <div className="card-content">
                  <h2 className="text-2xl font-bold text-center">
                    請填入個人資訊
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                      <label>
                        姓名:
                        <input
                          className="input"
                          type="text"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          required
                        />
                      </label>
                    </div>
                    <div className="mt-4">
                      <label>
                        電子郵件:
                        <input
                          className="input"
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          required
                        />
                      </label>
                    </div>
                    <div className="mt-4">
                      <label>
                        日期:
                        <input
                          className="input"
                          type="date"
                          value={date}
                          onChange={(event) => setDate(event.target.value)}
                          required
                        />
                      </label>
                    </div>
                    <div className="mt-4 text-center">
                      <button
                        className="card-button bg-lime-600 text-white p-2 rounded-md"
                        type="submit"
                      >
                        提交預約
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teashop;
