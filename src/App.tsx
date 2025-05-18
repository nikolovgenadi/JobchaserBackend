import React from "react";
import { useState } from "react";
import List from "./components/list";
import NavbarComponent from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <h1>Job Chaser</h1>
      <NavbarComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Routes>
        <Route path="/" element={<List searchQuery={searchQuery} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
