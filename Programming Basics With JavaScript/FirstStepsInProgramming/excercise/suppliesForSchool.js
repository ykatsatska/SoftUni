function suppliesForSchool(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let cleaner = Number(input[2]);
    let discount = Number(input[3])/100;


    let penPrice = pens * 5.80;
    let markerPens = markers * 7.20;
    let cleanerPrice = cleaner * 1.20;

    let totalDiscount = (penPrice + markerPens + cleanerPrice) * discount;

    let finalPrice = (penPrice + markerPens + cleanerPrice) - totalDiscount

    console.log(finalPrice);






}

suppliesForSchool(["2","3","4","25"]);