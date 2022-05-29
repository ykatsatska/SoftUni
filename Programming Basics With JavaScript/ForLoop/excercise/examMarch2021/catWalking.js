function catWalking(input){
    let minutes = Number(input[0]);
    let walksAday = Number(input[1]);
    let calories = Number(input[2]);
    let burntCalories = walksAday * (minutes * 5);

    if (burntCalories >= calories / 2){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burntCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burntCalories}.`);
    }
}
catWalking([30,
    3,
    600
    ])