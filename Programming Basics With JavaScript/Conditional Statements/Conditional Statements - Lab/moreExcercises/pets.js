function pets(input){
    let days = Number(input[0]);
    let foodAvailable = Number(input[1]);
    let dogFoodADay = Number(input[2]);
    let catFoodADay = Number(input[3]);
    let tortoiseFoodADay = Number(input[4]) * 0.001;

    let foodNeeded = days * (dogFoodADay + catFoodADay + tortoiseFoodADay);
    let diff = Math.abs(foodAvailable - foodNeeded);

    if (foodAvailable >= foodNeeded){
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }
}
pets(["5", "10", "2.1", "0.8", "321"]);