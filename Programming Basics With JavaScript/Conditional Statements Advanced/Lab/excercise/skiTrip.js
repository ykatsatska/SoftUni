function skiTrip(input){
    let days = Number(input[0]);
    let nights = days - 1;
    let typeRoom = input[1];
    let review = input[2];
    let price = 0;

    switch(typeRoom){
        case "room for one person":
            price = nights * 18;
            break;
        case "apartment":
            price = nights * 25;
            if (nights < 10){
                price = price * 0.70;
            } else if (nights >= 10 && nights <= 15){
                price = price * 0.65;
            } else {
                price = price * 0.5;
            }
            break;
        case "president apartment":
            price = nights * 35;
            if (nights < 10){
                price = price * 0.90;
            } else if (nights >= 10 && nights <= 15){
                price = price * 0.85;
            } else {
                price = price * 0.8;
            }
            break;
    }
    if (review === "positive"){
        price = price * 1.25;
    } else {
        price = price * 0.9;
    }

    console.log(price.toFixed(2));

}
skiTrip(["2",
"apartment",
"positive"])



