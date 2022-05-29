function flowerShop(input){
    let magnolia = Number(input[0]);
    let zumbul = Number(input[1]);
    let roses = Number(input[2]);
    let cactus = Number(input[3]);
    let giftPrice = Number(input[4]);

    let total = 0.95 * (magnolia * 3.25 + roses * 3.50 + zumbul * 4 + cactus * 8);

    let diff = Math.abs(total - giftPrice);

    if (total >= giftPrice){
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`)
    }
}
flowerShop(["15", "7", "5", "10", "100"])