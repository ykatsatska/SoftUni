function tournamentOfChristmas(input) {
    let index = 0;
    let days = Number(input[index++]);

    let dayCounter = 0;
    let moneyForTheDay = 0;
    let winCounter = 0;
    let lostCounter = 0;
    let totalMoney = 0;
    let wonDaysCounter = 0;
    let lostDaysCounter = 0;

    while (dayCounter < days){
        let sport = input[index++];
        let result = "";

        if (sport === "Finish"){
            if (winCounter > lostCounter) {
                moneyForTheDay = moneyForTheDay * 1.10;
                wonDaysCounter++;
            } else {
                lostDaysCounter++;
            }
            dayCounter++;
            totalMoney += moneyForTheDay;
            moneyForTheDay = 0;
            winCounter = 0;
            lostCounter = 0
        } else {
            result = input[index++];

            if (result === "win"){
                winCounter++;
                moneyForTheDay += 20;
            } else {
                lostCounter++;
            }
        }
    }    
    
    if (wonDaysCounter > lostDaysCounter){
        totalMoney = totalMoney * 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}
tournamentOfChristmas(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])

