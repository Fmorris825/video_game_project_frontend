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

  function getGlobalSalesByPlatform(){
  for(let i=0; i < allGames.length; i++){
    console.log(`${allGames[i].name} for the ${allGames[i].platform}`)
    if(allGames[i].platform === "2600"){
      globalSales2600 += allGames[i].globalsales
    }
    else if(allGames[i].platform === "3DS"){
      globalSales3DS += allGames[i].globalsales
    }
    else if(allGames[i].platform === "DC"){
      globalSalesDC += allGames[i].globalsales
      console.log(`globalSalesDC added ${allGames[i].name} for the ${allGames[i].platform} @ ${allGames[i].globalsales} and now equals ${globalSalesDC}////////////////////////////`)
    }
    else if(allGames[i].platform === "DS"){
      globalSalesDS += allGames[i].globalsales
    }
    else if(allGames[i].platform === "GB"){
      globalSalesGB += allGames[i].globalsales
    }
    else if(allGames[i].platform === "GBA"){
      globalSalesGBA += allGames[i].globalsales
    }
    else if(allGames[i].platform === "GC"){
      globalSalesGC += allGames[i].globalsales
    }
    else if(allGames[i].platform === "GEN"){
      globalSalesGEN += allGames[i].globalsales
    }
    else if(allGames[i].platform === "N64"){
      globalSalesN64 += allGames[i].globalsales
    }
    else if(allGames[i].platform === "NES"){
      globalSalesNES += allGames[i].globalsales
    }
    else if(allGames[i].platform === "PC"){
      globalSalesPC += allGames[i].globalsales
    }
    else if(allGames[i].platform === "PS"){
      globalSalesPS += allGames[i].globalsales
    }
    else if(allGames[i].platform === "PS2"){
      globalSalesPS2 += allGames[i].globalsales
    }
    else if(allGames[i].platform === "PS3"){
      globalSalesPS3 += allGames[i].globalsales
    }
    else if(allGames[i].platform === "PS4"){
      globalSalesPS4 += allGames[i].globalsales
    }
    else if(allGames[i].platform === "PSP"){
      globalSalesPSP += allGames[i].globalsales
    }
    else if(allGames[i].platform === "PSV"){
      globalSalesPSV += allGames[i].globalsales
      // console.log(`globalSalesPSV added ${allGames[i].name} @ ${allGames[i].globalsales} and now equals ${globalSalesPSV}`)
    }
    else if(allGames[i].platform === "SAT"){
      globalSalesSAT += allGames[i].globalsales
    }
    else if(allGames[i].platform === "SNES"){
      globalSalesSNES += allGames[i].globalsales
    }
    else if(allGames[i].platform === "Wii"){
      globalSalesWii += allGames[i].globalsales
    }
    else if(allGames[i].platform === "WiiU"){
      globalSalesWiiU += allGames[i].globalsales
    }
    else if(allGames[i].platform === "X360"){
      globalSalesX360 += allGames[i].globalsales
    }
    else if(allGames[i].platform === "XB"){
      globalSalesXB += allGames[i].globalsales
    }
    else if(allGames[i].platform === "XOne"){
      globalSalesXOne += allGames[i].globalsales
    }
  }
}

  getGlobalSalesByPlatform()
  console.log(`DC global sales = ${globalSalesDC}`)
  // console.log(allGames[0].platform)



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
      {/* {allGames.filter((game, index) => {
        return;
      })} */}
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
