function logistics(input){
    let index = 0;    
    let numberLoads = Number(input[index]);
    index++;
    let bus = 0;
    let truck = 0;
    let train = 0;

    let busPercent = 0;
    let truckPercent = 0;
    let trainPercent = 0;

    let price = 0;

    let totalTons = 0;
    let tons = 0;

    for (let i = 0; i < numberLoads; i++){
        tons = Number(input[index]);
        index++;
        

        if (tons <= 3){
            price += tons * 200;
            bus += tons;
        } else if (tons > 3 && tons <= 11){
            truck += tons;
            price += tons * 175;
        }  else {
            train += tons;
            price += tons * 120;
        }
        totalTons += tons;

    }
    let averageprice = price / totalTons;
    busPercent = bus / totalTons * 100;
    truckPercent = truck / totalTons * 100;
    trainPercent = train / totalTons * 100;

    console.log(averageprice.toFixed(2));
    console.log(busPercent.toFixed(2) + "%");
    console.log(truckPercent.toFixed(2) + "%");
    console.log(trainPercent.toFixed(2) + "%");

}

logistics([4, 1, 5, 16, 3]);