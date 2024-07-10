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
      const response = await fetch('https://zoe-afya-gie6.onrender.com/send-sms', {
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
  const handleCloseClick = ()=>{
    setShowPopup(false);
  };
  
  

  return (
    <div className="book-online-page">
      <header className="header">
        <h1 className="header-title">Our Services</h1>
      </header>

      <Navbar />  
      <section className="services-list">
        <div className="service-item">
          <img src="https://img.freepik.com/free-photo/portrait-african-american-doctor-looking-camera_482257-17645.jpg?size=626&ext=jpg&ga=GA1.1.862773339.1720550683&semt=ais_user" alt="Wellness Consultation" className="service-image" />
          <h2 className="service-title">Dr. Michael Alonso, Clinical Psychologist</h2>
          <p>I specialize in diagnosing and treating mental disorders. My approach includes providing psychotherapy and developing treatment plans for patients with anxiety, depression, and other mental health issues. I aim to help patients manage stress and improve their overall mental well-being through cognitive-behavioral therapy (CBT).</p>
          <p className="service-duration">1 hr</p>
          <p className="service-price">Negotiable</p>
          <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
        </div>

        <div className="service-item">
          <img src="https://img.freepik.com/free-photo/medium-shot-smiley-doctor-with-coat_23-2148814212.jpg?size=626&ext=jpg&ga=GA1.1.862773339.1720550683&semt=ais_user" alt="Nutrition Session" className="service-image" />
          <h2 className="service-title">Dr. Laura Bennett, Psychiatrist</h2>
          <p>I focus on diagnosing, treating, and preventing mental, emotional, and behavioral disorders. I combine medication management with psychotherapy to help patients manage conditions such as bipolar disorder, schizophrenia, and severe depression. My holistic approach ensures comprehensive mental health care.</p>
          <p className="service-duration">1 hr</p>
          <p className="service-price">3,000 Kenyan shillings</p>
          <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
        </div>

        <div className="service-item">
          <img src="https://img.freepik.com/free-photo/portrait-woman-working-as-medic-office-healthcare-clinic_482257-12248.jpg?ga=GA1.1.862773339.1720550683&semt=ais_hybrid" alt="Skincare Analysis" className="service-image" />
          <h2 className="service-title">Dr. Sarah Collins, Child and Adolescent Psychiatrist</h2>
          <p>I specialize in diagnosing and treating emotional and behavioral disorders in children and teenagers, including ADHD, anxiety, and mood disorders. My family-centered approach addresses not only the child's mental health but also the family dynamics that impact their well-being.</p>
          <p className="service-duration">Estimated Time: 1 hr</p>
          <p className="service-price">2,000 Kenyan shillings</p>
          <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
        </div>

        <div className="service-item">
          <img src="https://img.freepik.com/free-photo/medium-shot-doctor-with-laptop_23-2148999631.jpg?size=626&ext=jpg&ga=GA1.1.862773339.1720550683&semt=ais_user" alt="Psychotherapy" className="service-image" />
          <h2 className="service-title">Dr. James Davenport, Licensed Professional Counselor</h2>
          <p>I provide counseling services to individuals and groups, helping clients overcome emotional and psychological challenges through talk therapy and coping strategies. I specialize in trauma-informed care, working with survivors of abuse, veterans, and individuals with PTSD.</p>
          <p className="service-duration">Estimated Time: 1 hr</p>
          <p className="service-price">Price negotiable</p>
          <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
        </div>

        <div className="service-item">
          <img src="https://img.freepik.com/free-photo/full-shot-nurse-looking-radiography_23-2149633858.jpg?size=626&ext=jpg&ga=GA1.1.862773339.1720550683&semt=ais_user" alt="Psychotherapy" className="service-image" />
          <h2 className="service-title">Dr. Thomas Ivers, Neuropsychologist</h2>
          <p>I focus on understanding the relationship between the brain and behavior. I conduct neuropsychological assessments to diagnose cognitive deficits and neurological disorders. My treatment plans include cognitive rehabilitation and psychotherapy to help patients improve their cognitive functioning.</p>
          <p className="service-duration">Estimated Time: 1 hr</p>
          <p className="service-price">Price negotiable</p>
          <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
        </div>

        <div className="service-item">
          <img src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="Psychotherapy" className="service-image" />
          <h2 className="service-title">Dr. Emily Harris, Marriage and Family Therapist</h2>
          <p>I work with couples and families to improve communication, resolve conflicts, and strengthen relationships through therapeutic techniques. My focus is on building healthier relationships and addressing issues such as infidelity, communication breakdowns, and parenting conflicts.</p>
          <p className="service-duration">Estimated Time: 1 hr</p>
          <p className="service-price">Price negotiable</p>
          <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
        </div>

        <div className="service-item">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D" alt="Psychotherapy" className="service-image" />
          <h2 className="service-title">Dr. Robert Miller, Addiction Counselor</h2>
          <p>I specialize in helping individuals overcome substance abuse and addiction through counseling, support groups, and personalized recovery plans. My approach includes motivational interviewing, cognitive-behavioral therapy, and 12-step facilitation to help clients achieve and maintain sobriety.</p>
          <p className="service-duration">Estimated Time: 1 hr</p>
          <p className="service-price">Price negotiable</p>
          <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
        </div>

        <div className="service-item">
          <img src="https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D" alt="Psychotherapy" className="service-image" />
          <h2 className="service-title">Dr. Karen Jackson, Licensed Clinical Social Worker</h2>
          <p>I provide therapy and support services to individuals and families, helping them navigate emotional and mental health challenges. I also work in community settings to provide accessible mental health care to underserved populations and support those dealing with life transitions, chronic illness, and grief.</p>
          <p className="service-duration">Estimated Time: 1 hr</p>
          <p className="service-price">Price negotiable</p>
          <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
        </div>

        <div className="service-item">
          <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbmF8ZW58MHx8MHx8fDA%3D" alt="Psychotherapy" className="service-image" />
          <h2 className="service-title">Dr. Olivia Thompson, Geriatric Psychiatrist</h2>
          <p>I focus on the mental health care of elderly patients, addressing issues such as dementia, depression, and anxiety in older adults. I collaborate with other healthcare providers to ensure comprehensive care for my patients, providing memory care and treatment for late-life mental health conditions.





</p>
          <p className="service-duration">Estimated Time: 1 hr</p>
          <p className="service-price">Price negotiable</p>
          <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
        </div>
        {/* <div className="service-item">
          <img src="https://static.wixstatic.com/media/11062b_8238f9663ccb4d44bc34815c5b40364f~mv2.jpeg/v1/fill/w_290,h_194,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_8238f9663ccb4d44bc34815c5b40364f~mv2.jpeg" alt="Psychotherapy" className="service-image" />
          <h2 className="service-title">Dr. Leo Calm, Anesthesiologist</h2>
          <p>I'm Dr. Leo Calm, your Anesthesiologist ensuring comfort and safety during surgical procedures. I specialize in pain management and anesthesia administration, ensuring a smooth surgical experience and effective post-operative pain relief. Your well-being is in capable hands with me.</p>
          <p className="service-duration">Estimated Time: 1 hr</p>
          <p className="service-price">Price negotiable</p>
          <button className="book-now-button" onClick={handleBookNowClick}>Book Now</button>
        </div> */}
      </section>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={handleCloseClick}>X</button>
            <h2>Book Appointment</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="popup-input"
              required
            />
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleInputChange}
              className="popup-input"
              required
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