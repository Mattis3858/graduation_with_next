'use client';
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Modal from '@mui/material/Modal';
import '../product/product.css';
import { useState } from 'react';
import { getUser, supabase } from '../components/module';

const Teashop = ({ teaShopName, src, description, shopID }) => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [user, setUser] = useState('');

  const handleSubmit = async (event) => {
    const currentTime = new Date().toISOString();
    event.preventDefault();
    email && window.alert('預約已提交');
    // 清除表單資料
    setEmail('');
    setOpen(false);
    const reservationData = {
      user_id: user.user_id,
      shop_id: shopID,
      reserv_date: date,
      created_time: currentTime,
      updated_time: currentTime,
    };
    const { data: reservation, error } = await supabase
      .from('reservation_record')
      .upsert([reservationData]);
  };

  useEffect(() => {
    getUser(setUser, session);
  }, [session]);

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
            <Modal open={open} onClose={handleClose}>
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white p-4 rounded-md">
                {/* Updated classes for responsiveness */}
                <div className="card-content flex flex-col justify-center items-center">
                  <h2 className="text-2xl font-bold text-center mb-4">
                    請填入預約日期
                  </h2>
                  <form onSubmit={handleSubmit} className="text-center">
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
                    <div className="mt-4">
                      <button
                        className="card-button bg-lime-600 text-white p-2 rounded-md mx-auto"
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
