function streamOfLetters(input) {
    let validLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let isCmet = false;
    let isOmet = false;
    let isNmet = false;

    let secretMessage = "";
    let secretWord = "";

    let index = 0;

    while (index < input.length) {
        let currentSymbol = input[index];
     

        for (let i = 0; i < validLetters.length; i++){
            let currentChar = validLetters[i];
            let isValid = currentSymbol === currentChar;

            if (isCmet === true && isOmet === true && isNmet === true) {
                secretMessage += secretWord + " ";
                secretWord = "";
                isCmet = false;
                isOmet = false;
                isNmet = false;
            }

            if (isValid){
                if (currentChar === "c"){
                    if (isCmet === false) {
                        isCmet = true;
                    } else {
                        secretWord += currentChar;
                    }
                } else if (currentChar === "o") {
                    if (isOmet === false) {
                        isOmet = true;
                    } else {
                        secretWord += currentChar;
                    }
                } else if (currentChar === "n") {
                    if (isNmet === false) {
                        isNmet = true;
                    } else {
                        secretWord += currentChar;
                }
            } else {
                secretWord += currentChar;
            }
        }
    }
    index++;  
    }
    console.log(secretMessage);

}
streamOfLetters([
"o",
"S",
"%",
"o",
"l",
"^",
"v",
"e",
"c",
"n",
"&",
"m",
"e",
"c",
"o",
"n",
"End"
])