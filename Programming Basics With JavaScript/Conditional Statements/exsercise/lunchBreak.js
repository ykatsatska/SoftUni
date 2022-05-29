function lunchBreak(input){
    let series = input[0];
    let seriesLenght = Number(input[1]);
    let breakLenght = Number(input[2]);
    let lunchTime = breakLenght / 8;
    let relaxTime = breakLenght / 4;
    let timeLeft = breakLenght - lunchTime - relaxTime;

    let diff = Math.abs(timeLeft - seriesLenght);

    if (timeLeft >= seriesLenght){
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(diff)} minutes free time.`);
        
    } else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(diff)} more minutes.`)
    }
}
lunchBreak(["Teen Wolf",
"48",
"60"])

