function changeBureau(input){
    let bitcoins = Number(input[0]);
    let iuans = Number(input[1]);
    let commission = Number(input[2]);

    let bitcoinsIntoLv = bitcoins * 1168;
    let iuansIntoLv = (iuans * 0.15) * 1.76;
    let euro = (bitcoinsIntoLv + iuansIntoLv) / 1.95;
    let total = euro - euro * (commission / 100);

    console.log(total.toFixed(2));
}
changeBureau(["1",
"5",
"5"])
