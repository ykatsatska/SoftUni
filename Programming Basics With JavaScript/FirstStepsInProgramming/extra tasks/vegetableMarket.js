function vegetableMarket(input){
    let priceVegetables = Number(input[0]);
    let priceFruits = Number(input[1]);
    let kgVegetables = Number(input[2]);
    let kgFruits = Number(input[3]);

    let totalPriceInBGN = priceVegetables * kgVegetables + priceFruits * kgFruits;
    let totalPriceInEUR = totalPriceInBGN / 1.94

    console.log(totalPriceInEUR.toFixed(2));
 
    

}

vegetableMarket(["0.194","19.4","10","10"]);