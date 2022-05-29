function challengeTheWedding(input) {
    let menCount = Number(input[0]);
    let womenCount = Number(input[1]);
    let tables = Number(input[2]);
    let date = "";
    let dateCounter = 0;

    for (let m = 1; m <= menCount; m++){
        for (let w = 1; w <= womenCount; w++){
            dateCounter++;
            if (dateCounter > tables){
                break;
            }
            date +="" + `(${m} <-> ${w})` + " ";
        }
    }
console.log(date)
}
challengeTheWedding([
    "5",
    "8",
    "10"
    ])