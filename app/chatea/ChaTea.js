'use client';
import React, { useState } from 'react';
import axios from 'axios';
require('dotenv').config();

const ChaTea = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false); // Add a loading state
  const [isDataEntered, setIsDataEntered] = useState(false);

  const handleEnterPress = (event) => {
    if (event.key === 'Enter' && isDataEntered) {
      // 用户按下Enter键，执行API调用
      event.preventDefault(); // 防止表单提交
      getAnswer();
    }
  };
  async function getAnswer() {
    console.log(question);
    setLoading(true); // Set loading to true when making the request
    try {
      const response = await axios.post(
        `${process.env.API_URI}/TeaChatBOT/answer`,
        {
          query: question,
        }
      );
      const data = response.data;
      // console.log(data['answer']);
      // console.log(
      //   data.refs['第1份參考來源']['source'],
      //   data.refs['第1份參考來源']['title'],
      //   data.refs['第1份參考來源']['url']
      // );
      // console.log(data.refs['第2份參考來源']);
      // console.log(data.refs['第3份參考來源']);

      setAnswer(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setAnswer(null);
    } finally {
      setLoading(false); // Set loading to false when the request is completed
    }
  }

  return (
    <div className="page-layout flex items-center justify-center ">
      <div className=" max-w-xl w-full bg-white p-8 rounded shadow-lg pt-0">
        <div className="text-4xl text-center big_title">
          CHATEA<span className="tea">茶</span>葉知識問答
        </div>
        <div className="mb-4">
          <input
            className="w-full h-24 p-2 border border-gray-300 rounded text-xl"
            placeholder="請輸入茶葉問題"
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
              setIsDataEntered(e.target.value.trim() !== ''); // Check if input is not empty
            }}
            onKeyDown={handleEnterPress}
          />
        </div>
        <div className="text-center">
          <button
            className="card-button bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded"
            onClick={getAnswer}
            disabled={!isDataEntered || loading} // Disable the button when loading
          >
            {loading ? '載入中...' : '送出'}{' '}
            {/* Display loading message or '送出' */}
          </button>
        </div>
        {/* Display loading message */}
        {answer && !loading && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">回答:</h2>
            <p className="mt-2 text-lg">{answer['answer']}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">參考資料:</h3>
              <ol className="list-decimal pl-5">
                <li className="mt-1">
                  {answer.refs['第1份參考來源']['source']} -{' '}
                  {answer.refs['第1份參考來源']['title']}{' '}
                  <a
                    href={answer.refs['第1份參考來源']['url']}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    [連結]
                  </a>
                </li>
                <li className="mt-1">
                  {answer.refs['第2份參考來源']['source']} -{' '}
                  {answer.refs['第2份參考來源']['title']}{' '}
                  <a
                    href={answer.refs['第2份參考來源']['url']}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    [連結]
                  </a>
                </li>
                <li className="mt-1">
                  {answer.refs['第3份參考來源']['source']} -{' '}
                  {answer.refs['第3份參考來源']['title']}{' '}
                  <a
                    href={answer.refs['第3份參考來源']['url']}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    [連結]
                  </a>
                </li>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChaTea;
