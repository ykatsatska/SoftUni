function tradeCommissions(input){
    let town = input[0];
    let amount = Number(input[1]);
    let commission = 0;
    let isValid = false;

    switch (town) {
        case "Sofia":
            if (amount >= 0 && amount <= 500){
                commission = 0.05;
            } else if (amount > 500 && amount <= 1000){
                commission = 0.07;
            } else if (amount > 1000 && amount <= 10000){
                commission = 0.08;
            } else if (amount > 10000){
                commission = 0.12;
            } else {
                let isValid = true;
            }
        break;
        case "Varna":
            if (amount >= 0 && amount <= 500){
                commission = 0.045;
            } else if (amount > 500 && amount <= 1000){
                commission = 0.075;
            } else if (amount > 1000 && amount <= 10000){
                commission = 0.10;
            } else if (amount > 10000){
                commission = 0.13;
            } else {
                isValid = true;
            }
        break;        
        case "Plovdiv":
            if (amount >= 0 && amount <= 500){
                commission = 0.055;
            } else if (amount > 500 && amount <= 1000){
                commission = 0.08;
            } else if (amount > 1000 && amount <= 10000){
                commission = 0.12;
            } else if (amount > 10000){
                commission = 0.145;
            } else {
                isValid = true;
            }
        break;
        default:
            isValid = true;
            break;
    }
    let sum = amount * commission;
    
    if (isValid === true){
        console.log("error");
    } else {
    console.log(`${sum.toFixed(2)}`);
    }

}
tradeCommissions(["Varna",
"3874.50"])





