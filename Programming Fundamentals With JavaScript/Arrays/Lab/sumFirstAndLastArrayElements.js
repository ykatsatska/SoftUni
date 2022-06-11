function sumFirstAndLastArrayElements(numbers) {
    let firstNum = numbers[0],
        lastNum = numbers[numbers.length - 1],
        sum = firstNum + lastNum;

    console.log(sum);
}
sumFirstAndLastArrayElements([20, 30, 40]);