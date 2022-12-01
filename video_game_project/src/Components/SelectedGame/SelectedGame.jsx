import SelectedGameStats from "../SelectedGameStats/SelectedGameStats";

const SelectedGame = ({ game, index }) => {
  return (
    <tbody>
      <tr key={index}>
        <td>{game.name}</td>
        <td>{game.platform}</td>
        <td>{game.year}</td>
        <td>{game.publisher}</td>
      </tr>
      <tr>
        <td colSpan={4}>
          <SelectedGameStats game={game} />
        </td>
      </tr>
    </tbody>
  );
};

export default SelectedGame;
