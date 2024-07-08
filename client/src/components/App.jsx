import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./Index/welcome";
import HomePage from "./Home/home";
import Booking from "./Appointment/appointment";
import ContactPage from "./Contact/contact,";
import Chatbot from "./Chatbot/chatbot";
import SignUpPage from "./Signup/signup";
import LoginPage from "./Login/login";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/services" element={<Booking />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

    </Router>
    
  )
}

export default App
