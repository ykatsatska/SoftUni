function evenAndOddSubtraction(numbers) {
    let oddSum = 0;
    let evenSum = 0;

    for (let el of numbers){
        if (el % 2 === 0) {
            evenSum += el;
        } else {
            oddSum += el;
        }
    }
    console.log(evenSum - oddSum);
}
evenAndOddSubtraction([1,2,3,4,5,6]);