'use client';
import React, { useState } from 'react';

const BrewGoodTea = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="ml-10">
      <div className="font-bold text-4xl mt-6 text-center">泡好茶</div>
      <h2>Add Image:</h2>
      <input type="file" onChange={handleChange} />
      <img src={file} />
    </div>
  );
};

export default BrewGoodTea;
