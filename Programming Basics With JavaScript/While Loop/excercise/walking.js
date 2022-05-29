function walking(input) {
    let index = 0;
    let command = input[index];
    index++;
    let totalSteps = 0;
    let diff = 0;

    while (command !== "Going home") {
        let currentSteps = Number(command);
        totalSteps += currentSteps;
        let diff = Math.abs(totalSteps - 10000);
        
        if (totalSteps >= 10000) {
            break;
        }

        command = input[index];
        index++;
    }
    if (command === "Going home") {
        let stepsToHome = Number(input[index++]);
        totalSteps += stepsToHome;
    }
    
    diff = Math.abs(totalSteps - 10000);
    if (totalSteps >= 10000) {
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`);
    }

}
walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])





