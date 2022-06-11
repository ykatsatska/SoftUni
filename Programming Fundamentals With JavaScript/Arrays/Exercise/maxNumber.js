function maxNumber(array) {
    let arrayL = array.length;
    let topInt = [];

    for (let i = 0; i < arrayL; i++){
        let number1 = array[i];
        let isLargest = true;

        for (let j = i + 1; j < arrayL; j++) {
            let number2 = array[j];

            if (number1 <= number2) {
                
                isLargest = false;
            }
        }
        if (isLargest) {
            topInt.push(array[i]);
        }
    }
    console.log(topInt.join(' '));
}
maxNumber([14, 24, 3, 19, 15, 17]);