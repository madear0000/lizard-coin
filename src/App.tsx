import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import Shop from "./pages/Shop";
import "./styles/main.scss";

function App(): JSX.Element {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
