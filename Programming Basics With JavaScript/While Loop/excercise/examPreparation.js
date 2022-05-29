function examPreparation(input) {
    let index = 0;
    let failLimit = Number(input[index]);
    index++;
    let failConter = 0;
    let gradeCounter = 0;
    let gradeSum = 0;
    let finalTask = "";
    let isNeedBreak = false;
    let command = input[index];
    index++;

    while (command !== "Enough") {
        let taskName = command;
        let grade = Number(input[index]);
        index++;
        
        gradeSum += grade;
        gradeCounter++;
        finalTask = taskName;

        if (grade <= 4) {
            failConter++;
        }
        if (failConter === failLimit){
            console.log(`You need a break, ${failConter} poor grades.`);
            isNeedBreak = true;
            break;
        }
        command = input[index];
        index++;
    }
    if (!isNeedBreak) {
        let averageScore = gradeSum / gradeCounter;
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${gradeCounter}`);
        console.log(`Last problem: ${finalTask}`);
    }
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

