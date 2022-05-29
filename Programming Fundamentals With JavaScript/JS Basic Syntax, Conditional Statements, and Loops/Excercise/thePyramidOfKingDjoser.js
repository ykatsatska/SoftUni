function thePyramidOfKingDjoser(base, increment) {
    let stoneRequired = 0;
    let finalStepSide = 0;
    let goldRequired = 0;
    let lapisRequired = 0;
    let marbleRequired = 0;
    let floor = 0;
    let isLastFloor = false;
    for (let baseSide = base; baseSide >= 1; baseSide -= 2){
        floor++;
        
        if (baseSide <= 2){
            finalStepSide = baseSide;
            isLastFloor = true;
        }

        let stonePerFloor = (baseSide - 2) * (baseSide - 2) * increment;
        
        if (isLastFloor === false){
            stoneRequired += stonePerFloor;
        }
        

        if (floor % 5 === 0 && isLastFloor === false){
            let lapisPerFloor = baseSide * baseSide * increment - stonePerFloor;
            lapisRequired += lapisPerFloor;
        } else if (floor % 5 !== 0 && isLastFloor === false) { 
            let marblePerFloor = baseSide * baseSide * increment - stonePerFloor;
            marbleRequired += marblePerFloor;
        }
    }
    
    goldRequired = finalStepSide * finalStepSide * increment;
    let height = floor * increment;
    console.log(`Stone required: ${Math.ceil(stoneRequired)}`);
    console.log(`Marble required: ${Math.ceil(marbleRequired)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisRequired)}`);
    console.log(`Gold required: ${Math.ceil(goldRequired)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}
thePyramidOfKingDjoser(23, 0.5);