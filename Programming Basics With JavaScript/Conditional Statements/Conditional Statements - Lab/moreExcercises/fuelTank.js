function fuelTank(input){
    let type = input[0];
    let litres = Number(input[1]);
    
   if (type === "Diesel" || type === "Gasoline" || type === "Gas"){
       if (litres >= 25){
            console.log(`You have enough ${type.toLowerCase()}.`);

       } else if (litres < 25){
            console.log(`Fill your tank with ${type.toLowerCase()}!`);
       }
   } else {
       console.log("Invalid fuel!");
   }
}
fuelTank(["gas", "40"]);