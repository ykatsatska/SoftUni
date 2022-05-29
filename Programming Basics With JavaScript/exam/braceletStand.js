function braceletStand(input) {
    let pocketMoneyPerDay = Number(input[0]);
    let profitPerDay = Number(input[1]);
    let totalPeriodCosts = Number(input[2]);
    let giftPrice = Number(input[3]);
    let periodInDays = 5;

    let totalMoneySaved = periodInDays * (pocketMoneyPerDay + profitPerDay) - totalPeriodCosts;
    let diff = Math.abs(totalMoneySaved - giftPrice);

    if (totalMoneySaved >= giftPrice) {
        console.log(`Profit: ${totalMoneySaved.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${diff.toFixed(2)} BGN.`);
    }
}
braceletStand([
"2.10",
"17.50",
"20.20",
"148.50"

])