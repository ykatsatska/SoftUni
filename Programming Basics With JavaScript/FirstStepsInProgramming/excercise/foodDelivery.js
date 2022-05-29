function foodDelivery(input){
    let chickenTotal = Number(input[0]) * 10.35;
    let fishTotal = Number(input[1]) * 12.40;
    let veggieTotal = Number(input[2]) * 8.15;
    let dessert = (chickenTotal + fishTotal + veggieTotal) * 0.20;

    let sum = chickenTotal + fishTotal + veggieTotal + dessert + 2.50;

    console.log(sum);



}

foodDelivery(["9","2","6"])