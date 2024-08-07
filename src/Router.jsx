
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route , useLocation} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import SubServices from "./pages/SubServices";
import SingleProjectPage from "./pages/SingleProjectPage";

function ScrollToTop() {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  } , [pathname]);

  return null;
}

function Routers() {

  return (
    <div className="overflow-x-clip">
      <Router>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<SubServices />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/:id" element={<SingleProjectPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default Routers;
