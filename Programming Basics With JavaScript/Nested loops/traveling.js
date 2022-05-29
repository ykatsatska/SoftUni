function traveling(input) {
    let index = 0;
    let command = input[index];
    index++;
    let currentSavings = 0;

    while (command !== "End") {
        let destination = command;
        let budget = Number(input[index]);
        index++;

        while (currentSavings < budget) {
            let currentSum = Number(input[index]);
            index++;
            currentSavings += currentSum;

            if (currentSavings >= budget) {
                console.log(`Going to ${destination}!`);
                currentSavings = 0;
                break;
            }
        }
        command = input[index];
        index++;
    }
}
traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
