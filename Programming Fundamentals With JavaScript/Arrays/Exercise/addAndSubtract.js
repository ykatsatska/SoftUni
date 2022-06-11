function addAndSubtract(originalArr) {
    let originalArrSum = 0;
    let newArrSum = 0;
    let newArr = [];

    let arrLength = originalArr.length

    for (let i = 0; i < arrLength; i++) {
        let currentNum = originalArr[i];
        originalArrSum += currentNum;

        if (currentNum % 2 === 0) {
            currentNum += i;
        } else {
            currentNum -= i;
        }
        newArr.push(currentNum);
        newArrSum += currentNum;
    }

    console.log(newArr);
    console.log(originalArrSum);
    console.log(newArrSum);
}
addAndSubtract([5, 15, 23, 56, 35]);