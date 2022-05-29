function fishland(input){
    let priceSk = Number(input[0]);
    let priceC = Number(input[1]);
    let kgPalamud = Number(input[2]);
    let kgSafrid = Number(input[3]);
    let kgMidi = Number(input[4]);

    let pricePalamud = priceSk * 1.60;
    let priceSafrid = priceC * 1.80;
    let priceMidi = 7.50;

    let totalPalamud = kgPalamud * pricePalamud;
    let totalSafrid = kgSafrid * priceSafrid;
    let totalMidi = kgMidi * priceMidi;

    let sum = totalMidi + totalPalamud + totalSafrid;

    console.log(sum.toFixed(2));







}

fishland(["6.90","4.20","1.5","2.5","1"]);