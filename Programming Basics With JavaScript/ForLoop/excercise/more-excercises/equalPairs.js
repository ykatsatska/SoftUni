function equalPairs(input){
    let index = 0;
    let pairCount = Number(input[index++]);
    let maxDiff = 0;
    let lastSum = 0;

    for (let i = 0; i < pairCount; i++) {
        let a = Number(input[index++]);
        let b = Number(input[index++]);

        let currentSum = a + b;

        if (i > 0) {
            let diff = Math.abs(currentSum - lastSum);
            if (diff > maxDiff){
            maxDiff = diff;
            }
        }
        
        lastSum = currentSum;
    }
    if (maxDiff === 0) {
        console.log(`Yes, value=${lastSum}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    } 
}
equalPairs([
"4",
"1",
"1",
"3",
"1",
"2",
"2",
"0",
"0"

])