function rotateArray(array) {
    let arrayL = array.length;
    let rotations = Number(array[arrayL - 1]);

    array.pop();
    
    while (rotations > 0) {
        let elementToMove = array.pop();
        array.unshift(elementToMove);

        rotations--;
    }
    console.log(array.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);