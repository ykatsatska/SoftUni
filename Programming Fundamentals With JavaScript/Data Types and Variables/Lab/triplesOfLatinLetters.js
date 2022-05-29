function triplesOfLatinLetters(num) {
    
    for (let first = 0; first < num; first++){
        let a = String.fromCharCode(97 + first);
        for (let second = 0; second < num; second++) {
            let b = String.fromCharCode(97 + second);
            for (let third = 0; third < num; third++){
                let c = String.fromCharCode(97 + third);
                console.log(a + b + c);
            }
        }
    }
}
triplesOfLatinLetters(3);