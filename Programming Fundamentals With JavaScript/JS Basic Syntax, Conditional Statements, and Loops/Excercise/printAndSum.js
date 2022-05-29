function printAndSum(startNum, endNum) {

    let sum = 0;
    let printline = '';

    for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
        sum += currentNum;

        if (currentNum === endNum) {
            printline += currentNum;
        } else {
            printline += `${currentNum} `;
        }
    }
    console.log(printline);
    console.log(`Sum: ${sum}`);
}
printAndSum(50, 60);