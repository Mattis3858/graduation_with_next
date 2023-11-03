const Profile = ({ name, birthDate, age, email, gender, phoneNumber }) => {
  return (
    <div className=" bg-white rounded-lg shadow-md px-6 pb-4">
      <h1 className="text-4xl text-center mb-4 big_title">個人檔案</h1>
      <table className="w-full pt-4">
        <tbody>
          <tr className="border-b">
            <td className="font-semibold pr-4 py-2">姓名：</td>
            <td className="py-2">{name}</td>
          </tr>
          <tr className="border-b">
            <td className="font-semibold pr-4 py-2">生日：</td>
            <td className="py-2">{birthDate}</td>
          </tr>
          <tr className="border-b">
            <td className="font-semibold pr-4 py-2">年齡：</td>
            <td className="py-2">{age}</td>
          </tr>
          <tr className="border-b">
            <td className="font-semibold pr-4 py-2">性別：</td>
            <td className="py-2">{gender}</td>
          </tr>
          <tr className="border-b">
            <td className="font-semibold pr-4 py-2">電子郵件：</td>
            <td className="py-2">{email}</td>
          </tr>
          <tr>
            <td className="font-semibold pr-4 py-2">電話：</td>
            <td className="py-2">{phoneNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Profile;
