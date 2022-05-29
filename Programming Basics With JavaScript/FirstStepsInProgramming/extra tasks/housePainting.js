function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let frontWallsarea = x * x * 2 - 1.2 * 2;
    let sideWallsArea = x * y * 2 - 1.5 * 1.5 * 2;
    let greenPaintArea = frontWallsarea + sideWallsArea;
    let greenPaintNeeded = greenPaintArea / 3.4;

    let roofArea = 2 * (x * y) + 2 * (x * h / 2);
    let redPaintNeeded = roofArea / 4.3;

    
    console.log(greenPaintNeeded.toFixed(2));
    console.log(redPaintNeeded.toFixed(2));

}

housePainting(["6","10","5.2"])

