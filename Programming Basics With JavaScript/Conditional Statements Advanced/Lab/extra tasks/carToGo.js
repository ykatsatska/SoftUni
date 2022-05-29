function carToGo(input){
    let budget = Number(input[0]);
    let season = input[1];
    
    let classType = 0;
    let carType = 0;
    let price = 0;

    if ( budget <= 100 ){
        classType = "Economy class";
        switch (season) {
            case "Summer":
                carType = "Cabrio";
                price = budget * 0.35;
                break;
            case "Winter":
                carType = "Jeep";
                price = budget * 0.65;
                break;
        }
    } else if (budget > 100 && budget <= 500){
        classType = "Compact class";
        switch (season) {
            case "Summer":
                carType = "Cabrio";
                price = budget * 0.45;
                break;
            case "Winter":
                carType = "Jeep";
                price = budget * 0.80;
                break;
        }
    } else {
        classType = "Luxury class";
        carType = "Jeep";
        price = budget * 0.90;
    }
    console.log(`${classType}`);
    console.log(`${carType} - ${price.toFixed(2)}`);
}
carToGo(["70.50", "Winter"]);