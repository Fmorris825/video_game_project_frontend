import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";

function App() {
  const [allGames, setAllGames] = useState([]);

  useEffect(() => {
    getAllGames();
  }, []);

  async function getAllGames() {
    const response = await axios.get("http://localhost:8080/all");
    setAllGames(response.data);
  }
  console.log(allGames);
  return (
    <div>
      {/* <Chart
        chartType="LineChart"
        data={[
          ["Year", "Global Sales"],
          allGames.map((game, index) => {
            return [game.year, game.globalsales];
          }),
        ]}
        width="400px"
        height="400px"
        options={{ legend: { position: "bottom" } }}
        legendToggle
      /> */}
      {allGames.filter((game, index) => {
        return;
      })}
    </div>
  );
}

export default App;
