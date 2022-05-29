function rightPlace(word, char, correctWord) {
    let res = word.replace('_', char);
    
    console.log(res === correctWord ? "Matched" : "Not Matched");

}
rightPlace('Str_ng', 'I', 'Strong');