function sleepyTomCat(input){
    let daysOff = Number(input[0]);
    let workingDays = 365 - daysOff;
    let playLimit = 30000;

    let playTime = daysOff * 127 + workingDays * 63;
    let diff = Math.abs(playLimit - playTime);
    
    let hours = Math.floor(diff / 60);
    let minutes = diff % 60;

    if (playTime <= playLimit){
        console.log("Tom sleeps well");
        console.log(`${Math.trunc(hours)} hours and ${Math.trunc(minutes)} minutes less for play`);
        
    } else {
        console.log("Tom will run away");
        console.log(`${Math.trunc(hours)} hours and ${Math.trunc(minutes)} minutes more for play`);

    }

}
sleepyTomCat(["113"]);