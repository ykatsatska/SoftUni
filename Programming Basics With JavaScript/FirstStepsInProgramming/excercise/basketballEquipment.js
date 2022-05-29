function basketballEquipment(input){
    let tax = Number(input[0]);
    let sneakers = tax - 0.4 * tax;
    let clothes = sneakers - 0.2 * sneakers;
    let ball = 0.25 * clothes;
    let accessories = 0.2 * ball;

    let total = tax + sneakers + clothes + ball + accessories;

    console.log(total);


}
basketballEquipment(["550"]);