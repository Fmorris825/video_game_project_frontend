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

  console.log("distinctPublishers", distinctPublishers);

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
