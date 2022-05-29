function multiplyBy2(input){
    let index = 0;

    for (let i = 0; i <= input.length; i++){
        let number = input[index];
        index++;
        if (number >= 0){
            let sum = number * 2;
            console.log(`Result: ${sum.toFixed(2)}`);
        } else {
            console.log("Negative number!");
            break;
        } 

    }
}
multiplyBy2([12,
    43.2144,
    12.3,
    543.23,
    -20,
    ])