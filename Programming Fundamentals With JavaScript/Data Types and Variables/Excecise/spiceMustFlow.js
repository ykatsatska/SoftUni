function spiceMustFlow(startingYield) {
    let dayCounter = 0;
    let spicesInStorage = 0;

    while (startingYield >= 100) {
        dayCounter++;
        spicesInStorage += startingYield - 26;
        startingYield -= 10;
    }
    if (spicesInStorage >= 26) {
        spicesInStorage -= 26;
    }
    console.log(dayCounter);
    console.log(spicesInStorage);
}
spiceMustFlow(450);
