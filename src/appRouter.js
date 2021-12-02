import React from "react";
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import App from "./components/Home/App";
import Contact from "./components/page/Contact";

const AppRouter = () => {
    return (
     <Router>
      <div>
          <nav>
              <ul>
                  <li><Link to = "/">Home</Link></li>
                  <li><Link to = "/halaman-kontak">Kontak</Link></li>
                  
              </ul>
          </nav>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/halaman-kontak" element={<Contact/>} />
       </Routes>
      </div>
     </Router>
    );
   };


   export default AppRouter;