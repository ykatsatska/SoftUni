function toyShop(input) {
    let tripCost = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let toys = puzzles + dolls + bears + minions + trucks;
    let price = puzzles * 2.60 + dolls * 3.00 + bears * 4.10 + minions * 8.20 + trucks * 2.00;

    if (toys >= 50) {
         price = price * 0.75;
    }

    let totalPrice = price * 0.90;
    let diff = Math.abs(totalPrice - tripCost);

    if (totalPrice >= tripCost){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])

