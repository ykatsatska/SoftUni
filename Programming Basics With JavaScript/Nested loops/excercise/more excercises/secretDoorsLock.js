function secretDoorsLock(input) {
    let maxA = Number(input[0]);
    let maxB = Number(input[1]);
    let maxC = Number(input[2]);

    for (let a = 2; a <= maxA; a += 2){
        for (let b = 2; b <= maxB; b++){
            let isPrime = true;
            for (let c = 2; c <= maxC; c += 2){
                for (let d = 2; d < b; d++){
                    if (b % d === 0){
                        isPrime = false;
                        break;
                    } 
                }
                if (b === 2 || isPrime){
                    console.log(`${a} ${b} ${c}`);
                }
            }
        }
    }
}
secretDoorsLock([
"3", 
"5", 
"5"

])