// src/components/Chatbot/Chatbot.jsx

import React from 'react';
import './Chatbot.css';

const Chatbot = () => {
  return (
    <div className="chatbot-container">
      <h2>Chatbot</h2>
      <iframe
        src="https://loyal-simonne-novus-039a69cc.koyeb.app/" // Your deployed URL
        title="Chatbot"
        width="100%"
        height="600"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default Chatbot;
