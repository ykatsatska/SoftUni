function profit(input){
    let oneLvCoins = Number(input[0]);
    let twoLvCoins = Number(input[1]);
    let fiveLvBills = Number(input[2]);
    let sum = Number(input[3]);

    for (let oneLv = 0; oneLv <= oneLvCoins; oneLv++){
        for (let twoLv = 0; twoLv <= twoLvCoins; twoLv++){
            for (let fiveLv = 0; fiveLv <= fiveLvBills; fiveLv++){
                if (oneLv * 1 + twoLv * 2 + fiveLv * 5 === sum){
                    console.log(`${oneLv} * 1 lv. + ${twoLv} * 2 lv. + ${fiveLv} * 5 lv. = ${sum} lv.`);
                } 
            }
        }
    }

}
profit([
"5",
"3",
"1",
"7"
    
])