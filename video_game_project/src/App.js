import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import NavBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

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

  let globalSales2600 = 0;
  let globalSales3DS = 0;
  let globalSalesDC = 0;
  let globalSalesDS = 0;
  let globalSalesGB = 0;
  let globalSalesGBA = 0;
  let globalSalesGC = 0;
  let globalSalesGEN = 0;
  let globalSalesN64 = 0;
  let globalSalesNES = 0;
  let globalSalesPC = 0;
  let globalSalesPS = 0;
  let globalSalesPS2 = 0;
  let globalSalesPS3 = 0;
  let globalSalesPS4 = 0;
  let globalSalesPSP = 0;
  let globalSalesPSV = 0;
  let globalSalesSAT = 0;
  let globalSalesSNES = 0;
  let globalSalesWii = 0;
  let globalSalesWiiU = 0;
  let globalSalesX360 = 0;
  let globalSalesXB = 0;
  let globalSalesXOne = 0;
  let globalSalesTG16 = 0;
  let globalSalesSCD = 0;
  let globalSalesWS = 0;
  let globalSalesNG = 0;

  function getGlobalSalesByPlatform() {
    for (let i = 0; i < allGames.length; i++) {
      if (allGames[i].platform === "2600") {
        globalSales2600 += allGames[i].globalsales;
      } else if (allGames[i].platform === "3DS") {
        globalSales3DS += allGames[i].globalsales;
      } else if (allGames[i].platform === "DC") {
        globalSalesDC += allGames[i].globalsales;
      } else if (allGames[i].platform === "DS") {
        globalSalesDS += allGames[i].globalsales;
      } else if (allGames[i].platform === "GB") {
        globalSalesGB += allGames[i].globalsales;
      } else if (allGames[i].platform === "GBA") {
        globalSalesGBA += allGames[i].globalsales;
      } else if (allGames[i].platform === "GC") {
        globalSalesGC += allGames[i].globalsales;
      } else if (allGames[i].platform === "GEN") {
        globalSalesGEN += allGames[i].globalsales;
      } else if (allGames[i].platform === "N64") {
        globalSalesN64 += allGames[i].globalsales;
      } else if (allGames[i].platform === "NES") {
        globalSalesNES += allGames[i].globalsales;
      } else if (allGames[i].platform === "PC") {
        globalSalesPC += allGames[i].globalsales;
      } else if (allGames[i].platform === "PS") {
        globalSalesPS += allGames[i].globalsales;
      } else if (allGames[i].platform === "PS2") {
        globalSalesPS2 += allGames[i].globalsales;
      } else if (allGames[i].platform === "PS3") {
        globalSalesPS3 += allGames[i].globalsales;
      } else if (allGames[i].platform === "PS4") {
        globalSalesPS4 += allGames[i].globalsales;
      } else if (allGames[i].platform === "PSP") {
        globalSalesPSP += allGames[i].globalsales;
      } else if (allGames[i].platform === "PSV") {
        globalSalesPSV += allGames[i].globalsales;
      } else if (allGames[i].platform === "SAT") {
        globalSalesSAT += allGames[i].globalsales;
      } else if (allGames[i].platform === "SNES") {
        globalSalesSNES += allGames[i].globalsales;
      } else if (allGames[i].platform === "Wii") {
        globalSalesWii += allGames[i].globalsales;
      } else if (allGames[i].platform === "WiiU") {
        globalSalesWiiU += allGames[i].globalsales;
      } else if (allGames[i].platform === "X360") {
        globalSalesX360 += allGames[i].globalsales;
      } else if (allGames[i].platform === "XB") {
        globalSalesXB += allGames[i].globalsales;
      } else if (allGames[i].platform === "XOne") {
        globalSalesXOne += allGames[i].globalsales;
      } else if (allGames[i].platform === "TG16") {
        globalSalesTG16 += allGames[i].globalsales;
      } else if (allGames[i].platform === "SCD") {
        globalSalesSCD += allGames[i].globalsales;
      } else if (allGames[i].platform === "WS") {
        globalSalesWS += allGames[i].globalsales;
      } else if (allGames[i].platform === "NG") {
        globalSalesNG += allGames[i].globalsales;
      }
    }
  }

  getGlobalSalesByPlatform();

  const data = [
    ["Game Console", "Global Sales"],
    ["PS4", globalSalesPS4],
    ["XOne", globalSalesXOne],
    ["3DS", globalSales3DS],
    ["PS3", globalSalesPS3],
    ["X360", globalSalesX360],
    ["wiiU", globalSalesWiiU],
    ["PC", globalSalesPC],
    ["PSV", globalSalesPSV],
    ["Wii", globalSalesWii],
  ];

  const options = {
    chart: {
      title: "Global Sales",
      subtitlr: "of games",
      legend: { position: "bottom" },
    },
  };

  return (
    <div>
      <NavBar />
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        // legendToggle
        data={data}
        options={options}
      />
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
