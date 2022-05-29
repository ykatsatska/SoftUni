function footballLeague(input){
    let index = 0;
    let capacity = Number(input[index]);
    index++;
    let fans = Number(input[index]);
    index++;

    let aCounter = 0;
    let bCounter = 0;
    let vCounter = 0;
    let gCounter = 0;

    for (let i = 0; i < fans; i++){
        let sector = input[index];
        index++;

        if (sector === "A"){
            aCounter++;
        } else if (sector === "B"){
            bCounter++;
        } else if (sector === "V"){
            vCounter++;
        } else {
            gCounter++;
        }
    }
    console.log((aCounter / fans * 100).toFixed(2) + "%");
    console.log((bCounter / fans * 100).toFixed(2) + "%");
    console.log((vCounter / fans * 100).toFixed(2) + "%");
    console.log((gCounter / fans * 100).toFixed(2) + "%");
    console.log((fans / capacity * 100).toFixed(2) + "%");




}
footballLeague([76,
    10,
    "A",
    "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B"])