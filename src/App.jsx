import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Experience from "./components/Experiences/Experiences.jsx";
import Education from "./components/Education/Education.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Certificates from "./components/Certificates/Certificates.jsx";

import PrivacyPolicy from "./components/Privatepolicy/PrivacyPolicy.jsx";
import TermsConditions from "./components/Termsconditions/Termsconditions.jsx";

function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certificates />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Privacy Policy Page */}
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        {/* Terms & Conditions Page */}
        <Route
          path="/terms-conditions"
          element={<TermsConditions />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;