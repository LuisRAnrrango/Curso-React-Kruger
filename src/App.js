import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const footerInfo = {
    name: "Luis",
    //contact: +593993273984,
    // email: "luisitoylag@gmail.com",
  };
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer {...footerInfo}></Footer>
    </Router>
  );
};

export default App;
