function bills(input){
    let index = 0;
    let months = Number(input[index]);
    index++;

    let electricity = 0;
    let water = 20 * months;
    let internet = 15 * months;
    let totalEl = 0;
    let others = 0;


    for (let i = 0; i < months; i++){
        electricity = Number(input[index]);
        index++;

        totalEl += electricity;
        others += (electricity + 15 + 20) * 1.2;
    }
    let average = (totalEl + water + internet + others) / months;

    console.log(`Electricity: ${totalEl.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);

}
bills([5,
    68.63,
    89.25,
    132.53,
    93.53,
    63.22
    ])