export default function Home() {
  const purchaseData = [
    {
      date: '2023-08-19',
      productName: '張協興鐵觀音',
      amount: 5,
      price: 5000,
    },
    {
      date: '2023-08-18',
      productName: '威叔鐵觀音紅茶',
      amount: 7,
      price: 2999,
    },
    {
      date: '2023-6-15',
      productName: '威叔鐵觀音',
      amount: 4,
      price: 1500,
    },
    // ...其他購買紀錄
  ];
  const sortedPurchaseData = purchaseData
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <main className="">
      <h1 className="font-bold text-4xl mt-6 text-center">購買紀錄</h1>
      <table className="min-w-full border rounded-lg overflow-hidden mt-6">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left py-2 px-3">購買日期</th>
            <th className="text-left py-2 px-3">產品名稱</th>
            <th className="text-left py-2 px-3">數量</th>

            <th className="text-left py-2 px-3">金額</th>
          </tr>
        </thead>
        <tbody>
          {sortedPurchaseData.map((purchase, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <td className="py-2 px-3">{purchase.date}</td>
              <td className="py-2 px-3">{purchase.productName}</td>
              <td className="py-2 px-3">{purchase.amount}</td>
              <td className="py-2 px-3">{purchase.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
