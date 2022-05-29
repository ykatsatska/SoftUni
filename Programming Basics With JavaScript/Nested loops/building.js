function building(input) {
    let floors = Number(input[0]);
    let roomsPerFloor = Number(input[1]);

    for (let f = floors; f > 0; f--) {
        
        let floor = "";
        for (let r = 0; r < roomsPerFloor; r++) {
            if (f === floors) {
                floor += `L${f}${r} `;
            } 
            if (f % 2 === 0 && f !== floors) {
                floor += `O${f}${r} `;
            } 
            if (f % 2 !== 0 && f !== floors) {
                floor += `A${f}${r} `;
            }
        }
        console.log(floor)
    }
}
building(["9", "5"])



