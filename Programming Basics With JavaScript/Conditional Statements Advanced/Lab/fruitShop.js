function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;
    let hasError = false

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (fruit === "banana"){
                price = 2.50;
            } else if (fruit === "apple"){
                price = 1.20;
            } else if (fruit === "orange"){
                price = 0.85;
            } else if (fruit === "grapefruit"){
                price =  1.45;
            } else if (fruit === "kiwi"){
                price =  2.70;                
            } else if (fruit === "pineapple"){
                price = 5.50;
            } else if (fruit === "grapes"){
                price = 3.85;
            } else {
                hasError = true;
                
            }
            break;

        case "Saturday":
        case "Sunday":
            if (fruit === "banana"){
                price =  2.70;
            } else if (fruit === "apple"){
                price =  1.25;
            } else if (fruit === "orange"){
                price =  0.90;
            } else if (fruit === "grapefruit"){
                price =  1.60;
            } else if (fruit === "kiwi"){
                price =  3.00;              
            } else if (fruit === "pineapple"){
                price =  5.60;
            } else if (fruit === "grapes"){
                price =  4.20;
            } else {
                hasError = true;
                break;
            }
            break;

        default:
            hasError = true;
            break;
        
    } 
    let sum = price * quantity;

    if (hasError === true){
        console.log("error");
    } else {
    console.log(sum.toFixed(2));
    }

}

fruitShop(["apple",
"Tuesday",
"2"])




















