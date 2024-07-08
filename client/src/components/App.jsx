import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./Index/welcome";
import HomePage from "./Home/home";
import Booking from "./Appointment/appointment";
// import Chatbot from "./Chatbot/ChatBot";
import Chatbot from "./Chatbot/chatbot";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<Booking />} />
        <Route path="/chatbot" element={<Chatbot />} /> {/* Add the route */}

      </Routes>

    </Router>
    
  )
}

export default App



// src/App.jsx

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import WelcomePage from './components/Index/welcome';
// import HomePage from './components/Home/home';
// import Booking from './components/Appointment/appointment';
// // import Chatbot from './components/Chatbot/Chatbot'; // Import the Chatbot component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<WelcomePage />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/services" element={<Booking />} />
//         <Route path="/chatbot" element={<Chatbot />} /> {/* Add the route */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

