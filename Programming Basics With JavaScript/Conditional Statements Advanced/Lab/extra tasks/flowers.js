function flowers(input){
    let hrisantem = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];

    let priceHrisantem = 0;
    let priceRoses = 0;
    let priceTulips = 0;

    switch (season) {
        case "Spring":
        case "Summer":
            priceHrisantem = 2;
            priceRoses = 4.1;
            priceTulips = 2.5;
            break;
        case "Autumn":
        case "Winter":
            priceHrisantem = 3.75;
            priceRoses = 4.5;
            priceTulips = 4.15;
            break;
    }
    let totalPrice = hrisantem * priceHrisantem + roses * priceRoses + tulips * priceTulips;
    
    if (isHoliday === "Y"){
        totalPrice = totalPrice * 1.15;
    }
    if (tulips > 7 && season === "Spring"){
        totalPrice = totalPrice * 0.95;
    }
    if (roses >= 10 && season === "Winter"){
        totalPrice = totalPrice * 0.9;
    }
    let flowers = hrisantem + roses + tulips;

    if (flowers > 20){
        totalPrice = totalPrice * 0.8;
        
    }
    console.log((totalPrice + 2).toFixed(2));



}
flowers([10, 10, 10, "Autumn", "N"])