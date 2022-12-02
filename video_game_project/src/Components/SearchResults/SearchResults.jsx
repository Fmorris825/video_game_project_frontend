import React, { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import SelectedGame from "../SelectedGame/SelectedGame";

const SearchResults = ({ allGames, query }) => {
  const [filteredGames, setFilteredGames] = useState([]);

  let groupedGames = [];

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
  // console.log(filteredGames);

  // for (let i = 0; i < filteredGames.length; i++) {
  //   if (groupedGames.length === 0) {
  //     setGroupedGames([filteredGames[i]]);
  //   }
  //   for (let i2 = 0; (i2 = groupedGames.length); i2++) {
  //     if (
  //       !(
  //         groupedGames[i].name === filteredGames[i2] ||
  //         groupedGames[i].name === filteredGames[i2 - 1]
  //       )
  //     ) {
  //       setGroupedGames([...groupedGames, filteredGames[i]]);
  //     }
  //   }
  // }

  // filteredGames.map((parentGame) => {
  //   if (groupedGames.length > 0) {
  //     groupedGames.map((game) => {
  //       if (game.name != parentGame.name || groupedGames.length == 0) {
  //         console.log("I'm trying to add something new!");
  //         let newGameObject = {
  //           game_rank: parentGame.game_rank,
  //           name: parentGame.name,
  //           platforms: [parentGame.platform],
  //           year: parentGame.year,
  //           genre: parentGame.genre,
  //           publisher: parentGame.publisher,
  //           northamericasales: [parentGame.northamericasales],
  //           europesales: [parentGame.europesales],
  //           japansales: [parentGame.japansales],
  //           othersales: [parentGame.othersales],
  //           globalsales: [parentGame.globalsales],
  //         };
  //         groupedGames.push(newGameObject);
  //       } else {
  //         console.log("I'm trying to update something!");
  //         game.platforms.push(parentGame.platform);
  //         game.northamericasales.push(parentGame.northamericasales);
  //         game.europesales.push(parentGame.europesales);
  //         game.japansales.push(parentGame.japansales);
  //         game.othersales.push(parentGame.othersales);
  //         game.globalsales.push(parentGame.globalsales);
  //       }
  //     });
  //   } else {
  //     groupedGames.push({
  //       game_rank: parentGame.game_rank,
  //       name: parentGame.name,
  //       platforms: [parentGame.platform],
  //       year: parentGame.year,
  //       genre: parentGame.genre,
  //       publisher: parentGame.publisher,
  //       northamericasales: [parentGame.northamericasales],
  //       europesales: [parentGame.europesales],
  //       japansales: [parentGame.japansales],
  //       othersales: [parentGame.othersales],
  //       globalsales: [parentGame.globalsales],
  //     });
  //     console.log(groupedGames);
  //   }
  // });

  // console.log("groupedGames", groupedGames);

  useEffect(() => {
    filterGames();
  }, [query]);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Platform(s)</th>
            <th>Release Year</th>
            <th>Publisher</th>
            <th>Genre</th>
            <th></th>
          </tr>
        </thead>

        {filteredGames.map((game, index) => {
          {
            return (
              <SelectedGame
                game={game}
                index={index}
                filteredGames={filteredGames}
              />
            );
          }
        })}
      </Table>
    </Container>
  );
};

export default SearchResults;
