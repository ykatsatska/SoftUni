function sumEvenNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let currentNum = Number(numbers[i]);

        if (currentNum % 2 === 0) {
            sum += currentNum;
        }
    }
    console.log(sum);
}
sumEvenNumbers(['1','2','3','4','5','6']);