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

const Teashop = ({ teaShopName, description }) => {
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
      <div className="border-solid border-2 border-lime-600 rounded-2xl bg-gray-200 font-sans card">
        <div className="card-pic">
          <img src="images/tea-1.jpg" className="pic" />
        </div>
        <div className="card-content">
          <div className="">
            <div className="mt-2 text-2xl font-bold">{teaShopName}</div>
            <div className="mt-2 text-xl font-bold">{description}</div>
          </div>
          {/* <div className="mt-2 ml-3 mb-2 text-2xl font-semibold "></div> */}

          <div className="flex justify-start button-group">
            <Button onClick={handleOpen} className="mt-3 card-button">
              預約品茶
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="card">
                <div className="card-content">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    請填入個人資訊
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    sx={{ mt: 3, mx: 'auto' }}
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <form onSubmit={handleSubmit}>
                      <div className="mt-2">
                        <label>
                          姓名:
                          <input
                            className="bg-slate-300 rounded-md input"
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
                            className="bg-slate-300 rounded-md input"
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
                            className="bg-slate-300 rounded-md input"
                            type="date"
                            value={date}
                            onChange={(event) => setDate(event.target.value)}
                            required
                          />
                        </label>
                      </div>
                      <div className="mt-8 justify-center button-group">
                        <button
                          className="card-button"
                          style={{ padding: '4px' }}
                          type="submit"
                          onClick={handleSubmit}
                        >
                          提交預約
                        </button>
                        {console.log(name, email, date)}
                      </div>
                    </form>
                  </Typography>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teashop;
