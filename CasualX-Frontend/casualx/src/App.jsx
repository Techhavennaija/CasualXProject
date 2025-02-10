import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SideNav from "./ui_components/Layouts/SideNav";
import Header from "./ui_components/Layouts/Header";
import MainContent from "./ui_components/Layouts/MainContent";
import Main from "./ui_components/Layouts/Main";
import RegistrationCard from "./ui_components/RegistrationCard";
import Games from "./ui_components/Contents/Games";
import Step0 from "./ui_components/Step0";
import Step1 from "./ui_components/Step1";
import Testimonials from "./ui_components/Contents/Testimonials";
import Blog from "./ui_components/Contents/Blog";
import Faqs from "./ui_components/Contents/Faqs";
import Events from "./ui_components/Contents/Events";
import HubPage from "./ui_components/Contents/HubPage";

function App() {
  const [count, setCount] = useState(0);

  const [isSideNavOpen, setIsSideNavOpen] = useState(true);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div className="global_container">
      <div className="global_wrapper min-h-screen">
        <SideNav isOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
        <Header isSideNavOpen={isSideNavOpen} />
        <MainContent isSideNavOpen={isSideNavOpen}>
          <Router>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/escort-client-card" element={<RegistrationCard />}/>
              <Route path="/escort-register" element={<Step0 />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/games" element={<Games />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/hub" element={<HubPage />} />
              <Route path="/events" element={<Events />} />
              <Route path="/blog-post" element={<Blog />} />
            </Routes>
          </Router>
        </MainContent>
      </div>
    </div>
  );
}

export default App;
