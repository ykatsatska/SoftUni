function equalArrays(firstArr, secondArr) {
    let areEqual = true; 
    let sum = 0;
    for (let i = 0; i < firstArr.length; i++) {
        firstArr[i] = Number(firstArr[i]);
        secondArr[i] = Number(secondArr[i]);

        if (firstArr[i] !== secondArr[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        } else {
            sum += firstArr[i];
        }
    } 

    if(areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);