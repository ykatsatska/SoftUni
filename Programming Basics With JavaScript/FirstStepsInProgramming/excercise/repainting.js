function repainting(input){

    let priceNylon = (Number(input[0]) + 2) * 1.50;
    let pricePaint = (Number(input[1]) * 1.10) * 14.50;
    let priceThinner = Number(input[2]) * 5.00;

    let totalMaterials = priceNylon + pricePaint + priceThinner + 0.4;

    
    let workPricePerHour = totalMaterials * 0.3;
    let totalWorkPrice = workPricePerHour * Number(input[3]);

    let totalExpences = priceNylon + pricePaint + priceThinner + 0.4 + totalWorkPrice;

    console.log(totalExpences);

}
repainting(["5","10","10","1"]);