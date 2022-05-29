function smallShop(input){
    let product = input[0];
    let town = input[1];
    let amount = Number(input[2]);
    let price = 0;

    if (town === "Sofia") {
        switch (product) {
            case "coffee": price = amount * 0.5; break;
            case "water": price = amount * 0.8; break;
            case "beer": price = amount * 1.2; break;
            case "sweets": price = amount * 1.45; break;
            case "peanuts": price = amount * 1.60; break;
        }
        
    } else if (town === "Plovdiv") {
        switch (product) {
            case "coffee": price = amount * 0.4; break;
            case "water": price = amount * 0.7; break;
            case "beer": price = amount * 1.15; break;
            case "sweets": price = amount * 1.30; break;
            case "peanuts": price = amount * 1.50; break;        
        }
    } else {
        switch (product) {
            case "coffee": price = amount * 0.45; break;
            case "water": price = amount * 0.7; break;
            case "beer": price = amount * 1.10; break;
            case "sweets": price = amount * 1.35; break;
            case "peanuts": price = amount * 1.55; break;
        }

    }
    console.log(price.toFixed(2));
}
smallShop(["peanuts",
"Plovdiv",
"1"])
