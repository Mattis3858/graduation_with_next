import React from 'react';
import TeaProduct from '../components/TeaProduct';

const Product = () => {
  return (
    <div>
      <div className="font-bold text-4xl mt-5 mb-5 ml-10">木柵茶本舖</div>
      <div className="grid justify-around gap-x-12 gap-y-5 grid-cols-3 ml-10 mr-10 mb-10">
        <TeaProduct
          src="images/green-tea.png"
          name="Green Tea"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus quam sem, vel euismod metus elementum quis. Proin libero purus, feugiat non ligula et, mattis congue ante. Proin posuere lacinia vulputate. Sed efficitur pretium tincidunt. Morbi aliquam nisi ex, ac consectetur ipsum auctor eget. "
          price={555}
        />
        <TeaProduct
          src="images/green-tea.png"
          name="Green Tea"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus quam sem, vel euismod metus elementum quis. Proin libero purus, feugiat non ligula et, mattis congue ante. Proin posuere lacinia vulputate. Sed efficitur pretium tincidunt. Morbi aliquam nisi ex, ac consectetur ipsum auctor eget. "
          price={555}
        />
        <TeaProduct
          src="images/green-tea.png"
          name="Green Tea"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus quam sem, vel euismod metus elementum quis. Proin libero purus, feugiat non ligula et, mattis congue ante. Proin posuere lacinia vulputate. Sed efficitur pretium tincidunt. Morbi aliquam nisi ex, ac consectetur ipsum auctor eget. "
          price={555}
        />
        <TeaProduct
          src="images/green-tea.png"
          name="Green Tea"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus quam sem, vel euismod metus elementum quis. Proin libero purus, feugiat non ligula et, mattis congue ante. Proin posuere lacinia vulputate. Sed efficitur pretium tincidunt. Morbi aliquam nisi ex, ac consectetur ipsum auctor eget. "
          price={555}
        />
        <TeaProduct
          src="images/green-tea.png"
          name="Green Tea"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus quam sem, vel euismod metus elementum quis. Proin libero purus, feugiat non ligula et, mattis congue ante. Proin posuere lacinia vulputate. Sed efficitur pretium tincidunt. Morbi aliquam nisi ex, ac consectetur ipsum auctor eget. "
          price={555}
        />
        <TeaProduct
          src="images/green-tea.png"
          name="Green Tea"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus quam sem, vel euismod metus elementum quis. Proin libero purus, feugiat non ligula et, mattis congue ante. Proin posuere lacinia vulputate. Sed efficitur pretium tincidunt. Morbi aliquam nisi ex, ac consectetur ipsum auctor eget. "
          price={555}
        />
      </div>
    </div>
  );
};

export default Product;
