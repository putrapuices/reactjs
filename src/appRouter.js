import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "./components/Home/App";
import Contact from "./components/page/Contact";

const AppRouter = () => {
    return (
     <Router>
      <div>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/contact" element={<Contact/>} />
       </Routes>
      </div>
     </Router>
    );
   };


   export default AppRouter;