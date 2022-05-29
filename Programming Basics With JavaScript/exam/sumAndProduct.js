function sumAndProduct(input) {
    let n = Number(input[0]);
    let num = 0;
    let isFound = false;

    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let sum = a + b + c + d;
                    let multiplication = a * b * c * d;
                    if (sum === multiplication && n % 10 === 5) {
                        num = "" + a + b + c + d;
                        console.log(num);
                        isFound = true;
                        break;
                    } else if (Math.floor(multiplication / sum) === 3 && n % 3 === 0){
                        num = "" + d + c + b + a;
                        console.log(num);
                        isFound = true;
                        break;
                    } 
                }
                if (isFound === true) {
                    break;
                }
            }
        }
    }
    if (!isFound){
        console.log("Nothing found");
    }
}
sumAndProduct(["214"])