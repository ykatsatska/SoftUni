function easterDecoration(input) {
    let index = 0;
    let clients = Number(input[index++]);

    let clientCounter = 0;
    let amountPerCustomer = 0;
    let itemCounter = 0;
    let totalAmount = 0;

    while (clientCounter < clients){
        let purchase = input[index++];

        if (purchase === "Finish"){
            if (itemCounter % 2 === 0){
                amountPerCustomer = amountPerCustomer * 0.8;
            }
            console.log(`You purchased ${itemCounter} items for ${amountPerCustomer.toFixed(2)} leva.`)
            clientCounter++;
            totalAmount += amountPerCustomer;
            amountPerCustomer = 0;
            itemCounter = 0;
        } else {
            itemCounter++;
            switch (purchase) {
                case "basket": amountPerCustomer += 1.5; break;
                case "wreath": amountPerCustomer += 3.8; break;
                case "chocolate bunny": amountPerCustomer += 7; break;
            }
        }        
    }
    console.log(`Average bill per client is: ${(totalAmount / clients).toFixed(2)} leva.`)
}
easterDecoration(["2",
"basket",
"wreath",
"chocolate bunny",
"Finish",
"wreath",
"chocolate bunny",
"Finish"])
