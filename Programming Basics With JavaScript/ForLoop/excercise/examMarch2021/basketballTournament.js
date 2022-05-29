function basketballTournament(input) {
    let index = 0;
    let command = input[index++];
    let gameCounter = 0;
    let winCounter = 0;
    let lostCounter = 0;
    let totalGames = 0;

    while (command !== "End of tournaments") {
        let tournamentName = command;
        let numberOfGames = Number(input[index++]);

        for (let i = 0; i < numberOfGames; i++){
        gameCounter++;
        let pointsWon = Number(input[index++]);
        let pointsLost = Number(input[index++]);

            if (pointsWon > pointsLost){
                winCounter++;
                console.log(`Game ${gameCounter} of tournament ${tournamentName}: win with ${pointsWon - pointsLost} points.`);
            }  else if (pointsLost > pointsWon) {
                lostCounter++;
                console.log(`Game ${gameCounter} of tournament ${tournamentName}: lost with ${pointsLost - pointsWon} points.`);
            }
        }
        totalGames += gameCounter;
        gameCounter = 0;
        command = input[index++];
    }  
    console.log(`${(winCounter / totalGames * 100).toFixed(2)}% matches win`);
    console.log(`${(lostCounter / totalGames * 100).toFixed(2)}% matches lost`);
}   
basketballTournament(["Ballers",
"3",
"87",
"63",
"56",
"65",
"75",
"64",
"Sharks",
"4",
"64",
"76",
"65",
"86",
"68",
"99",
"45",
"78",
"End of tournaments"])
