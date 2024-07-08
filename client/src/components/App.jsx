import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./Index/welcome";
import HomePage from "./Home/home";
import Booking from "./Appointment/appointment";
import ContactPage from "./Contact/contact,";
import Chatbot from "./Chatbot/chatbot";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/services" element={<Booking />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

    </Router>
    
  )
}

export default App
