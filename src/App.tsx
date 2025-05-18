import React from "react";
import { useState } from "react";
import List from "./components/list";
import NavbarComponent from "./components/navbar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <h1>Job Chaser</h1>
      <NavbarComponent
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <List searchQuery={searchQuery} />
    </div>
  );
}

export default App;
