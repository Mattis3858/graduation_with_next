import React from 'react';
import TeaProduct from '../components/TeaProduct';

const ProductData = {
  張協興炭焙鐵觀音: {
    src: 'images/green-tea.png',
    name: 'Green Tea',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus quam sem, vel euismod metus elementum quis. Proin libero purus, feugiat non ligula et, mattis congue ante. Proin posuere lacinia vulputate. Sed efficitur pretium tincidunt. Morbi aliquam nisi ex, ac consectetur ipsum auctor eget. ',
    price: 555,
  },
};
const Product = () => {
  return (
    <div>
      <div className="font-bold text-4xl mt-6 ml-10">木柵茶本舖</div>
      <div className="grid justify-around gap-x-10 grid-cols-3 ml-10 mr-10">
        <TeaProduct
          src={ProductData.張協興炭焙鐵觀音.src} //
          name={ProductData.張協興炭焙鐵觀音.name}
          description={ProductData.張協興炭焙鐵觀音.description}
          price={ProductData.張協興炭焙鐵觀音.price}
        />
        <TeaProduct
          src={ProductData.張協興炭焙鐵觀音.src} //
          name={ProductData.張協興炭焙鐵觀音.name}
          description={ProductData.張協興炭焙鐵觀音.description}
          price={ProductData.張協興炭焙鐵觀音.price}
        />
        <TeaProduct
          src={ProductData.張協興炭焙鐵觀音.src} //
          name={ProductData.張協興炭焙鐵觀音.name}
          description={ProductData.張協興炭焙鐵觀音.description}
          price={ProductData.張協興炭焙鐵觀音.price}
        />
        <TeaProduct
          src={ProductData.張協興炭焙鐵觀音.src} //
          name={ProductData.張協興炭焙鐵觀音.name}
          description={ProductData.張協興炭焙鐵觀音.description}
          price={ProductData.張協興炭焙鐵觀音.price}
        />
        <TeaProduct
          src={ProductData.張協興炭焙鐵觀音.src} //
          name={ProductData.張協興炭焙鐵觀音.name}
          description={ProductData.張協興炭焙鐵觀音.description}
          price={ProductData.張協興炭焙鐵觀音.price}
        />
        <TeaProduct
          src={ProductData.張協興炭焙鐵觀音.src} //
          name={ProductData.張協興炭焙鐵觀音.name}
          description={ProductData.張協興炭焙鐵觀音.description}
          price={ProductData.張協興炭焙鐵觀音.price}
        />
      </div>
    </div>
  );
};

export default Product;