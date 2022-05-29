function mountainRun(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let seconds = Number(input[2]);

    let slowingTimes = Math.floor(distance / 50);
    let totalTime = distance * seconds + slowingTimes * 30;

    if (totalTime < record){
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let diff = Math.abs(totalTime - record);
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
    }
}
mountainRun([10164,
    1400,
    25
    ])