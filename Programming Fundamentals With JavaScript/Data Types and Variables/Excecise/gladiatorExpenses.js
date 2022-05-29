function gladiatorExpenses(lostCount, helmetPr, swordPr, shieldPr, armorPr) {
   
    let shieldBreakCounter = 0;
    let totalPrice = 0;

    for (let currentFight = 1; currentFight <= lostCount; currentFight++) {

        if (currentFight % 6 === 0) {
            totalPrice += shieldPr;
            totalPrice += helmetPr;
            totalPrice += swordPr;
            shieldBreakCounter++;

            if (shieldBreakCounter % 2 === 0 && shieldBreakCounter > 0) {
                totalPrice += armorPr;
            }
            
        } else if (currentFight % 2 === 0) {
            totalPrice += helmetPr;
        } else if (currentFight % 3 === 0) {
            totalPrice += swordPr;
        }
    }
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    );