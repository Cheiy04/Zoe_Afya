import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WelcomePage from "./Index/welcome";


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />

      </Routes>

    </Router>
    
  )
}

export default App
