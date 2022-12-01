import Chart from "react-google-charts";

const TopRankedPublishers = ({ allGames }) => {
  let filteredGames = allGames.filter((game) => {
    if (game.game_rank <= 100) {
      return true;
    }
  });
  let top100Publishers = filteredGames.map((game) => game.publisher);
  console.log("top100Publishers", top100Publishers);
  let distinctPublishers = [...new Set(top100Publishers)];
  console.log("distinctPublishers", distinctPublishers);
  let publisherArrays = distinctPublishers.map((publisher) => {
    return [publisher, 0, "royalblue"];
  });
  console.log("publisherArrays", publisherArrays);
  for (let i = 0; i < distinctPublishers.length; i++) {
    filteredGames.map((game) => {
      if (game.publisher === distinctPublishers[i]) {
        publisherArrays[i][1] += 1;
      }
    });
  }

  // function testTwoLists() {
  //   let publishers = [];
  //   let publisherOccurences = [];
  //   let thisPublisher;
  //   for (let i = 0; i < allGames.length; i++) {
  //     if (allGames[i].game_rank < 101) {
  //       if (!publishers.includes(allGames[i].publisher)) {
  //         publishers.push(allGames[i].publisher);
  //       }
  //     }
  //   }
  //   for (let i = 0; i < publishers.length; i++) {
  //     publisherOccurences.push(0);
  //     thisPublisher = publishers[i];
  //     for (let i2 = 0; i2 < allGames.length; i2++) {
  //       if (allGames[i2].game_rank < 101) {
  //         if (allGames[i2].publisher === thisPublisher) {
  //           publisherOccurences[i] += 1;
  //         }
  //       }
  //     }
  //   }
  // }

  const data = [["Publishers", { role: "style" }], ...publisherArrays];

  const options = {
    chart: {
      title: "Publishers with Top Ranked Games",
      subtitle: "Top 100 Ranked Games",
    },
    // legend: { position: "bottom" },
  };

  // testTwoLists();

  return (
    <div className="d-flex justify-content-center">
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
