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

  testTwoLists();

  return <div>We Be Chartin</div>;
};

export default TopRankedPublishers;
