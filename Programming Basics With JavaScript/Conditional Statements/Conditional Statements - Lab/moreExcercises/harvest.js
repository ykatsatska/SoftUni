function harvest(input){
    let area = Number(input[0]);
    let wineArea = area * 0.40;

    let grapesPerSqM = Number(input[1]);
    let grapes = wineArea * grapesPerSqM;
    let wine = grapes / 2.5;
    let wineNeeded = Number(input[2]);
    let workers = Number(input[3]);

    let diff = Math.abs(wine - wineNeeded);

    if (wine >= wineNeeded){
        let winePerPerson = diff / workers;

        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(winePerPerson)} liters per person.`);

    } else {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);

    }
}

harvest(["1020", "1.5", "425", "4"]);