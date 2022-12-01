import React, { useState } from "react";
import SelectedGameStats from "../SelectedGameStats/SelectedGameStats";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SelectedGame.css";

const SelectedGame = ({ game, index }) => {
  const [open, setOpen] = useState(false);

  function toggleExpansion() {
    setOpen(!open);
  }

  return open ? (
    <tbody>
      <tr key={index}>
        <td>{game.name}</td>
        <td>{game.platform}</td>
        <td>{game.year}</td>
        <td>{game.publisher}</td>
        <td>{game.genre}</td>
        <td>
          <button onClick={toggleExpansion}>See Less</button>
        </td>
      </tr>
      <tr>
        <td colSpan={6}>
          <div className="stats">
            <div className="stat_line">
              <div>
                <b>Game Rank:</b> {game.game_rank}
              </div>

              <div>
                <b>Global Sales:</b> {game.globalsales}
              </div>
            </div>
            <div className="stat_line">
              <div>
                <b>N. American Sales:</b> {game.northamericasales}
              </div>
              |
              <div>
                <b>European Sales:</b> {game.europesales}
              </div>
              |
              <div>
                <b>Japanese Sales:</b> {game.japansales}
              </div>
              |
              <div>
                <b>Other Sales:</b> {game.othersales}
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  ) : (
    <tbody>
      <tr key={index}>
        <td>{game.name}</td>
        <td>{game.platform}</td>
        <td>{game.year}</td>
        <td>{game.publisher}</td>
        <td>{game.genre}</td>
        <td>
          <button onClick={toggleExpansion}>See More</button>
        </td>
      </tr>
    </tbody>
  );
};

export default SelectedGame;
