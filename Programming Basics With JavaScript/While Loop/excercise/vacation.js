function vacation(input) {
    let index = 0;
    let moneyNeeded = Number(input[index]);
    index++;
    let moneyAvailable = Number(input[index]);
    index++;
    let spendConter = 0;
    let dayCounter = 0;
    let isPossibleSaveMoney = true;

    while (moneyAvailable < moneyNeeded) {
        let operation = input[index];
        index++;
        let amount = Number(input[index]);
        index++;
        dayCounter++;

        if (operation === "spend") {
            spendConter++;
            moneyAvailable -= amount;
            if (moneyAvailable < 0) {
                moneyAvailable = 0;
            }
        } else {
            spendConter = 0;
            moneyAvailable += amount;
        }
        if (spendConter === 5) {
            isPossibleSaveMoney = false;
            console.log("You can't save the money.");
            console.log(dayCounter);
            break;
        }
    }
    if (isPossibleSaveMoney){
        console.log(`You saved the money for ${dayCounter} days.`);

    }
}
vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])
