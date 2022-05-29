function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;
    let  student = 0;
    let standart = 0;
    let kid = 0;
    let totalTickets = 0;
    

    while (command !== "Finish") {
        let name = command;
        let capacity = Number(input[index]);
        index++;
        
        let type = input[index];
        index++;

        let tempTicketCounter = 0;

        while(type !== "End") {
            switch (type) {
                case "student": student++; break;
                case "standard": standart++; break;
                case "kid": kid++; break;
            }
            tempTicketCounter++;

            if (tempTicketCounter >= capacity) {
                break;
            }
            type = input[index];
            index++;
        }
        let occupation = tempTicketCounter / capacity * 100;
        totalTickets += tempTicketCounter;
        
        console.log(`${name} - ${occupation.toFixed(2)}% full.`);
        command = input[index];
        index++;
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(student / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standart / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid / totalTickets * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"
])