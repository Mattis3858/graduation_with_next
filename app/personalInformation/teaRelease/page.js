'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { getShopID, supabase, flavorTable } from '../../components/module';

const Home = () => {
  const { data: session, status } = useSession();
  const [shopID, setShopID] = useState('');
  const [prodName, setProdName] = useState('');
  const [prodDescription, setProdDescription] = useState('');
  const [prodPrice, setProdPrice] = useState();
  const [image, setImage] = useState();
  const [flavorValues, setFlavorValues] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const handleFlavorScoreChange = (index, value) => {
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue) && parsedValue >= 0 && parsedValue <= 5) {
      const updatedValues = [...flavorValues];
      updatedValues[index] = parsedValue;
      setFlavorValues(updatedValues);
    } else {
      // 输入值不在有效范围内，可以进行错误处理
      // 在这里可以显示错误信息给用户
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentTime = new Date().toISOString();
    if (!shopID || !prodName || !prodDescription || !prodPrice) {
      // 做一些錯誤處理，確保所有必填字段都已填寫
      window.alert('Please enter all the information');
      return;
    }
    if (flavorValues.length !== 17) {
      window.alert('請輸入完整風味數據');
      return;
    }
    if (!image) {
      window.alert('請上傳照片');
      return;
    }
    // console.log(image.name);
    const { data } = supabase.storage
      .from('product')
      .getPublicUrl(`images/${image.name}`);
    const { data: teaRelease, error } = await supabase.from('product').upsert([
      {
        shop_id: shopID,
        prod_name: prodName,
        prod_desc: prodDescription,
        prod_pic: data.publicUrl,
        prod_status: false,
        created_time: currentTime,
        updated_time: currentTime,
        price: prodPrice,
        radar_data: flavorValues,
      },
    ]);
    // try {
    //   const { data, error } = await supabase.storage
    //     .from('product')
    //     .upload(`images/${image.name}`, image);

    //   if (error) {
    //     console.error('Error uploading file:', error);
    //   } else {
    //     console.log('File uploaded successfully:', data);
    //   }
    // } catch (error) {
    //   console.error('Error:', error.message);
    //   // Handle other errors
    // }
    window.alert('上架成功');
  };
  useEffect(() => {
    getShopID(setShopID, session);
  }, [session]);
  const handleImageUpload = async (e) => {
    setImage(e.target.files[0]);
    try {
      const { data, error } = await supabase.storage
        .from('product')
        .upload(`images/${e.target.files[0].name}`, e.target.files[0]);
      // console.log(data);
      if (error) {
        console.error('Error uploading file:', error);
      } else {
        console.log('File uploaded successfully:', data);
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Handle other errors
    }
  };
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
        {Object.values(flavorTable).map((value, index) => (
          <input
            key={index}
            type="number"
            value={flavorValues[index] || ''}
            onChange={(e) => handleFlavorScoreChange(index, e.target.value)}
            placeholder={`${value}`}
            className="m-2 p-2 border border-gray-300 rounded-md"
          />
        ))}
        {console.log(flavorValues)}

        <div className="m-2 flex items-center justify-center">
          <label htmlFor="image1" className="m-2">
            <input
              type="file"
              id="image1"
              name="image1"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageUpload(e)}
            />

            <span className="border border-gray-300 p-2 rounded-md cursor-pointer">
              上傳圖片
            </span>
          </label>
        </div>
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
