import React, { useState } from 'react';
import africastalking from 'africastalking';
import './appointment.css'
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
// import dotenv from 'dotenv'
// dotenv.config()




const BookOnlinePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
  });

  const handleBookNowClick = () => {
    setShowPopup(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleConfirmClick = async () => {
    const { name, number, email } = formData;
  
    try {
      const response = await fetch('http://localhost:3000/send-sms', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          number: number,
          message: `Hello ${name}, your appointment is set for the chosen date. Thank you!`,
        }),
      });
  
      const data = await response.json();
  
      console.log(data);
      alert('Appointment confirmed! You will receive an SMS shortly.');
      setShowPopup(false);
      window.location.href = '/';
    } catch (error) {
      console.error(error);
      setShowPopup(false)
      alert('Failed to send SMS. Please try again.');
    }
  };
  
  

  return (
    <div className="book-online-page">
      <header className="header">
        <h1 className="header-title">Our Services</h1>
      </header>

      <Navbar />  
      <section className="services-list">
        <div className="service-item">
          <img src="https://static.wixstatic.com/media/11062b_f61e194a105a40d4a84c9ca71085daea~mv2.jpg/v1/fill/w_290,h_194,fp_0.50_0.50,q_80,enc_auto/11062b_f61e194a105a40d4a84c9ca71085daea~mv2.jpg" alt="Wellness Consultation" className="service-image" />
          <h2 className="service-title">Dr. Ava Life, Gynecologis</h2>
          <p>I'm Dr. Ava Life, your trusted Gynecologist specializing in women's health. From routine exams and contraception counseling to managing menopause symptoms and fertility issues, I provide comprehensive care tailored to your unique needs. Your reproductive health is my priority.</p>
          <p className="service-duration">1 hr</p>
          <p className="service-price">Negotiable</p>
          <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
        </div>

        <div className="service-item">
          <img src="https://static.wixstatic.com/media/2c41d97f244347558869f6ddb2d6e58a.jpg/v1/fill/w_290,h_194,fp_0.50_0.50,q_80,enc_auto/2c41d97f244347558869f6ddb2d6e58a.jpg" alt="Nutrition Session" className="service-image" />
          <h2 className="service-title">Dr. Sarah Strong, Orthopedic Surgeon</h2>
          <p>I'm Dr. Sarah Strong, your Orthopedic Surgeon specializing in musculoskeletal health. Whether you're recovering from a sports injury, arthritis, or considering joint replacement surgery, I provide personalized care and advanced surgical solutions.</p>
          <p className="service-duration">1 hr</p>
          <p className="service-price">3,000 Kenyan shillings</p>
          <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
        </div>

        <div className="service-item">
          <img src="https://static.wixstatic.com/media/11062b_844f73deeff248ff96d75e4622221659~mv2.jpg/v1/fill/w_290,h_194,fp_0.50_0.50,q_80,enc_auto/11062b_844f73deeff248ff96d75e4622221659~mv2.jpg" alt="Skincare Analysis" className="service-image" />
          <h2 className="service-title">Dr. Emily Wellness, General Practitioner (GP)</h2>
          <p>Hi, I'm Dr. Emily Wellness, your trusted General Practitioner. I specialize in comprehensive primary care, managing everything from common colds to chronic conditions like diabetes and hypertension. Whether you need preventive care, vaccinations, or treatment for acute illnesses, I'm here to provide personalized medical attention and guide you towards optimal health.</p>
          <p className="service-duration">Estimated Time: 1 hr</p>
          <p className="service-price">2,000 Kenyan shillings</p>
          <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
        </div>

        <div className="service-item">
          <img src="https://static.wixstatic.com/media/11062b_8238f9663ccb4d44bc34815c5b40364f~mv2.jpeg/v1/fill/w_290,h_194,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_8238f9663ccb4d44bc34815c5b40364f~mv2.jpeg" alt="Psychotherapy" className="service-image" />
          <h2 className="service-title">Dr. Leo Calm, Anesthesiologist</h2>
          <p>I'm Dr. Leo Calm, your Anesthesiologist ensuring comfort and safety during surgical procedures. I specialize in pain management and anesthesia administration, ensuring a smooth surgical experience and effective post-operative pain relief. Your well-being is in capable hands with me.</p>
          <p className="service-duration">Estimated Time: 1 hr</p>
          <p className="service-price">Price negotiable</p>
          <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
        </div>
      </section>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Confirm Appointment</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="popup-input"
            />
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleInputChange}
              className="popup-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="popup-input"
            />
            <button className="confirm-button" onClick={handleConfirmClick}>Confirm Appointment</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BookOnlinePage;
