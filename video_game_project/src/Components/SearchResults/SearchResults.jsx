import { all } from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import SelectedGame from "../SelectedGame/SelectedGame";

const SearchResults = ({ allGames, query }) => {
  const [filteredGames, setFilteredGames] = useState([]);

  function filterGames() {
    let games;
    games = allGames.filter((game) => {
      if (
        game.name.toLowerCase().includes(query.toLowerCase()) ||
        game.platform.toLowerCase().includes(query.toLowerCase()) ||
        game.year == query ||
        game.genre.toLowerCase().includes(query.toLowerCase()) ||
        game.publisher.toLowerCase().includes(query.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
    setFilteredGames(games);
  }

  useEffect(() => {
    filterGames();
  }, [query]);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Platform</th>
            <th>Release Year</th>
            <th>Publisher</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>

        {filteredGames.map((game, index) => {
          {
            return <SelectedGame game={game} index={index} />;
          }
        })}
      </Table>
    </Container>
  );
};

export default SearchResults;
