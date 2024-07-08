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

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    console.log('Form data submitted:', formData);
    alert('Thank you for your message. We will get back to you soon.');
  };

  return (
    <div className="contact">
        <Navbar />
        <div className="contact-page">
      
            <h2 className="contact-title">Contact Page</h2>
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
