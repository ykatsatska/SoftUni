function trainingLab(input){
    let w = Number(input[0]) * 100;
    let h = Number(input[1]) * 100;

    let collumnNumber = Math.trunc((h - 100) / 70);

    let rowNumber = Math.trunc(w / 120);

    let places = collumnNumber * rowNumber - 3;

    console.log(places);
}

trainingLab(["8.4", "5.2"])