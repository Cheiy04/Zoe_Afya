import React from 'react';
import './chatbot.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

const Chatbot = () => {
  return (
    <div className="chatbot-container">
      <Navbar />  
      <iframe
        src="https://zoe-qbb3.onrender.com/" // Your deployed URL
        title="Chatbot"
        width="100%"
        height="600"
        style={{ border: 'none' }}
      ></iframe>
      <Footer />
    </div>
  );
};

export default Chatbot;