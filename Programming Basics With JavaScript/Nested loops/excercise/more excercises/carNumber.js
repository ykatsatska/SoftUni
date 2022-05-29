function carNumber(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let specialNum = "";
    let printline = "";

    for (let a = start; a <= end; a++){
        for (let b = start; b <= end; b++) {
            for (let c = start; c <= end; c++) {
                for (let d = start; d <= end; d++) {

                    if ((a % 2 === 0 && d % 2 !== 0) || (a % 2 !== 0 && d % 2 === 0)){
                        if (a > d){
                            if ((b + c) % 2 === 0) {
                                specialNum ="" + a + b + c + d;
                                printline += specialNum + " ";
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(printline);
}
carNumber([
"2",
"3"
])