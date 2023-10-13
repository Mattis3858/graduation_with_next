'use client';
import React, { useState } from 'react';
import axios from 'axios';

const ChaTea = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false); // Add a loading state

  async function getAnswer() {
    console.log(question);
    setLoading(true); // Set loading to true when making the request
    try {
      const response = await axios.post(
        'https://b340-140-119-19-30.ngrok-free.app/TeaChatBOT/answer',
        {
          query: question,
        }
      );
      const data = response.data;
      console.log(data['answer']);
      console.log(
        data.refs['第1份參考來源']['source'],
        data.refs['第1份參考來源']['title'],
        data.refs['第1份參考來源']['url']
      );
      console.log(data.refs['第2份參考來源']);
      console.log(data.refs['第3份參考來源']);

      setAnswer(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setAnswer(null);
    } finally {
      setLoading(false); // Set loading to false when the request is completed
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg mt-12">
        <h1 className="text-3xl text-center mb-6 font-semibold">
          CHATEA茶葉知識問答
        </h1>
        <div className="mb-4">
          <textarea
            className="w-full h-24 p-2 border border-gray-300 rounded"
            placeholder="請輸入問題或選擇問題捷徑"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            onClick={getAnswer}
            disabled={loading} // Disable the button when loading
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
