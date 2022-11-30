const TopRankedPublishers = ({ allGames }) => {
  // get list of publishers
  //get number of games by each publisher
  // total game rank
  //average it out
  // voila

  let nintendoGames = 0;
  let activisionGames = 0;
  let takeTwoInteractiveGames = 0;
  let sonyComputerEntertainmentGames = 0;
  let microsoftGameStudiosGames = 0;
  let ubisoftGames = 0;
  let electronicArtsGames = 0;
  let atariGames = 0;
  let squareSoftGames = 0;
  let bethesdaSoftworksGames = 0;
  let segaGames = 0;

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

  function listPublishers() {
    for (let i = 0; i < allGames.length; i++) {
      if (allGames[i].game_rank < 101) {
        if (allGames[i].publisher === "Nintendo") {
          nintendoGames += 1;
        }
        if (allGames[i].publisher === "Activision") {
          activisionGames += 1;
        }
        if (allGames[i].publisher === "Take-Two Interactive") {
          takeTwoInteractiveGames += 1;
        }
        if (allGames[i].publisher === "Sony Computer Entertainment") {
          sonyComputerEntertainmentGames += 1;
        }
        if (allGames[i].publisher === "Microsoft Game Studios") {
          microsoftGameStudiosGames += 1;
        }
        if (allGames[i].publisher === "Ubisoft") {
          ubisoftGames += 1;
        }
        if (allGames[i].publisher === "Electronic Arts") {
          electronicArtsGames += 1;
        }
        if (allGames[i].publisher === "Atari") {
          atariGames += 1;
        }
        if (allGames[i].publisher === "SquareSoft") {
          squareSoftGames += 1;
        }
        if (allGames[i].publisher === "Bethesda Softworks") {
          bethesdaSoftworksGames += 1;
        }
        if (allGames[i].publisher === "Sega") {
          segaGames += 1;
        }
      }
    }
  }
  // listPublishers();
  return <div>We Be Chartin</div>;
};

export default TopRankedPublishers;
