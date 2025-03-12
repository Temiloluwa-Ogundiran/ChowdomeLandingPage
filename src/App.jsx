import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";

//pages
import Home from "./pages/Home";
import Error from "./pages/Error";

import About from "./pages/About";
import Vendor from "./pages/Vendor";

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/vendor" element={<Vendor />} />
            <Route exact path="/*" element={<Error />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
