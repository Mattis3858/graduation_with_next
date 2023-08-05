'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

const Teashop = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // 在這裡處理預約邏輯，例如發送預約請求給伺服器等等
    console.log('預約已提交');
    console.log('姓名:', name);
    console.log('電子郵件:', email);
    console.log('日期:', date);
    // 清除表單資料
    setName('');
    setEmail('');
    setDate('');
  };

  return (
    <div>
      <div className="border-solid border-2 border-lime-600 rounded-2xl bg-gray-200 font-sans">
        <div className="w-full">
          <img
            src={'images/green-tea.png'}
            alt="Tea"
            className="block mx-auto w-1/2"
          />
        </div>
        <hr className="h-0.5 bg-lime-600 border-0" />
        <div>
          <div className="mt-2 ml-3 text-2xl font-bold">張協興</div>
          <div className="mt-2 ml-3">位於文山區的茶行老店</div>
          <div className="mt-2 ml-3 mb-2 text-2xl font-semibold "></div>
        </div>
        <div className="flex justify-evenly ">
          <Button
            onClick={handleOpen}
            className="h-10 bg-lime-600 mb-4 rounded-2xl w-28 text-white font-semibold hover:bg-lime-400 text-sm md:text-xl"
          >
            預約品茶
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 3, mx: 'auto' }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="mt-2">
                    <label>
                      姓名:
                      <input
                        className="bg-slate-300 rounded-md"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                      />
                    </label>
                  </div>
                  <div className="mt-2">
                    <label>
                      電子郵件:
                      <input
                        className="bg-slate-300 rounded-md"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </label>
                  </div>
                  <div className="mt-2">
                    <label>
                      日期:
                      <input
                        className="bg-slate-300 rounded-md"
                        type="date"
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                        required
                      />
                    </label>
                  </div>
                  <div className="mt-2 text-center">
                    <button
                      className="rounded-md border-solid bg-lime-600 text-white w-28 hover:bg-lime-400 text-sm md:text-xl"
                      type="submit"
                    >
                      提交預約
                    </button>
                  </div>
                </form>
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Teashop;
