function highJump(input) {
    let index = 0;
    let targetHeight = Number(input[index++]);
    let initialHeight = targetHeight - 30;

    let jumpCounter = 0;
    let currentJump = Number(input[index]);
    let failCounter = 0;

    while (true) {
        jumpCounter++;

        if (currentJump > targetHeight && initialHeight >= targetHeight){
            console.log(`Tihomir succeeded, he jumped over ${targetHeight}cm after ${jumpCounter} jumps.`);
            break;
        }

        if (initialHeight < currentJump) {
            failCounter = 0;
            initialHeight += 5;
        } else {
            failCounter++;
            if (failCounter === 3){
                console.log(`Tihomir failed at ${initialHeight}cm after ${jumpCounter} jumps.`);
                break;
            }
        }
        currentJump = input[++index];
    }
}
highJump(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"])

