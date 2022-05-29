function lettersCombinations(input) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let firstLetter = input[0];
    let lastLetter = input[1];
    let letterToBeSkipped = input[2];
    
    let combinationCounter = 0;
    let start = 0;
    let combination = 0;
    let printLine = "";
   
    for (let i = 1; i < alphabet.length; i++){
        let currentS = alphabet.charAt(i);
        if (currentS === firstLetter){
            start = i;
        }
    }
   

    for (let a = start; a < alphabet.length; a++){
        let firstL = alphabet.charAt(a);        
        for (let b = start; b < alphabet.length; b++) {
            let secondL = alphabet.charAt(b);
            for (let c = start; c < alphabet.length; c++){
                let thirdL = alphabet.charAt(c);
                let isValid = true;
                if (firstL > lastLetter || secondL > lastLetter || thirdL > lastLetter){
                    break;
                }
                if (firstL === letterToBeSkipped || secondL === letterToBeSkipped|| thirdL === letterToBeSkipped){
                    isValid = false;
                } 
                if (isValid){
                    combination ="" + firstL + secondL + thirdL
                    combinationCounter++;
                    printLine += combination + " ";
                }
                
            }
        }
    }
    console.log(printLine + combinationCounter);
}
lettersCombinations([
"f",
"k",
"h"

])