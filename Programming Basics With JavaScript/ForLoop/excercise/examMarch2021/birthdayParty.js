function birthdayParty(input){
    let rent = Number(input[0]);

    let cake = rent * 0.2;
    let drinks = cake - 0.45 * cake;
    let animator = rent / 3;

    let budget = rent + cake + drinks + animator;
    
    console.log(budget.toFixed(1));
}
birthdayParty([2250])