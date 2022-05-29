function numbersDivisibleBy9(input){
    let firstN = Number(input[0]);
    let finalN = Number(input[1]);
    let sum = 0;
    let outputNumbers = [];

    for (let i = firstN; i <= finalN; i++){
        if (i % 9 === 0) {
            sum += i;
            outputNumbers.push(i);

        }
    }
    console.log(`The sum: ${sum}`);

    for (let i = 0; i < outputNumbers.length; i++){
        console.log(outputNumbers[i]);
    }    
    
}
numbersDivisibleBy9(["100", "200"])