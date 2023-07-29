import React from 'react';

const Profile = ({ name, birthDate, age, email, gender, phoneNumber }) => {
  return (
    <div className="flex justify-center">
      <div className="">
        <h1 className="font-bold text-4xl mt-6 ml-10">個人檔案</h1>
        <table className="mt-6 ml-10">
          <tbody>
            <tr>
              <td className="font-medium text-xl">姓名：</td>
              <td className="font-medium text-xl">{name}</td>
            </tr>
            <tr>
              <td className="font-medium text-xl">生日：</td>
              <td className="font-medium text-xl">{birthDate}</td>
            </tr>
            <tr>
              <td className="font-medium text-xl">年齡：</td>
              <td className="font-medium text-xl">{age}</td>
            </tr>
            <tr>
              <td className="font-medium text-xl">性別：</td>
              <td className="font-medium text-xl">{gender}</td>
            </tr>
            <tr>
              <td className="font-medium text-xl">電子郵件：</td>
              <td className="font-medium text-xl">{email}</td>
            </tr>
            <tr>
              <td className="font-medium text-xl">電話：</td>
              <td className="font-medium text-xl">{phoneNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
