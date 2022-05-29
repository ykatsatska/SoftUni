function pipesInPool(input){
    let volume = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let hours = Number(input[3]);

    let pipe1 = p1 * hours;
    let pipe2 = p2 * hours;
    let fullness = (pipe1 + pipe2);

    if (fullness <= volume){
        let percent = fullness / volume * 100;
        let pipe1InP = pipe1 / fullness * 100;
        let pipe2InP = pipe2 / fullness * 100;

        console.log(`The pool is ${percent.toFixed(2)}% full. Pipe 1: ${pipe1InP.toFixed(2)}%. Pipe 2: ${pipe2InP.toFixed(2)}%.`);

    } else {
        let diff = Math.abs(fullness - volume);

        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${diff.toFixed(2)} liters.`);


    }


}
pipesInPool(["100", "100", "100", "2.5"])