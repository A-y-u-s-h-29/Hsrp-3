import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";
import Order from "./components/Order";
import Contactus from "./components/Contactus";
import Installation from "./components/Installation";
import Support from "./components/Support";
import FAQ from "./components/FAQ";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
import RefundCancellation from "./components/RefundCancellation";
import Navbar2 from "./components/Navbar2";



// TEMP pages (create later if not ready)
const Orders = () => <div className="p-10">Orders Page</div>;

function App() {
  return (
    <Router>
      

      <Routes>
        <Route
  path="/"
  element={
    <>
      <Navbar />
      <Home />
    </>
  }
/>

        <Route path="/about" element={<>
        <Navbar2 />
        <About />
        </>} />
        
        <Route path="/orders" element={<>
        <Navbar2 />
        <Order /></>} />
        <Route path="/contactus" element={
          <>
        <Navbar2 /> 
        <Contactus />
        </>
        } />
        <Route path="/installation" element={<>
        <Navbar2 />
        <Installation />
        </>
        } />
        <Route path="/support" element={<>
        <Navbar2 />
        <Support />
        </>} />

        <Route path="/faq" element={<>
        <Navbar2 />
        <FAQ />
        </>
        } />
        <Route path="/privacy-policy" element={<>
        <Navbar2 />
        <PrivacyPolicy />
        </>
        } />
        <Route path="/terms-conditions" element={<>
        <Navbar2 />
        <TermsConditions />
        </>
        } />
        <Route path="/refund-cancellation" element={<>
        <Navbar2 />
        <RefundCancellation />
        </>
        } />

        <Route path="/booking" element={<>
        <Navbar2 />
        <Contact />
        </>
        } />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
