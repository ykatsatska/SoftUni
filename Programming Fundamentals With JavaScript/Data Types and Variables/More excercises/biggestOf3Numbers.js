function biggestOf3Numbers(num1, num2, num3) {
    let maxNum = 0;

    if (num1 > num2 && num1 > num3){
        maxNum = num1;
    } else if (num2 > num1 && num2 > num3) {
        maxNum = num2;
    } else {
        maxNum = num3;
    }
    console.log(maxNum);
}
biggestOf3Numbers(-2,7,15);