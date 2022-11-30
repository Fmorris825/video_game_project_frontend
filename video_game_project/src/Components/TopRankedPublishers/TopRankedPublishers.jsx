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

    // console.log(publishers);
    console.log(nintendoGames);
    console.log(activisionGames);
    console.log(takeTwoInteractiveGames);
    console.log(sonyComputerEntertainmentGames);
    console.log(microsoftGameStudiosGames);
    console.log(ubisoftGames);
    console.log(electronicArtsGames);
    console.log(atariGames);
    console.log(squareSoftGames);
    console.log(bethesdaSoftworksGames);
    console.log(segaGames);
  }
  listPublishers();
  return <div>We Be Chartin</div>;
};

export default TopRankedPublishers;
