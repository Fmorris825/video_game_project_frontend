import React from "react";
import Platform from "../Platform/Platform";

const PlatformList = ({ platforms, selectedPlatform, setSelectedPlatform }) => {
  return platforms.map((platform) => {
    return (
      <div>
        <Platform
          platform={platform}
          selectedPlatform={selectedPlatform}
          setSelectedPlatform={setSelectedPlatform}
        />
      </div>
    );
  });
};

export default PlatformList;
