import Chart from "react-google-charts";

const GlobalSalesChart = ({ allGames }) => {
  let filteredGames = allGames.filter((game) => game.year >= 2013);
  let platforms = filteredGames.map((game) => game.platform);
  let distinctPlatforms = [...new Set(platforms)];
  let platformArrays = distinctPlatforms.map((platform) => {
    return [platform, 0, "royalblue"];
  });
  for (let i = 0; i < distinctPlatforms.length; i++) {
    filteredGames.map((game) => {
      if (game.platform === distinctPlatforms[i]) {
        platformArrays[i][1] += game.globalsales * 1000000;
      }
    });
  }

  const data = [
    ["Game Console", "Global Sales", { role: "style" }],
    ...platformArrays,
  ];

  const options = {
    chart: {
      title: "Number of Games Sold Globally by Console",
      subtitle: "Since 2013",
    },
  };

  return (
    <div className="d-flex justify-content-center m-3 chart">
      <Chart
        chartType="Bar"
        width="80%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default GlobalSalesChart;
