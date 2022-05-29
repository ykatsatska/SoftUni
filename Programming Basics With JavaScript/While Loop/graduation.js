function graduation(input) {
    let name = input[0];
    let index = 1;
    let failCounter = 0;
    let sum = 0;
    let gradeCounter = 1;

    while (true) {

        if (failCounter > 1) {
            console.log(`${name} has been excluded at ${gradeCounter} grade`)
            break;
        }
        let grade = Number(input[index]);
        if (grade < 4) {
            failCounter++;
            index++;
            continue;
        }
        sum += grade;
        if (gradeCounter >= 12) {
            let average = sum / gradeCounter;                
            console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
            break;
        }
        gradeCounter++;
        index++;
    
    }
}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
