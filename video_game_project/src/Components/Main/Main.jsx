import { Container } from "react-bootstrap";
import GlobalSalesChart from "../GlobalSalesChart/GlobalSalesChart";
import MostSuccessfulPublishers from "../MostSuccessfulPublishers/MostSuccessfulPublishers";
import SearchResults from "../SearchResults/SearchResults";
import TopRankedPublishers from "../TopRankedPublishers/TopRankedPublishers";

const Main = ({ allGames, query }) => {
  return (
    <div>
      <GlobalSalesChart allGames={allGames} />
      <TopRankedPublishers allGames={allGames} />
      <MostSuccessfulPublishers allGames={allGames} />
      <SearchResults allGames={allGames} query={query} />
    </div>
  );
};

export default Main;
