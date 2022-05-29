function christmasPreparation(input) {
    let rollsPackingPaper = Number(input[0]);
    let rollsFabric = Number(input[1]);
    let glue = Number(input[2]);
    let discountPercent = Number(input[3]);

    let sum = (rollsPackingPaper * 5.80 + rollsFabric * 7.20 + glue * 1.20);
    let finalSum = sum - (sum * discountPercent / 100);

    console.log(finalSum.toFixed(3));
}
christmasPreparation([
"4",
"2",
"5",
"13"
])