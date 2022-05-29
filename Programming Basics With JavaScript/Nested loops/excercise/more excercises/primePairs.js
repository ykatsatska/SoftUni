function primePairs(input) {
    let startFirstPair = Number(input[0]);
    let startSecondPair = Number(input[1]);
    let endFirstPair = startFirstPair + Number(input[2]);
    let endSecondPair = startSecondPair + Number(input[3]);


    for (let a = startFirstPair; a <= endFirstPair; a++){
      
        for (let b = startSecondPair; b <= endSecondPair; b++){
           
            let isFirst = true;
            let isSecond = true;

            for (let c = 2; c < a; c++){
                if (a % c === 0){
                    isFirst = false;
                    break;
                } 
            }
            
            for (let d = 2; d < b; d++){
                if (b % d === 0){
                    isSecond = false;
                    break;
                } 
            }
            if (isFirst && isSecond){
                console.log("" + a + b);
            }
        }
    }
}
primePairs([
"10",
"20",
"5",
"5"  
])