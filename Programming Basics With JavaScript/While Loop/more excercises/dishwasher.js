function dishwasher(input) {
    let index = 0;
    let detergentInMl = Number(input[index++]) * 750;
    let dishesCounter = 0;
    let potsCounter = 0;
    let isDetergent = true;
    
    let command = input[index++];

    while (command !== "End") {
        let quantity = Number(command);
        
        if ((index-1) % 3 === 0) {
            potsCounter += quantity;
            detergentInMl -= quantity * 15;
        } else {
            dishesCounter += quantity;
            detergentInMl -= quantity * 5;
        }
        if (detergentInMl < 0) {
            isDetergent = false; 
            console.log(`Not enough detergent, ${Math.abs(detergentInMl)} ml. more necessary!`);
            break;
        }

        command = input[index++];
    }
    if (detergentInMl >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${dishesCounter} dishes and ${potsCounter} pots were washed.`);
        console.log(`Leftover detergent ${detergentInMl} ml.`);
    } 
}
dishwasher([
    "2",
    "53",
    "65",
    "55",
    "End"
    
    ])