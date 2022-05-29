function cake(input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let cakeSize = w * l;
    let isCake = true;

    let command = input[index];
    index++;

    while (command !== "STOP") {
        let piecesTaken = Number(command);
        cakeSize -= piecesTaken;

        if (cakeSize < 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "STOP" && cakeSize >=0) {
        console.log(`${cakeSize} pieces are left.`);
    }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])
