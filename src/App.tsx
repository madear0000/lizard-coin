import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import Tasks from "./pages/Tasks";
import "./styles/main.scss";

function App(): JSX.Element {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
