import React from 'react';

const Profile = ({ name, birthDate, age, email, gender, phoneNumber }) => {
  return (
    <div className="">
      <div className="">
        <h1 className="font-bold text-4xl mt-6 ml-10">個人檔案</h1>
        <table className="mt-6 ml-10">
          <tbody>
            <tr>
              <td className="font-bold">姓名：</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td className="font-bold">生日：</td>
              <td>{birthDate}</td>
            </tr>
            <tr>
              <td className="font-bold">年齡：</td>
              <td>{age}</td>
            </tr>
            <tr>
              <td className="font-bold">性別：</td>
              <td>{gender}</td>
            </tr>
            <tr>
              <td className="font-bold">電子郵件：</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td className="font-bold">電話：</td>
              <td>{phoneNumber}</td>
            </tr>
            {/* 其他用戶資訊... */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
