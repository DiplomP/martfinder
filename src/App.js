import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Menu1 from "./pages/Menu1";
import About from "./pages/About";
import About1 from "./pages/About1";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu1" element={<Menu1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/about1" element={<About1 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;