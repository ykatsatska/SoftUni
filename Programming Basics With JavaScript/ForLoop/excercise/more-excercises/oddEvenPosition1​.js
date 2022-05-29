function oddEvenPosition(input) {
    let index = 0;
    let numCount = Number(input[index++]);

    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= numCount; i++){
        let num = Number(input[index++]);

        if (i % 2 !== 0){
            oddSum += num;
            if (num < oddMin) {
                oddMin = num.toFixed(2);
            }
            if (num > oddMax) {
                oddMax = num.toFixed(2);
            }
        } else {
            evenSum += num;
            if (num < evenMin) {
                evenMin = num.toFixed(2);
            }
            if (num > evenMax) {
                evenMax = num.toFixed(2);
            }
        }
        num = Number(input[index]);
    }
    if (oddMin === Number.MAX_SAFE_INTEGER) {
        oddMin = "No";
    } 
    if (oddMax === Number.MIN_SAFE_INTEGER) {
        oddMax = "No";
    } 
    if (evenMin === Number.MAX_SAFE_INTEGER) {
        evenMin = "No";
    } 
    if (evenMax === Number.MIN_SAFE_INTEGER){
        evenMax = "No";
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(`OddMin=${oddMin},`);
    console.log(`OddMax=${oddMax},`);
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(`EvenMin=${evenMin},`);
    console.log(`EvenMax=${evenMax}`);
}
oddEvenPosition([
    "1",
    "1"
    ])