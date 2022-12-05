import axios, { all } from "axios";
import React, { useState, useEffect, useRef } from "react";

import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [allGames, setAllGames] = useState([]);
  const [query, setQuery] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    getAllGames();
  }, []);

  async function getAllGames() {
    const response = await axios.get("http://localhost:8080/all");
    setAllGames(response.data);
  }
  
  return (
    <div>
      <NavBar setQuery={setQuery} setAllGames={setAllGames} />
      <Main allGames={allGames} query={query} />
    </div>
  );
}

export default App;
