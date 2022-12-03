import React, { useState } from "react";
import Chart from "react-google-charts";
import PlatformList from "../PlatformList/PlatformList";
import "./MostSuccessfulPublishers.css";

const MostSuccessfulPublishers = ({ allGames }) => {
  const [selectedPlatform, setSelectedPlatform] = useState("");

  let platforms = allGames.map((game) => game.platform);
  let distinctPlatforms = [...new Set(platforms)];

  let gamesByPlatform = allGames.filter((game) => {
    if (game.platform === selectedPlatform) {
      return true;
    }
  });
  let publishers = gamesByPlatform.map((game) => game.publisher);
  let distinctPublishers = [...new Set(publishers)];
  let publisherArrays = distinctPublishers.map((publisher) => {
    return [publisher, 0, "royalblue"];
  });
  for (let i = 0; i < distinctPublishers.length; i++) {
    gamesByPlatform.map((game) => {
      if (game.publisher === distinctPublishers[i]) {
        publisherArrays[i][1] += game.globalsales;
      }
    });
  }

  let salesByPublisher = publisherArrays.map((array) => array[1]);
  salesByPublisher.sort(function (a, b) {
    return b - a;
  });

  let sortedPublishers = [];
  sortedPublishers = salesByPublisher.map((sales) => {
    for (let i = 0; i < publisherArrays.length; i++) {
      if (
        publisherArrays[i][1] === sales &&
        !sortedPublishers.includes(publisherArrays[i][0])
      ) {
        return publisherArrays[i][0];
      }
    }
  });

  let topPublishersByConsole = [];
  for (let i = 0; i < 7; i++) {
    topPublishersByConsole.push([
      sortedPublishers[i],
      salesByPublisher[i],
      "royalblue",
    ]);
  }

  const data = [
    ["Publishers", `Games Sold (in millions)`, { role: "style" }],
    ...topPublishersByConsole,
  ];
  const options = {
    chart: {
      title: `Top 7 Publishers on ${selectedPlatform}`,
      subtitle: "Based on # of Games Sold Globally",
    },
  };

  return (
    <div>
      <div className="instruction-label">
        <h3>Select A Platform to See Its Most Successful Publishers</h3>
      </div>
      <div className="platform-list">
        <PlatformList
          platforms={distinctPlatforms}
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
        />
      </div>
      <div className="d-flex justify-content-center m-3 chart">
        <Chart
          chartType="Bar"
          width="80%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default MostSuccessfulPublishers;
