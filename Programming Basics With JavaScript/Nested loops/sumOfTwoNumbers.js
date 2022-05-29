function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinationNum = 0;
    let isValid = false;
    let firstNum = 0;
    let secondNum = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            combinationNum++;
            let sum = i + j;
            if (sum === magicNum) {
                console.log(`Combination N:${combinationNum} (${i} + ${j} = ${magicNum})`);
                isValid = true;
                break;
            } 
        }
        if (isValid === true){
            break;
        }
    }
    if (isValid === false) {
        console.log(`${combinationNum} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers(["23",
"24",
"20"])

