function bikeRace(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let trace = input[2];

    let totalAmount = 0;

    switch (trace) {
        case "trail":
            totalAmount = juniors * 5.50 + seniors * 7;
            break;
        case "cross-country":
            totalAmount = juniors * 8 + seniors * 9.5;
            let participants = juniors + seniors;
            if (participants >= 50){
                totalAmount = totalAmount * 0.75;
            }
            break;
        case "downhill":
            totalAmount = juniors * 12.25 + seniors * 13.75;
            break;
        case "road":
            totalAmount = juniors * 20 + seniors * 21.5;
            break;
    }
    totalAmount = totalAmount * 0.95;

    console.log(totalAmount.toFixed(2));

}
bikeRace(["30", "25", "cross-country"]);