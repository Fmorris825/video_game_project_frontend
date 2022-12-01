import Chart from "react-google-charts";

const TopRankedPublishers = ({ allGames }) => {
  function testTwoLists() {
    let publishers = [];
    let publisherOccurences = [];
    let thisPublisher;
    for (let i = 0; i < allGames.length; i++) {
      if (allGames[i].game_rank < 101) {
        if (!publishers.includes(allGames[i].publisher)) {
          publishers.push(allGames[i].publisher);
        }
      }
    }
    for (let i = 0; i < publishers.length; i++) {
      publisherOccurences.push(0);
      thisPublisher = publishers[i];
      for (let i2 = 0; i2 < allGames.length; i2++) {
        if (allGames[i2].game_rank < 101) {
          if (allGames[i2].publisher === thisPublisher) {
            publisherOccurences[i] += 1;
          }
        }
      }
    }
    for (let i = 0; i < publishers.length; i++) {
      console.log(`${publishers[i]}: ${publisherOccurences[i]} `);
    }
  }

  const data = [
    ["Publishers", "Games in Top 100"],
    ["Nintendo", 52],
    ["Activision", 14],
    ["Take-Two Interactive", 9],
    ["Sony", 8],
    ["EA", 5],
    ["Microsoft GS", 2],
    ["Atari", 1],
    ["SquareSoft", 1],
    ["Betheseda", 1],
    ["Sega", 1],
  ];

  const options = {
    chart: {
      title: "Publishers with Top Ranked Games",
      subtitle: "Top 100 Ranked Games",
    },
    legend: { position: "bottom" },
  };

  testTwoLists();

  return (
    <div className="d-flex justify-content-center">
      <Chart
        chartType="Bar"
        width="80%"
        height="400px"
        legendToggle
        data={data}
        options={options}
      />
    </div>
  );
};

export default TopRankedPublishers;
