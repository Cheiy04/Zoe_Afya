import React from 'react';
import './home2.css'
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

function HomePage() {
    return (
        <div className="home-page">
        
        <Navbar />
        <header className="hero-section">
          <h1 className="hero-title">Your Gateway to Optimal Health</h1>
          <p className="hero-subtitle">Seamlessly connect with top-tier doctors, schedule services with ease, and prioritize your well-being, all while maintaining the highest standards of privacy. Experience a holistic approach to healthcare that supports both your physical and mental health needs.</p>
          <button className="get-started-button">Get Started</button>
        </header>
  
        <section className="feature-section">
          <div className="feature-item">
            <h2 className="feature-title">At the Heart of our Platform</h2>
            <p className="feature-description">We are committed to revolutionizing Mental Health Care. By seamlessly connecting patients with certified Professionals, we aim to break down barriers, reduce stigma, and provide accessible, personalized medical support.</p>
          </div>
          <div className="feature-item">
            <h2 className="feature-title">Your All-in-One Health Portal</h2>
            <p className="feature-description">Effortlessly Monitor Progress, Connect with Specialists, and Communicate Securely – Everything for Your Health, Together in One Place.</p>
          </div>
          <div className="feature-item">
            <h2 className="feature-title">Empowering Patients, Transforming Lives</h2>
          </div>
          <div className="feature-item">
            <h2 className="feature-title">Connect with Specialists</h2>
            <p className="feature-description">Pellentesque vel pulvinar diam, nec gravida ligula. Cras nunc arcu, lobortis in ultricies in, vehicula ac odio. Pellentesque volutpat ex ante, nec accumsan</p>
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
          <h2 className="testimonials-title">What our Clients Say</h2>
          <div className="testimonial-item">
            <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl lorem, finibus vel commodo in, varius a ligula. Nullam ac lorem eget est rutrum vestibulum. In hac habitasse platea dictumst.</p>
            <p className="testimonial-author">Alexa Young, Lagos</p>
          </div>
          <div className="testimonial-item">
            <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl lorem, finibus vel commodo in, varius a ligula. Nullam ac lorem eget est rutrum vestibulum. In hac habitasse platea dictumst.</p>
            <p className="testimonial-author">Jani James, Nairobi</p>
          </div>
          <div className="testimonial-item">
            <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl lorem, finibus vel commodo in, varius a ligula. Nullam ac lorem eget est rutrum vestibulum. In hac habitasse platea dictumst.</p>
            <p className="testimonial-author">Casey Bruno, NY</p>
          </div>
        </section>
  
        <Footer />
      </div>
    );
  };
  
  export default HomePage;