function firm(input){
    let hoursNeeded = Number(input[0]);
    let days = Number(input[1]) * 0.9;
    let employees = Number(input[2]);
    let workingHours = Math.floor(days * 8 + employees * Number(input[1]) * 2);

    let diff = Math.abs(hoursNeeded - workingHours);

    if (workingHours >= hoursNeeded){
        console.log(`Yes!${diff} hours left.`);
    } else {
        console.log(`Not enough time!${diff} hours needed.`)
    }
}
firm(["99", "3", "1"]);