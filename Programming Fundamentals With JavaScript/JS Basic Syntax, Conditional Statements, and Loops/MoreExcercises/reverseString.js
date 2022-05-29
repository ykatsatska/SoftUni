function reverseString(word) {
    let printLine = '';

    for (let i = word.length - 1; i >= 0; i--) {
        let currentLetter = word[i];
        printLine += currentLetter;
    }
    console.log(printLine);
}
reverseString('Hello');