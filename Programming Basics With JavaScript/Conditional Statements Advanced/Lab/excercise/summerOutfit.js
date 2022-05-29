function summerOutfit(input){
    let degrees = Number(input[0]);
    let partOfTheDay = input[1];
    let clothes;
    let shoes;

    switch(partOfTheDay){
        case "Morning":
            if (10 <= degrees && degrees <= 18){
                clothes = "Sweatshirt";
                shoes = "Sneakers";
            } else if (18 < degrees && degrees <= 24){
                clothes = "Shirt";
                shoes = "Moccasins";
            } else if (degrees >= 25) {
                clothes = "T-Shirt";
                shoes = "Sandals";
            }
            break;
        case "Afternoon":
            if (degrees >= 10 && degrees <= 18){
                clothes = "Shirt";
                shoes = "Moccasins";
            } else if (degrees > 18 && degrees <= 24){
                clothes = "T-Shirt";
                shoes = "Sandals";
            } else if (degrees >= 25) {
                clothes = "Swim Suit";
                shoes = "Barefoot";
            }
            break;
        case "Evening":
            if (degrees >= 10){
                clothes = "Shirt";
                shoes = "Moccasins";
            }
            break;
    }
    
    console.log(`It's ${degrees} degrees, get your ${clothes} and ${shoes}.`);
}
summerOutfit(["28",
"Evening"])

