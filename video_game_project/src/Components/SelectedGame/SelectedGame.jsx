import React, { useState } from "react";
import SelectedGameStats from "../SelectedGameStats/SelectedGameStats";

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
        <td colSpan={4}>
          <button onClick={toggleExpansion}>See Less</button>
        </td>
      </tr>
      <tr>
        <td colSpan={3}>Game Rank: {game.game_rank}</td>
        <td colSpan={3}>Global Sales: {game.globalsales}</td>
      </tr>
      <tr>
        <td>
          <b>N. American Sales:</b> {game.northamericasales}
        </td>
        <td>European Sales: {game.europesales}</td>
        <td>Japanese Sales: {game.japansales}</td>
        <td colSpan={3}>Other Sales: {game.othersales}</td>
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
        <td colSpan={4}>
          <button onClick={toggleExpansion}>See More</button>
        </td>
      </tr>
    </tbody>
  );
};

export default SelectedGame;
