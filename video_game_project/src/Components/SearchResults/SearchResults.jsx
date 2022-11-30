import { all } from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
const SearchResults = ({ allGames, query }) => {
  const [filteredGames, setFilteredGames] = useState([]);

  function filterGames() {
    let games;
    games = allGames.filter((game) => {
      if (
        game.name.includes(query) ||
        game.platform.includes(query) ||
        game.year == query ||
        game.genre.includes(query) ||
        game.publisher.includes(query)
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
    <div>
      Search dat shizzz
      <Table striped>
        <thead>
          <tr>
            <th>Title</th>
            <th>Platform</th>
            <th>Release Year</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {filteredGames.map((game, index) => {
            {
              return (
                <tr key={index}>
                  <td>{game.name}</td>
                  <td>{game.platform}</td>
                  <td>{game.year}</td>
                  <td>{game.publisher}</td>
                  <td>
                    <Button>View Stats</Button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default SearchResults;
