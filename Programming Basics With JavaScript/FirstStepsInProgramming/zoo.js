function petshop(input){
    let dogfood = 2.50;
    let catfood = 4;
    let sum = Number(dogfood) * input[0] + Number(catfood) * input[1];

    console.log(`${sum} lv.`)
}
petshop(["5","4"])