function integerAndFloat(firstNum, secondNum, thidrNum) {
    let sum = firstNum + secondNum + thidrNum;

    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum);
}
integerAndFloat(9, 100, 1.1);