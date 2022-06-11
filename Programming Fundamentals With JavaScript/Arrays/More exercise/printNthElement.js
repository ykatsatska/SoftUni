function printNthElement(array) {
    let arrayL = array.length;
    let step = Number(array[arrayL - 1]);
    let nThElements = [];
    
    for (let i = 0; i < arrayL - 1; i += step) {
        nThElements.push(array[i]);
    }
    console.log(nThElements.join(' '));
}
printNthElement(['5', '20', '31', '4', '20', '2']);