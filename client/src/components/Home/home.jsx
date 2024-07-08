import React from 'react';
import './home2.css'
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
// Import required images
import first_img from '../../assets/images/first_img.png'
import doctor_1 from '../../assets/images/doctor_1.jpg'
import doctor_2 from '../../assets/images/doctor_2.jpg'
import doctor_3 from '../../assets/images/doctor_3.jpg'
import doctor_4 from '../../assets/images/doctor_4.jpg'
import doctor_5 from '../../assets/images/doctor_5.jpg'
import doctor_6 from '../../assets/images/doctor_6.jpg'



function HomePage() {
    return (
        <div className="home-page">
        
        <Navbar />
        <header className="hero-section">
          <h1 className="hero-title">Your Gateway to Optimal Health</h1>
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-subtitle">Seamlessly connect with top-tier doctors, schedule services with ease, and prioritize your well-being, all while maintaining the highest standards of privacy. Experience a holistic approach to healthcare that supports both your physical and mental health needs.</p>
            </div>
            <div className="hero-image">
              {/* Add your image or illustration here */}
              <img src={first_img} alt="Healthcare illustration" />
            </div>
          </div>
          <button className="get-started-button btn-primary">Get Started</button>
        </header>
  
        <section className="feature-section">
          <div className="feature-item feature-reverse">
            <div className="feature-content">
              <h2 className="feature-title">At the Heart of our Platform</h2>
              <p className="feature-description">We are committed to revolutionizing Mental Health Care. By seamlessly connecting patients with certified Professionals, we aim to break down barriers, reduce stigma, and provide accessible, personalized medical support. ZoAfya ensures that every patient receives the empathy, care, and expertise they need to navigate their health journey effectively.</p>
            </div>
            <img src={doctor_1} alt="Feature 1" className="feature-image" />
          </div>
          <div className="feature-item">
            <div className="feature-content">
              <h2 className="feature-title">Your All-in-One Health Portal</h2>
              <p className="feature-description">ZoAfya is your comprehensive health management platform, designed for flexibility and accessibility. Our portal allows you to effortlessly schedule appointments, and access medical services from anywhere at any time. With ZoAfya, you are exposed to a wide array of medical specialists, from primary care doctors to highly specialized consultants. This seamless integration ensures that you can easily find and connect with the right healthcare professionals to meet your unique needs, making healthcare more convenient and tailored to your lifestyle.</p>
            </div>
            <img src={doctor_2} alt="Feature 2" className="feature-image" />
          </div>
          <div className="feature-item feature-reverse">
            <div className="feature-content">
              <h2 className="feature-title">Empowering Patients, Transforming Lives</h2>
              <p className="feature-description">At ZoAfya, we empower patients by providing easy access to a network of dedicated healthcare professionals across various specialties. Our platform transforms lives by offering personalized care solutions tailored to individual needs, from chronic disease management to preventive care to secure and private mental health care. ZoAfya's approach guarantees that you receive the right support and guidance, helping you achieve better health outcomes and a higher quality of life.</p>
            </div>
            <img src={doctor_3} alt="Feature 3" className="feature-image" />
          </div>
        </section>
  
        <section className="services-section">
          <div className="service-item">
            <img src="https://static.wixstatic.com/media/11062b_83aaff14331c49a4b0f9e487e8452043~mv2.jpeg" alt="Service" className="service-image" />
            <h3 className="service-title">Lorem</h3>
            <p className="service-description">Describe your service here. Pellentesque vel pulvinar diam, nec gravida ligula. Cras nunc arcu, lobortis in ultricies in, vehicula ac odio. Pellentesque volutpat ex ante, nec accumsan.</p>
            <button className="chat-now-button">Chat Now</button>
          </div>
          <div className="service-item">
            <img src="https://static.wixstatic.com/media/11062b_87a54eeeb7bf47cf87c40db95f2ee479~mv2.jpg" alt="Service" className="service-image" />
            <h3 className="service-title">Lorem</h3>
            <p className="service-description">Describe your service here. Pellentesque vel pulvinar diam, nec gravida ligula. Cras nunc arcu, lobortis in ultricies in, vehicula ac odio. Pellentesque volutpat ex ante, nec accumsan.</p>
            <button className="chat-now-button">Chat Now</button>
          </div>
          <div className="service-item">
            <img src="https://static.wixstatic.com/media/11062b_51d6cb9828a04eb88ce21ba4e443a1f3~mv2.jpg" alt="Service" className="service-image" />
            <h3 className="service-title">Lorem</h3>
            <p className="service-description">Describe your service here. Pellentesque vel pulvinar diam, nec gravida ligula. Cras nunc arcu, lobortis in ultricies in, vehicula ac odio. Pellentesque volutpat ex ante, nec accumsan.</p>
            <button className="chat-now-button">Chat Now</button>
          </div>
        </section>
  
        <section className="testimonials-section">
          <h2 className="testimonials-title">What Our Clients Say</h2>
          
          div
          <div className="testimonial-item">
            <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww" alt="Alexa Young" className="testimonial-image" />
            <p className="testimonial-text">
              "Struggling with anxiety and depression, I found it hard to get the right help until I discovered ZoAfya. The platform connected me with a compassionate therapist who understood my challenges. Through regular sessions, I regained my confidence and developed effective coping strategies. ZoAfya made mental health support accessible and tailored to my needs, and I'm finally feeling hopeful about the future."
            </p>
            <p className="testimonial-author">Alexa Young
            <p><strong>Lagos, Nigeria</strong></p></p>
          </div>
          
          <div className="testimonial-item">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Jani James" className="testimonial-image" />
            <p className="testimonial-text">
              "When I was diagnosed with breast cancer, I felt overwhelmed and lost. ZoAfya was a game-changer for me. It matched me with a specialized oncologist who provided expert care and guided me through every step of my treatment. The seamless communication and easy access to my doctor through ZoAfya gave me peace of mind and a strong support system. Thanks to ZoAfya, I'm now in remission and feeling stronger every day."
            </p>
            <p className="testimonial-author">Jani James
            <p><strong>Nairobi, Kenya</strong></p></p>
          </div>
          
          <div className="testimonial-item">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="Casey Bruno" className="testimonial-image" />
            <p className="testimonial-text">
              "After my surgery, I needed professional home nursing care for my recovery. ZoAfya connected me with a qualified nurse who provided exceptional care and support at my home. From managing my medication to assisting with daily activities, the nurse ensured my comfort and well-being throughout the healing process. ZoAfya’s efficient service and dedicated healthcare professionals made my recovery smooth and stress-free."
            </p>
            <p className="testimonial-author">Casey Bruno
            <p><strong>Kigali, Rwanda</strong></p></p>
          </div>
        </section>
  
        <Footer />
      </div>
    );
  };
  
  export default HomePage;