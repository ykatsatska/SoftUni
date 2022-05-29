function transportPrice(input){
    let km = Number(input[0]);
    let time = input[1];
    let taxiDay = 0.70 + 0.79 * km;
    let taxiNight = 0.70 + 0.90 * km;
    let bus = 0.09 * km;
    let train = 0.06 * km;

    if (km < 20 && time === "day"){
        console.log(taxiDay.toFixed(2));
    } else if (km < 20 && time === "night"){
        console.log(taxiNight.toFixed(2));
    }
    if (km < 100 && km >= 20){
        console.log(bus.toFixed(2));
    }
    if (km >= 100){
        console.log(train.toFixed(2));
    }


}
transportPrice(["180", "night"]);