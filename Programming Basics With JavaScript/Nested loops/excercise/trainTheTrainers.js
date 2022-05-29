function trainTheTrainers(input) {
    let index = 0;
    let jury = Number(input[index]); 
    index++;

    let command = input[index];
    index++;

    let taskCounter = 0;

    let avg = 0;

    while (command !== "Finish") {
        let presentation = command;
        taskCounter++;
        let sumPresentation = 0;

        for (let i = 0; i < jury; i++) {
            let currentAssessment = Number(input[index]);
            index++;
            sumPresentation += currentAssessment;
        }

        let currentAvg = sumPresentation / jury;
        avg += currentAvg;

        console.log(`${presentation} - ${currentAvg.toFixed(2)}.`);

        command = input[index];
        index++;
    }
    console.log(`Student's final assessment is ${(avg / taskCounter).toFixed(2)}.`);
    
}
trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])

