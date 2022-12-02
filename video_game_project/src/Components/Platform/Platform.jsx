import React from "react";
import "./Platform.css";

const Platform = ({ platform, setSelectedPlatform }) => {
  function selectPlatform() {
    setSelectedPlatform(platform);
  }

  return (
    <div className="platform-button" onClick={selectPlatform}>
      {platform}
    </div>
  );
};

export default Platform;
