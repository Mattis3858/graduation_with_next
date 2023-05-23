import React from 'react';
import TeaProduct from '../components/TeaProduct';

const Product = () => {
  return (
    <div>
      <div className="font-bold text-4xl mt-5">木柵茶本舖</div>
      <div className="flex justify-around">
        <TeaProduct
          src="images/green-tea.png"
          name="Green Tea"
          description="This is a cup of green tea"
          price={555}
        />
        <TeaProduct
          src="images/green-tea.png"
          name="Green Tea"
          description="This is a cup of green tea"
          price={555}
        />
        <TeaProduct
          src="images/green-tea.png"
          name="Green Tea"
          description="This is a cup of green tea"
          price={555}
        />
      </div>
    </div>
  );
};

export default Product;
