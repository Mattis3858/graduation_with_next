import React from 'react';

function TeaProduct({ src, name = '', description = '', price = 0 }) {
  return (
    <div className="border-solid border-2 border-gray-400 rounded-2xl mt-5 bg-gray-200 ">
      <div className="w-full">
        <img src={src} alt="Tea" width="250px" height="250px" />
      </div>
      <div>
        <div className="mt-4">{name}</div>
        <div className="mt-4">{description}</div>
        <div className="mt-4">${price}</div>
      </div>
    </div>
  );
}

export default TeaProduct;
