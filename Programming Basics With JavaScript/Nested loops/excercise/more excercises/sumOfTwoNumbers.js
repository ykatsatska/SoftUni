function sumOfTwoNumbers(input){
    let startOfInterval  = Number(input[0]);
    let endOfInterval = Number(input[1]);
    let magicNum = Number(input[2]);

    let combinationCounter = 0;
    let isFound = false;

    for (let a = startOfInterval; a <= endOfInterval; a++){
        for (let b = startOfInterval; b <= endOfInterval; b++){
            combinationCounter++;

            if (a + b === magicNum){
                console.log(`Combination N:${combinationCounter} (${a} + ${b} = ${magicNum})`);
                isFound = true;
                break;
            }  
        }
        if (isFound){
            break;
        }
    }
    if (!isFound){ 
        console.log(`${combinationCounter} combinations - neither equals ${magicNum}`);
    } 
}
sumOfTwoNumbers([
"23",
"24",
"20"



])