function depositCalculator(input){
    let depositedSum = Number(input[0]);
    let totalmonthsDeposited = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let interestRateforYear = depositedSum * (annualInterestRate/100)
    let interestRateforMonth = interestRateforYear / 12

    let sumToReceive = depositedSum + totalmonthsDeposited * interestRateforMonth
    console.log(sumToReceive)




}
depositCalculator (["2350","6","7"])