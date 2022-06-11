function equalSums(array) {
    let isBorder = 'no',
        arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {

        let leftSum = 0,
            rightSum = 0;

        for (let l = 0; l < i; l++) {
            leftSum += array[l];
        }

        for (let r = i + 1; r < arrayL; r++) {
            rightSum += array[r];
        }

        if (leftSum === rightSum) {
            isBorder = i;
        }
        
    }
    console.log(isBorder);
}
equalSums([1, 2, 3, 3]);