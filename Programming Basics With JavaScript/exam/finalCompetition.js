function finalCompetition(input) {
    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];
    let prize = dancers * points;
    let costsInPercent = 0;

    if (place === "Abroad") {
        prize += 0.5 * prize;
    } 
    if (place === "Bulgaria" && season === "summer") {
        costsInPercent = 0.05;
    } else if (place === "Bulgaria" && season === "winter") {
        costsInPercent = 0.08;
    } else if (place === "Abroad" && season === "summer") {
        costsInPercent = 0.1;
    } else if (place === "Abroad" && season === "winter") {
        costsInPercent = 0.15;
    }
    prize -= prize * costsInPercent;
    let charityMoney = 0.75 * prize;
    prize -= charityMoney;

    let prizePerDancer = prize / dancers;

    console.log(`Charity - ${charityMoney.toFixed(2)}`);
    console.log(`Money per dancer - ${prizePerDancer.toFixed(2)}`);

}
finalCompetition(["25",
"98",
"winter",
"Bulgaria"])

