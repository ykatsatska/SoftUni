function worldSwimmingRecord(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let slow = Math.floor(distance / 15) * 12.5;
    let time = distance * timePerMeter + slow;

    if (time >= record){
        let diff = time - record;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);

    } else {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)
    }
}

worldSwimmingRecord(["55555.67",
"3017",
"5.03"])

