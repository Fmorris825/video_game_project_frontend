import { Container } from "react-bootstrap";
import GlobalSalesChart from "../GlobalSalesChart/GlobalSalesChart";
import MostSuccessfulPublishers from "../MostSuccessfulPublishers/MostSuccessfulPublishers";
import SearchResults from "../SearchResults/SearchResults";
import TopRankedPublishers from "../TopRankedPublishers/TopRankedPublishers";
import "./Main.css";

const Main = ({ allGames, query, ref }) => {
  return (
    <div className="the-body">
      <GlobalSalesChart allGames={allGames} />
      <TopRankedPublishers allGames={allGames} />
      <MostSuccessfulPublishers allGames={allGames} />
      <SearchResults allGames={allGames} query={query} ref={ref} />
    </div>
  );
};

export default Main;
