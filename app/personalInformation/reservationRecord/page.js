export default function Home() {
  const appointmentData = [
    {
      date: '2023-06-21',
      shopName: '張協興',
    },
    {
      date: '2023-08-23',
      shopName: '威叔',
    },
    {
      date: '2023-08-21',
      shopName: '張協興',
    },
    // ...其他預約紀錄
  ];
  const sortedAppointmentData = appointmentData
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <main className="">
      <h1 className="font-bold text-4xl mt-6 text-center">預約紀錄</h1>
      <table className="min-w-full border rounded-lg overflow-hidden mt-6">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left py-2 px-3">預約日期</th>
            <th className="text-left py-2 px-3">預約店家</th>
          </tr>
        </thead>
        <tbody>
          {sortedAppointmentData.map((appointment, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <td className="py-2 px-3">{appointment.date}</td>
              <td className="py-2 px-3">{appointment.shopName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
