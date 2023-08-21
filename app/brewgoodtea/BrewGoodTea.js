'use client';
import React, { useState } from 'react';

const BrewGoodTea = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [selectedTea, setSelectedTea] = useState(''); 
  const [isLoading, setIsLoading] = useState(false);

  async function handleChange(e) {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      setMessage('Please select an image.');
      return;
    }
    
    setIsLoading(true);
    setFile(selectedFile);
    
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('teaType', selectedTea);

    try {
      const response = await fetch('http://127.0.0.1:8080/api/home', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setMessage(`相似程度: ${data.similarity}`);
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleTeaChange(e) {
    setSelectedTea(e.target.value); // Update the selected tea type
  }

  return (
    <div className="ml-10">
      <div className="font-bold text-4xl mt-6 text-center">泡好茶</div>
      <div>
        <h2>Select Tea Type:</h2>
        <select value={selectedTea} onChange={handleTeaChange}>
          <option value="">請選擇茶的種類</option>
          <option value="張協興鐵觀音">張協興鐵觀音</option>
          <option value="威叔鐵觀音紅茶">威叔鐵觀音紅茶</option>
          <option value="包種茶">包種茶</option>
        </select>
      </div>
      <h2>Add Image:</h2>
      <input
        id="imgTea"
        type="file"
        onChange={handleChange}
        accept="image/gif, image/jpeg, image/png"
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>{message}</div>
      )}
      {file && <img src={URL.createObjectURL(file)} alt="Selected" />}
    </div>
  );
};

export default BrewGoodTea;
