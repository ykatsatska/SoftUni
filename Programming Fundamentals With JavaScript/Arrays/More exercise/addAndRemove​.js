function addAndRemove(array) {
    let newArray = [],
        arrayL = array.length;
    currentNum = 0;

    for (let i = 0; i < arrayL; i++) {
        currentNum++;

        if (array[i] === 'add') {
            newArray.push(currentNum);
        }  else {
            newArray.pop();
        }
    }
    if (newArray.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArray.join(' '));
    }
}
addAndRemove(['add', 'add', 'remove', 'add', 'add']);