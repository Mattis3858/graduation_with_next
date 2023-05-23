import React from 'react';

function TeaProduct({ src, name = '', description = '', price = 0 }) {
  return (
    <div className="border-solid border-2 border-lime-600 rounded-2xl mt-5 bg-gray-200 font-sans">
      <div className="w-full">
        <img src={src} alt="Tea" className="block mx-auto w-1/2" />
      </div>
      <hr className="h-0.5 bg-lime-600 border-0" />
      <div>
        <div className="mt-2 ml-3 text-2xl font-bold">{name}</div>
        <div className="mt-2 ml-3">{description}</div>
        <div className="mt-2 ml-3 mb-2 text-xl font-semibold">${price}</div>
      </div>
      <div className="flex justify-evenly ">
        <button className="h-8 bg-gray-300 mb-2 rounded-2xl w-24 border-lime-600 border-2">
          預約品茶
        </button>
        <button className="h-8 bg-gray-300 mb-2 rounded-2xl w-24 border-lime-700 border-2">
          購買
        </button>
      </div>
    </div>
  );
}

export default TeaProduct;
