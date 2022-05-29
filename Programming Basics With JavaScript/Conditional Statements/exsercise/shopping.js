function shopping(input){
    let budget = Number(input[0]);
    let vid = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let vidPrice = 250;
    let processorPrice = 0.35 * vidPrice * vid;
    let ramPrice = 0.1 * vidPrice * vid;
    let sum = vid * vidPrice + processors * processorPrice + ram * ramPrice;
    
    if (vid > processors){
        sum = 0.85 * sum;
    }

    let diff = Math.abs(sum - budget);

    if (budget >= sum){
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);

    }
}

shopping(["920.45",
"3",
"1",
"1"])

