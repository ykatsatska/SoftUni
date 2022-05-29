function fishTank(input){
    let lenght = Number(input[0]);
    let widght = Number(input[1]);
    let height = Number(input[2]);
    let occupaidPercent = Number(input[3]) / 100;

    let totalVolume = (lenght * widght * height) / 1000;
    let occupiedArea = totalVolume * occupaidPercent;

    let waterNeeded = totalVolume - occupiedArea;

    console.log(waterNeeded);

}

fishTank(["105","77","89","18.5"]);