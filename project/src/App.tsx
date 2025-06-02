import React, { useState } from "react";
import List from "./components/list";
import NavbarComponent from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./main.css";
import FilterCheckboxes from "./redux/filterCheckboxes";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <h1>Job Chaser</h1>
      <NavbarComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <FilterCheckboxes />
      <Routes>
        <Route path="/" element={<List searchQuery={searchQuery} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
