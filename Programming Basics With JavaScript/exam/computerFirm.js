function computerFirm(input) {
    let index = 0;
    let computers = Number(input[index]);
    index++;
    let rate = 0;
    let possibleSales = 0;
    let totalRate = 0;
    let sales = 0;
    let totalSales = 0;

    for (let i = 0; i < computers; i++) {
        let num = Number(input[index]);
        index++;
        rate = num % 10;
        possibleSales = Math.floor(num / 10);

        switch(rate) {
            case 2: sales = 0; break;
            case 3: sales = possibleSales * 0.5; break;
            case 4: sales = possibleSales * 0.7; break;
            case 5: sales = possibleSales * 0.85; break;
            case 6: sales = possibleSales; break;
        }

        totalRate += rate;
        totalSales += sales;
    }
    let avgRate = totalRate / computers;

    console.log(totalSales.toFixed(2));
    console.log(avgRate.toFixed(2));
}
computerFirm(["5",
"122",
"156",
"202",
"214",
"185"])
