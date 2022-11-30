import GlobalSalesChart from "../GlobalSalesChart/GlobalSalesChart";
import GlobalSales from "../GlobalSalesChart/GlobalSalesChart";
import SearchResults from "../SearchResults/SearchResults";
import UndeterminedChart from "../UndeterminedChart/UndetermindChart";

const Main = ({ allGames, query }) => {
  return (
    <div>
      Maynneee
      <GlobalSalesChart allGames={allGames} />
      <UndeterminedChart />
      <SearchResults allGames={allGames} query={query} />
    </div>
  );
};

export default Main;
