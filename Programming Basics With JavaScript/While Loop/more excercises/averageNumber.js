function averageNumber(input){
    let index = 0;
    let numCount = Number(input[index]);
    index++;
    let sum = 0;

    for (let i = 0; i < numCount; i++){
        let currentNum = Number(input[index]);
        sum += currentNum; 
        index++;
    }
    console.log((sum / numCount).toFixed(2));
}
averageNumber([
"4",
"3",
"2",
"4",
"2"

])