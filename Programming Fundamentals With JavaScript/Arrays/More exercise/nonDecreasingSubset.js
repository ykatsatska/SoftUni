function nonDecreasingSubset(numbers) {
    let arrayL = numbers.length,
        newArray = [], 
        currentBiggest = 0;

    for (let i = 0; i < arrayL; i++) {
        if (numbers[i] >= currentBiggest) {
            currentBiggest = numbers[i];
            newArray.push(currentBiggest)
        }   
    }
    console.log(newArray.join(' '));
}
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);