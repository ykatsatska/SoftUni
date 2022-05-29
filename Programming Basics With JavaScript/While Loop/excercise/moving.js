function moving(input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;

    let roomSize = w * h * l;
    let command = input[index];
    index++;

    while (command !== "Done") {
        let boxes = Number(command);
        roomSize -= boxes;

        if (roomSize < 0) {
            console.log(`No more free space! You need ${Math.abs(roomSize)} Cubic meters more.`);
            break;
        }

        command = input[index];
        index++;
    }
    if (roomSize > 0 && command === "Done") {
        console.log(`${Math.abs(roomSize)} Cubic meters left.`)
    } 
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

