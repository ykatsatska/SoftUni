function bitcoinMining(input) {
    let index = 0;
    let currentDay = 0;
    let moneyTotal = 0;
    let firstPurchaseDate = 0;
    let hasPurchased = false;

    while (currentDay < input.length) {
        currentDay++;
        let goldDugForAday = input[index];

        if (currentDay % 3 === 0) {
            goldDugForAday *= 0.7;
        }
        moneyTotal += goldDugForAday * 67.51;

        if (moneyTotal >= 11949.16 && hasPurchased === false) {
            hasPurchased = true;
            firstPurchaseDate = currentDay;

        }
        index++;
    }
    let boughtBitcoins = Math.floor(moneyTotal / 11949.16);
    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if (hasPurchased === true) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchaseDate}`);
    }
    let moneyleft = moneyTotal - boughtBitcoins * 11949.16;
    console.log(`Left money: ${moneyleft.toFixed(2)} lv.`);
}
bitcoinMining([50, 100]);