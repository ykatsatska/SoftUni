function uniquePINCodes(input){
    let index = 0;
    let limitFirstNum = Number(input[index++]);
    let limitSecondNum = Number(input[index++]);
    let limitThirdNum = Number(input[index]);


    for (let a = 2; a <= limitFirstNum; a += 2) {
        for (let b = 2; b <= limitSecondNum; b++){
            let isPrime = true;
            for (let c = 2; c <= limitThirdNum; c += 2) {
                for (let d = 2; d < b; d++){
                    if (b % d === 0){
                        isPrime = false;
                        break;
                    } 
                }
                if (b === 2 || isPrime){
                    console.log(a, b, c);
                }
            }
        }
    }  
}
uniquePINCodes([
"3",
"5",
"5"
])