function godzillaVsKong(input){
    let budget = Number(input[0]);
    let actors = Number(input[1]);
    let clothingPerActor = Number(input[2]);
    let decor = budget * 0.1;

    if (actors > 150){
        clothingPerActor = clothingPerActor * 0.9;
    }

    let sum = actors * clothingPerActor + decor;
    let diff = Math.abs(sum - budget);

    if (sum <= budget){
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);

    } else {   
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    }
}

godzillaVsKong(["15437.62",
"186",
"57.99"])
