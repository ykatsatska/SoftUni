function easterCompetition(input) {
    let index = 0;
    let sweetBreadNumber = Number(input[index++]);

    let bakerCounter = 0;
    let currentBakerFinalScore = 0;
    let winner = "";
    let maxScore = 0;
          

    while (bakerCounter < sweetBreadNumber) {
        let name = input[index++];
        let currentScore = input[index++];

        while (currentScore !== "Stop"){     
            currentBakerFinalScore += Number(currentScore);
            currentScore = input[index++];
        }
        bakerCounter++;
        console.log(`${name} has ${currentBakerFinalScore} points.`);

        
        if (currentBakerFinalScore > maxScore){
            maxScore = currentBakerFinalScore;
            winner = name;
            console.log(`${name} is the new number 1!`);
        }
        currentBakerFinalScore = 0;  
    }
    console.log(`${winner} won competition with ${maxScore} points!`);
}
easterCompetition(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])
