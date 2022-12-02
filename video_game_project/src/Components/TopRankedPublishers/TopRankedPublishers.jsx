import Chart from "react-google-charts";

const TopRankedPublishers = ({ allGames }) => {
  let filteredGames = allGames.filter((game) => {
    if (game.game_rank <= 100) {
      return true;
    }
  });
  let top100Publishers = filteredGames.map((game) => game.publisher);
  let distinctPublishers = [...new Set(top100Publishers)];
  let publisherArrays = distinctPublishers.map((publisher) => {
    return [publisher, 0, "royalblue"];
  });
  for (let i = 0; i < distinctPublishers.length; i++) {
    filteredGames.map((game) => {
      if (game.publisher === distinctPublishers[i]) {
        publisherArrays[i][1] += 1;
      }
    });
  }

  const data = [
    ["Publishers", "Games in Top 100", { role: "style" }],
    ...publisherArrays,
  ];

  const options = {
    chart: {
      title: "Publishers with Top Ranked Games",
      subtitle: "Top 100 Ranked Games",
    },
    // legend: { position: "bottom" },
  };

  return (
    <div className="d-flex justify-content-center m-3 chart">
      <Chart
        chartType="Bar"
        width="80%"
        margin="auto"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default TopRankedPublishers;
