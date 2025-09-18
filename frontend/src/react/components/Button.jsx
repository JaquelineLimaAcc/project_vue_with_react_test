import React from 'react';
import './Button.css';

const CustomerJson = () => {
  const handlePost = () => {
    console.log('post data');
    // test
  };

  const handleGet = () => {
    console.log('get data');
  };

  return (
    <div style={{ padding: '20px' }}>
      <button className="button getJson" onClick={handleGet}>
        GET
      </button>
      <button className="button postJson" onClick={handlePost}>
        POST
      </button>
    </div>
  );
};

export default CustomerJson;
