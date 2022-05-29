function specialNumbers(num) {
    
    for (let j = 1; j <= num; j++){
        let currentNum = j;
        let sum = 0;

        while (currentNum > 0) {
            sum += currentNum % 10;
            currentNum = Math.floor(currentNum / 10)
        }
        if (sum === 5 || sum === 7 || sum === 11){
            console.log(`${j} -> True`); 
        } else {
            console.log(`${j} -> False`); 
        }
    }  
}
specialNumbers(15);