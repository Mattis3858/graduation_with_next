'use client';
import React, { useState } from 'react';

const BrewGoodTea = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  async function handleChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://127.0.0.1:8080/api/home', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setMessage(`相似程度: ${data.similarity}`);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }

  return (
    <div className="ml-10">
      <div className="font-bold text-4xl mt-6 text-center">泡好茶</div>
      <h2>Add Image:</h2>
      <input
        id="imgTea"
        type="file"
        onChange={handleChange}
        accept="image/gif, image/jpeg, image/png"
      />
      <div>{message}</div>
      {file && <img src={URL.createObjectURL(file)} alt="Selected" />}
    </div>
  );
};

export default BrewGoodTea;
