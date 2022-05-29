function tennisRanklist(input){
    let index = 0;
    let tournaments = Number(input[index]);
    index++;
    let initialPoints = Number(input[index]);
    index++;
    let earnedPoints = 0;
    let wins = 0;

    for(let i = 0; i < tournaments; i++){
        let stage = input[index];
        index++;

        switch (stage){
            case "W": 
            earnedPoints += 2000; 
            wins++;
            break;
            case "F": earnedPoints += 1200; break;
            case "SF": earnedPoints += 720; break;
        }
    }
    let finalPoints = initialPoints + earnedPoints;
    let averagePoints = earnedPoints / tournaments;
    let winProcent = wins / tournaments * 100;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(winProcent.toFixed(2) + "%");
}
tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


