import React, { useState, useEffect } from "react";
import "./Platform.css";

const Platform = ({ platform, selectedPlatform, setSelectedPlatform }) => {
  const [activeStatus, setActiveStatus] = useState("inactive");

  function handleSelection() {
    setSelectedPlatform(platform);
    setActiveStatus("active");
  }

  useEffect(() => {
    if (selectedPlatform != platform) {
      setActiveStatus("inactive");
    } else {
      setActiveStatus("active");
    }
  }, [selectedPlatform]);

  return (
    <div className={activeStatus} onClick={handleSelection}>
      {platform}
    </div>
  );
};

export default Platform;
