function luckyNumbers(input){
    let n = Number(input[0]);
    let luckyNumber = ""
    let printLine = ""

    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            for (let c = 1; c < 10; c++) {
                for (let d = 1; d < 10; d++){
                    if (a + b === c + d && n % (a + b) === 0) {
                        luckyNumber = "" + a + b + c + d;
                        printLine += luckyNumber + " ";
                    }
                }
            }
        }
    }
    
    console.log(printLine);
}
luckyNumbers(["7"]);