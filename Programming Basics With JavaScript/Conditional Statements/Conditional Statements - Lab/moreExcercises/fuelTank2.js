function fuelTank2(input){
    let fuel = input[0];
    let liters = Number(input[1]);
    let clubCard = input[2];

    let gasolinePrice = 2.22;
    let dieselPrice = 2.33;
    let gasPrice = 0.93;
    let sum = 0;
    
    if (fuel === "Gas"){
        if (clubCard === "Yes"){
            sum = liters * (gasPrice - 0.08);
        } else {
            sum = liters * gasPrice;
        }
    } else if (fuel === "Gasoline"){
        if (clubCard === "Yes"){
            sum = liters * (gasolinePrice - 0.18);
        } else {
            sum = liters * gasolinePrice;
        }
    } else if (fuel === "Diesel"){
        if (clubCard === "Yes"){
            sum = liters * (dieselPrice - 0.12);
        } else {
            sum = liters * dieselPrice;
        }
    }
    if (liters >= 20 && liters <= 25){
        sum = sum * 0.92;
    } else if (liters > 25){
        sum = sum * 0.9;
    } else {
        sum = sum;
    }
    console.log(`${sum.toFixed(2)} lv.`);
}
fuelTank2(["Gasoline", "25", "No"])