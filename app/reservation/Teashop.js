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
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [remark, setRemark] = useState('');

  const fillUserData = () => {
    if (user) {
      setName(user.user_account || ''); // 设置姓名，如果user.user_account不存在，则设置为空字符串
      setPhoneNumber(user.user_tel || ''); // 设置电话，如果user.user_tel不存在，则设置为空字符串
      setEmail(user.user_email || ''); // 设置电子邮件，如果user.user_email不存在，则设置为空字符串
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const currentTime = new Date().toISOString();
    setOpen(false);
    const reservationData = {
      user_id: user.user_id,
      shop_id: shopID,
      reserv_name: name,
      phone_number: phoneNumber,
      email: email,
      number_of_people: numberOfPeople,
      reserv_date: date,
      reserv_time: time,
      remark: remark,
      created_time: currentTime,
      updated_time: currentTime,
    };
    try {
      const { data: reservation, error } = await supabase
        .from('reservation_record')
        .upsert([reservationData]);
      window.alert('預約已提交');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser(setUser, session);
  }, [session]);

  return (
    <div>
      <div className="border-2 border-lime-600 rounded-2xl bg-gray-200 font-sans card p-4">
        <div className="card-pic h-full sm:h-60 md:h-60 lg:h-60 relative">
          <img
            src={src}
            alt="Tea"
            className="pic object-cover w-full h-60 sm:h-60 md:h-60 lg:h-60"
          />
        </div>
        <div className="card-content">
          <div>
            <div className="mt-2 text-2xl font-bold">{teaShopName}</div>
            <div className="mt-2 text-xl font-bold sm:h-28 md:h-24 lg:h-28">
              {description}
            </div>
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
                    請填寫以下資訊
                  </h2>
                  <form onSubmit={handleSubmit} className="text-center">
                    <button
                      onClick={fillUserData}
                      className="card-button text-white rounded-md mx-auto"
                    >
                      使用我的資料
                    </button>
                    <div className="mt-4">
                      <label>
                        姓名:
                        <input
                          className="input w-52"
                          type="text"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          required
                        />
                      </label>
                    </div>
                    <div className="mt-4">
                      <label>
                        手機:
                        <input
                          className="input w-52"
                          type="text"
                          value={phoneNumber}
                          onChange={(event) =>
                            setPhoneNumber(event.target.value)
                          }
                          required
                        />
                      </label>
                    </div>
                    <div className="mt-4">
                      <label>
                        信箱:
                        <input
                          className="input w-52"
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          required
                        />
                      </label>
                    </div>
                    <div className="mt-4">
                      <label>
                        人數:
                        <input
                          className="input w-52"
                          type="number"
                          value={numberOfPeople}
                          onChange={(event) =>
                            setNumberOfPeople(event.target.value)
                          }
                          required
                        />
                      </label>
                    </div>
                    <div className="mt-4">
                      <label>
                        日期:
                        <input
                          className="input w-52"
                          type="date"
                          value={date}
                          onChange={(event) => setDate(event.target.value)}
                          required
                        />
                      </label>
                    </div>
                    <div className="mt-4">
                      <label>
                        時間:
                        <input
                          className="input w-52"
                          type="time"
                          value={time}
                          onChange={(event) => setTime(event.target.value)}
                          required
                        />
                      </label>
                    </div>
                    <div className="mt-4">
                      <label>
                        備註:
                        <input
                          className="input w-52"
                          type="text"
                          value={remark}
                          onChange={(event) => setRemark(event.target.value)}
                        ></input>
                      </label>
                    </div>
                    <div className="mt-4">
                      <button
                        className="card-button text-white p-2 rounded-md mx-auto"
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
