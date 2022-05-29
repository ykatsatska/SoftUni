function reportSystem(input) {
    let index = 0;
    let expectedAmount = Number(input[index++]);
    let command = input[index];
    let cashPaymentCounter = 0;
    let cardPaymentCounter = 0;
    let totalCashPaymentAmount = 0;
    let totalCardPaymentAmount = 0;
    let totalAmount = 0;
    let isEnough = false;

    while (command !== "End"){
        let currentAmount = Number(command);

        if (index % 2 !== 0) {

            if (currentAmount > 100) {
                console.log("Error in transaction!");
            } else {
                totalAmount += currentAmount;
                cashPaymentCounter++;
                totalCashPaymentAmount += currentAmount;
                console.log("Product sold!");
            }
        } else {
            if (currentAmount < 10) {
                console.log("Error in transaction!");
            } else {
                totalAmount += currentAmount;
                cardPaymentCounter++;
                totalCardPaymentAmount += currentAmount;
                console.log("Product sold!");
            }
        }  
            if (totalAmount >= expectedAmount) {
                
                let averageCashPayment = totalCashPaymentAmount / cashPaymentCounter;
                let averageCardPayment = totalCardPaymentAmount / cardPaymentCounter;
                
                console.log(`Average CS: ${averageCashPayment.toFixed(2)}`);
                console.log(`Average CC: ${averageCardPayment.toFixed(2)}`);
            break;
        }
        command = input[++index];
        if (command === "End"){
            console.log("Failed to collect required money for charity.");
        }  
    }
}
reportSystem([
"500",
"120",
"8",
"63",
"256",
"78",
"317"

    
])