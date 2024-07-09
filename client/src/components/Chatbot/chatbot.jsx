import React from 'react';
import './chatbot.css';

const Chatbot = () => {
  return (
    <div className="chatbot-container">
      <iframe
        src="https://brave-doralia-njiu-373920ef.koyeb.app/" // Your deployed URL
        title="Chatbot"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default Chatbot;
