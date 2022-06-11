function commonElements(firstArr, secondArr) {
    let firstArrL = firstArr.length;
    let secondArrL = secondArr.length;

    for (let i = 0; i < firstArrL; i ++) {
        for (let j = 0; j < secondArrL; j ++) {
            if (firstArr[i] === secondArr[j]) {
                console.log(firstArr[i]);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
               ['Petar', 10, 'hey', 4, 'hello', '2']);