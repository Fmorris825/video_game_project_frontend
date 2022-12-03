import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Chart from "react-google-charts";
import "./SalesbyConsoleModalChart.css";

const SalesbyConsoleModalChart = ({ game, filteredGames }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const gameForChart = filteredGames.filter((fGame) => {
    if (game.name == fGame.name) {
      return fGame;
    } else {
      return false;
    }
  });

  let platforms = gameForChart.map((game) => game.platform);
  let platformArrays = gameForChart.map((game) => {
    return [game.platform, game.globalsales * 1000000, "royalblue"];
  });
  console.log(platformArrays);

  const data = [
    ["Game Sales by Platform", "Global Sales", { role: "style" }],
    ...platformArrays,
  ];

  const options = {
    chart: {
      title: "Total Games Sold Globally",
      subtitle: "On Each Console ",
    },
  };
  return (
    <>
      <button onClick={handleShow}>
        <b>Sales By Console</b>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="top-label">{game.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SalesbyConsoleModalChart;
