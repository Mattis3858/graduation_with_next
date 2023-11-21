'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { getShopID, supabase } from '../../components/module';

const Home = () => {
  const { data: session, status } = useSession();
  const [shopID, setShopID] = useState('');
  const [prodName, setProdName] = useState('');
  const [prodDescription, setProdDescription] = useState('');
  const [prodPrice, setProdPrice] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentTime = new Date().toISOString();
    if (!shopID || !prodName || !prodDescription || !prodPrice) {
      // 做一些錯誤處理，確保所有必填字段都已填寫
      window.alert('Please enter all the information');
      return;
    }
    const { data: teaRelease, error } = await supabase.from('product').upsert([
      {
        shop_id: shopID,
        prod_name: prodName,
        prod_desc: prodDescription,
        prod_pic: null,
        prod_status: false,
        created_time: currentTime,
        updated_time: currentTime,
        price: prodPrice,
      },
    ]);
    window.alert('上架成功');
  };
  useEffect(() => {
    getShopID(setShopID, session);
  }, [session]);
  return (
    <main className="bg-white p-6 pt-0 rounded-lg shadow-md">
      <h1 className="text-4xl text-center mt-6 mb-4 big_title">茶行茶款上架</h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={prodName}
          onChange={(e) => setProdName(e.target.value)}
          placeholder="茶款名稱"
          className="m-2 p-2 border border-gray-300 rounded-md"
        />
        <textarea
          name="description"
          placeholder="描述"
          value={prodDescription}
          onChange={(e) => setProdDescription(e.target.value)}
          className="m-2 p-2 border border-gray-300 rounded-md"
        ></textarea>
        <input
          type="number"
          name="price"
          value={prodPrice}
          onChange={(e) => setProdPrice(e.target.value)}
          placeholder="價格"
          className="m-2 p-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="card-button bg-lime-600 text-white p-2 rounded-md mx-auto"
        >
          上架茶款
        </button>
      </form>
    </main>
  );
};

export default Home;
