import React, { useState } from 'react';
import './contact.css'
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    

    formData.append("access_key", "b54b52bf-7327-40e3-b15f-3637aa61764e" );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    })
    const result = await res.json();

    if (result.success) {
      alert("Email has been successfuly sent to ZoAfya Org.");
      window.location.href = '/home'
    };
  };

  return (
    <div className="contact">
        <Navbar />
        <div className="contact-page">
      
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-intro">If you have any inquiries, please feel free to send us a message. We'd love to hear from you!</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
                </div>
                
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
                </div>
                
                <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
                </div>
                
                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
        <Footer />
    </div>
    
  );
};

export default ContactPage;
