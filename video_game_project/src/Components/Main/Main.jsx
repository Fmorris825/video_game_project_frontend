import GlobalSalesChart from "../GlobalSalesChart/GlobalSalesChart";
import SearchResults from "../SearchResults/SearchResults";
import TopRankedPublishers from "../TopRankedPublishers/TopRankedPublishers";

const Main = ({ allGames, query }) => {
  return (
    <div>
      Maynneee
      <GlobalSalesChart allGames={allGames} />
      <TopRankedPublishers allGames={allGames} />
      <SearchResults allGames={allGames} query={query} />
    </div>
  );
};

export default Main;
