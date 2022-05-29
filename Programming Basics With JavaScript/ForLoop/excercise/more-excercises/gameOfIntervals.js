function gameOfIntervals(input){
    let index = 0;
    let moves = Number(input[index]);
    index++;

    let totalPoints = 0;

    let from09 = 0;
    let from10to19 = 0;
    let from20to29 = 0;
    let from30to39 = 0;
    let from40to50 = 0;
    let invalid = 0;

    for (let i = 0; i < moves; i++){
        let num = Number(input[index]);
        index++;
        
        if (num >= 0 && num < 10){
            from09++;
            totalPoints += num * 0.2;
        } else if (num >= 10 && num <20){
            from10to19++;
            totalPoints += num * 0.3;
        } else if (num >= 20 && num < 30){
            from20to29++;
            totalPoints += num * 0.4;
        } else if (num >= 30 && num < 40){
            from30to39++;
            totalPoints += 50;
        } else if (num >= 40 && num <= 50){
            from40to50++;
            totalPoints += 100;
        } else {
            invalid++;
            totalPoints = totalPoints / 2;
        }
    }
    console.log(totalPoints.toFixed(2));
    console.log(`From 0 to 9: ${(from09 / moves * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(from10to19 / moves * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(from20to29 / moves * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(from30to39 / moves * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(from40to50 / moves * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(invalid / moves * 100).toFixed(2)}%`);
}
gameOfIntervals([10,
    43,
    57,
    -12,
    23,
    12,
    0,
    50,
    40,
    30,
    20,
    ])