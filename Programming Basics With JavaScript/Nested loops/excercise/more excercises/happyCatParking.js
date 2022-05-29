function happyCatParking(input){
    let days = Number(input[0]);
    let hoursPerDay = Number(input[1]);

    let dailyCosts = 0;
    let total = 0;

    for (let day = 1; day <= days; day++){
        for (let hour = 1; hour <= hoursPerDay; hour++){
            if (day % 2 === 0 && hour % 2 !== 0){
                dailyCosts += 2.50;
            } else if (day % 2 !== 0 && hour % 2 === 0){
                dailyCosts += 1.25;
            } else {
                dailyCosts += 1;
            }
        }
        console.log(`Day: ${day} - ${dailyCosts.toFixed(2)} leva`);
        total += dailyCosts
        dailyCosts = 0;
    }
    console.log(`Total: ${total.toFixed(2)} leva`);
}
happyCatParking([
"5",
"2"
])