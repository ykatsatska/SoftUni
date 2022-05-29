function newHouse (input){
    let typeFlowers = input[0];
    let amountFlowers = Number(input[1]);
    let budget = input[2];

    let priceRoses = 5;
    let priceDahlias = 3.80;
    let priceTulips = 2.80;
    let priceNarcissus = 3;
    let priceGladiolus = 2.50;

    let price = 0;

    switch (typeFlowers){
        case "Roses":
            if (amountFlowers > 80){
                price = amountFlowers * priceRoses * 0.9;
            } else {
                price = amountFlowers * priceRoses;
            }
            break;
        case "Dahlias":
            if (amountFlowers > 90){
                price = priceDahlias * amountFlowers * 0.85;
            } else {
                price = amountFlowers * priceDahlias;
            }
            break;
        case "Tulips":
            if (amountFlowers > 80){
                price = amountFlowers * priceTulips * 0.85;
            } else {
                price = amountFlowers * priceTulips;
            }
            break;
        case "Narcissus":
            if (amountFlowers < 120){
                price = amountFlowers * priceNarcissus * 1.15;
            } else {
                price = amountFlowers * priceNarcissus;
            }
            break;
        case "Gladiolus":
            if (amountFlowers < 80){
                price = amountFlowers * priceGladiolus * 1.20;
            } else {
                price = amountFlowers * priceGladiolus;
            }
            break;
    }
    let diff = Math.abs(budget - price);

    if (price <= budget){
        console.log(`Hey, you have a great garden with ${amountFlowers} ${typeFlowers} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
    


}
newHouse(["Tulips",
"88",
"260"])
;
