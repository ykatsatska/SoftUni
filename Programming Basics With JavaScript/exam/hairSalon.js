function hairSalon(input) {
    let index = 0;
    let target = Number(input[index]);
    index++;
    let commmand = input[index];
    index++;

    let revenue = 0;

    while (commmand !== "closed") {
        let service = commmand;
        let type = input[index];
        index++;

        if (revenue >= target){
            console.log("You have reached your target for the day!");
            break;
        }
        
        if (service === "haircut") {
            if (type === "mens") {
                revenue += 15;
            } else if (type === "ladies") {
                revenue += 20;
            } else {
                revenue += 10;
            }
        } else {
            if (type === "touch up") {
                revenue += 20;
            } else {
                revenue += 30;
            }
        }
        commmand = input[index];
        index++;
    }
    if (revenue < target) {
        console.log(`Target not reached! You need ${target - revenue}lv. more.`)
    } 
        console.log(`Earned money: ${revenue}lv.`);
}
hairSalon(["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"])
