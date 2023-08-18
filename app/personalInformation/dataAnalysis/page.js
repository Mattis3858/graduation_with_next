'use client';

// import { Column } from '@ant-design/plots';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
// import 'react-chartjs-2/dist/react-chartjs-2.css';

export default function Home() {
  const revenueData = [
    10000, 15000, 20000, 18000, 22000, 25000, 28000, 30000, 28000, 26000, 24000,
    28000,
  ];
  const costData = [
    8000, 10000, 12000, 10000, 14000, 15000, 16000, 18000, 16000, 15000, 12000,
    14000,
  ];
  const profits = revenueData.map(
    (revenueMonth, index) => revenueMonth - costData[index]
  );
  // console.log(profits);
  const profitPercentages = profits.map((profit, index) => {
    if (index === 0) {
      return 0; // 沒有前一個月的利潤，所以利潤百分比設為 0
    } else {
      return ((profit - profits[index - 1]) / profits[index - 1]) * 100;
    }
  });
  // console.log(profitPercentages);
  const revenueAndCostData = {
    labels: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ],
    datasets: [
      {
        label: '營業收益',
        data: revenueData,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: '成本',
        data: costData,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  const profitData = {
    labels: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ],
    datasets: [
      {
        label: '利潤',
        data: profits,
        backgroundColor: 'rgba(255, 205, 86, 0.6)', // 使用其他顏色表示利潤百分比
        borderColor: 'rgba(255, 205, 86, 1)',
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <main className="">
      <h1 className="font-bold text-4xl mt-6 text-center">後台管理</h1>
      <div className="mt-6">
        <Chart type="bar" data={revenueAndCostData} options={''} />
      </div>
      <div className="mt-6">
        <Chart type="bar" data={profitData} options={options} />
      </div>
    </main>
  );
}
