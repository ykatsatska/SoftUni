function sumOfOddNumbers(n){
    let numCounter = 0;
    let num = 1;
    let sum = 0;
    while (numCounter < n) {
    numCounter ++;
    console.log(num);
    sum += num;
    num += 2;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);