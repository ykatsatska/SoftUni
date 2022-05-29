function weddingSeats(input){
    let lastSector = input[0];
    let validSectors = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let validPlaces = "abcdefghijklmnopqrstuvwxyz"
    let rowsInTheFirstSector = Number(input[1]);
    let placesInAnOddRow = Number(input[2]);
    let placesInAnEvenRow = placesInAnOddRow + 2;

    let placesCounter = 0;

    for (let s = 0; s < validSectors.length; s++){
        let currentSector = validSectors.charAt(s);
        if (currentSector > lastSector){
            break;
        }
        for (let r = 1; r <= rowsInTheFirstSector; r++){
            for (let p = 0; p < validPlaces.length; p++){
                let currentPlace = validPlaces.charAt(p);
                if (r % 2 !== 0 && p >= placesInAnOddRow){
                    break;
                } else if (r % 2 === 0 && p >= placesInAnEvenRow){
                    break;
                } else {
                    console.log(`${currentSector}${r}${currentPlace}`); 
                    placesCounter++;
                }
            }
        }
        rowsInTheFirstSector++;
    }
    console.log(placesCounter);
}
weddingSeats([
"C",
"4",
"2"]);