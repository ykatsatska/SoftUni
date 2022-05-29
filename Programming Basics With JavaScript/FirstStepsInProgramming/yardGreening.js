function yard(input){
let space = Number(input[0]);
let fullprice = 7.61 * Number(space);
let discount = 0.18 * Number(fullprice);
let finalprice = Number(fullprice) - Number(discount);

console.log(`The final price is: ${finalprice} lv.`)
console.log(`The discount is: ${discount} lv.`)

}

yard(["150"])