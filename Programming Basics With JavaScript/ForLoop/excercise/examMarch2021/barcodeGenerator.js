function barcodeGenerator(input) {
    let start = input[0];
    let end = input[1];

    let printline = "";

    for (let a = Number(start[0]); a <= Number(end[0]); a++){
        for (let b = Number(start[1]); b <= Number(end[1]); b++){
            for (let c = Number(start[2]); c <= Number(end[2]); c++){
                for (let d = Number(start[3]); d <= Number(end[3]); d++){
                    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0){
                        let currentNum = "" + a + b + c + d;
                        printline += currentNum + " ";
                    }

                }
            }
        }
    }
    console.log(printline);
}
barcodeGenerator(["2345",
"6789"])
