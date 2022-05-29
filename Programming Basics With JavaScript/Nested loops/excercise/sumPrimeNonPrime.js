function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++;

    let sumPrimeNum = 0;
    let sumNonPrimeNum = 0;

    while (command !== "stop") {
        let currentNum = Number(command);

        if (currentNum < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }
        if (currentNum === 1) {
            sumPrimeNum += currentNum;
            command = input[index];
            index++;
            continue;
        }
        let isNonPrime = false;
        for (let x = 2; x < currentNum; x++) {
            if (currentNum % x === 0) {
                isNonPrime = true;
                break;
            
        }
    }
    if (isNonPrime) {
        sumNonPrimeNum += currentNum;
    } else {
        sumPrimeNum += currentNum;
    }
    command = input[index];
    index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNum}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNum}`);
}
sumPrimeNonPrime(["0",
"-9",
"0",
"stop"])

