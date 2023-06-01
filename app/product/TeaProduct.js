import React from 'react';

function TeaProduct({ src = '', name = '', description = '', price = 0 }) {
  return (
    <div className="border-solid border-2 border-lime-600 rounded-2xl bg-gray-200 font-sans">
      <div className="w-full">
        <img src={src} alt="Tea" className="block mx-auto w-1/2" />
      </div>
      <hr className="h-0.5 bg-lime-600 border-0" />
      <div>
        <div className="mt-2 ml-3 text-2xl font-bold">{name}</div>
        <div className="mt-2 ml-3">{description}</div>
        <div className="mt-2 ml-3 mb-2 text-2xl font-semibold ">${price}</div>
      </div>
      <div className="flex justify-evenly ">
        <button className="h-10 bg-lime-600 mb-4 rounded-2xl w-28 text-white font-semibold hover:bg-lime-400 text-sm md:text-2xl">
          預約品茶
        </button>
        <button className="h-10 bg-lime-600 mb-4 rounded-2xl w-28 text-white font-semibold hover:bg-lime-400 text-sm md:text-2xl">
          購買
        </button>
      </div>
    </div>
  );
}

export default TeaProduct;
