const Profile = ({ name, birthDate, age, email, gender, phoneNumber }) => {
  return (
    <div className="w-full">
      <div className="">
        <h1 className="font-bold text-4xl mt-6 text-center">個人檔案</h1>
        <div className="flex w-full">
          <div className="mt-6 w-1/3">
            {/* <div className="text-2xl font-semibold mb-6 text-center">
              基本資料
            </div> */}
            <table className="mt-6">
              <tbody className="">
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
