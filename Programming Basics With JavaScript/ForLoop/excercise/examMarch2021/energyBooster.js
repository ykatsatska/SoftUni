function energyBooster(input) {
    let fruit = input[0];
    let size = input[1];
    let setAmount = Number(input[2]);

    let unitPrice = 0;
    let total = 0;

    switch (fruit){
        case "Watermelon": 
            if (size === "small"){
                unitPrice = 56 * 2;
            } else {
                unitPrice = 28.7 * 5;
            }
            break;
        case "Mango":  
            if (size === "small"){
                unitPrice = 36.66 * 2;
            } else {
                unitPrice = 19.6 * 5;
            }
            break;
        case "Pineapple": 
            if (size === "small"){
                unitPrice = 42.1 * 2;
            } else {
                unitPrice = 24.8 * 5;
            }
             break;
        case "Raspberry":  
            if (size === "small"){
                unitPrice = 20 * 2;
            } else {
                unitPrice = 15.2 * 5;
            }
            break;
    }
    total += setAmount * unitPrice;

    if (total >= 400 && total <= 1000){
        total = total * 0.85;
    } else if (total > 1000) {
        total = total * 0.5;
    }

    console.log(`${total.toFixed(2)} lv.`);
}
energyBooster(["Pineapple",
"small",
"1"])
