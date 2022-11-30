import { all } from "axios";
import { Table, Button } from "react-bootstrap";
const SearchResults = ({ allGames, query }) => {
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
          {allGames.filter((game, index) => {
            if (game.name.includes(query)) {
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
