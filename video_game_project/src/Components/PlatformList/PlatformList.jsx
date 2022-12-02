import React from "react";
import Platform from "../Platform/Platform";

const PlatformList = ({ platforms, setSelectedPlatform }) => {
  return platforms.map((platform) => {
    return (
      <div>
        <Platform
          platform={platform}
          setSelectedPlatform={setSelectedPlatform}
        />
      </div>
    );
  });
};

export default PlatformList;
