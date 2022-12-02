import React, { useState } from "react";
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
        publisherArrays[i].sort();
      }
    });
  }
  const data = [
    ["Publishers", "Games in Top 100", { role: "style" }],
    ...publisherArrays,
  ];

  // console.log(data);
  // console.log("distinctPublishers", distinctPublishers);

  // console.log("Games by Platform", gamesByPlatform);

  console.log("Publisher Array", publisherArrays);

  return (
    <div>
      <div className="platform-list">
        <PlatformList
          platforms={distinctPlatforms}
          setSelectedPlatform={setSelectedPlatform}
        />
      </div>
    </div>
  );
};

export default MostSuccessfulPublishers;
