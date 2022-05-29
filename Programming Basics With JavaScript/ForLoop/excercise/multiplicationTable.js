function multiplicationTable(input){
    let multiplier = Number(input[0]);

    for (let i = 1; i <= 10; i++){
        console.log(`${i} * ${multiplier} = ${i * multiplier}`)
    }
}
multiplicationTable(["5"]);