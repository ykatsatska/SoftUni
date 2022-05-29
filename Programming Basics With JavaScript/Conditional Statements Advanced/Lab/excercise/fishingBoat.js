function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let price = 0

    switch(season){
        case "Spring":
            price = 3000;
            break;
        case "Summer":
        case "Autumn":
            price = 4200;
            break;
        case "Winter":
            price = 2600;
            break;
    }
    if (fishermen <=6){
        price = price * 0.9;
    } else if (fishermen <= 11) {
        price = price * 0.85;
    } else {
        price = price * 0.75;
    }

    if (season !== "Autumn" && fishermen % 2 == 0){
        price = price * 0.95;
    }

    let diff = Math.abs(budget - price);

    if (price <= budget){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }

}
fishingBoat(["3600",
"Autumn",
"6"])

