function matchTickets(input){
    let budget = Number(input[0]);
    let category = input[1];
    let people = Number(input[2]);

    let transportcosts = 0;
    let percent = 0;

    if (people > 0 && people < 5){
        percent = 0.75;
    } else if (people >= 5 && people < 10){
        percent = 0.60;
    } else if (people >= 10 && people < 25){
        percent = 0.50;
    } else if (people >= 25 && people < 50){
        percent = 0.40;
    } else if (people >= 50){
        percent = 0.25;
    }
    transportcosts = budget * percent;

    let budgetForTickets = budget - transportcosts;
    
    let price = 0;
    switch(category){
        case "VIP":
             price = 499.99;
            break;
        default:
             price = 249.99;
            break;
    }
    
    let ticketCosts = price * people;
    let totalCosts = ticketCosts + transportcosts;
    let diff = Math.abs(budget - totalCosts);
    if (ticketCosts <= budgetForTickets){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }

}
matchTickets(["30000","VIP", "49"]);