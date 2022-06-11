function magicSum(array, sum) {
    let arrayL = array.length,
        magicCombo = '',
        arrOfMagicNumbers = [];

    for (let i = 0; i < arrayL; i++) {
        for (let j = i + 1; j < arrayL; j++) {
            if (array[i] + array[j] === sum) {
                magicCombo = `${array[i]} ${array[j]}`;
                arrOfMagicNumbers.push(magicCombo);
            }
        }
    }
    console.log(arrOfMagicNumbers.join('\n'));
}
magicSum([1, 7, 6, 2, 19, 23], 8);