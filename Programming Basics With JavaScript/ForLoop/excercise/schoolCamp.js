function schoolCamp(input){
    let season = input[0];
    let groupType = input[1];
    let students = Number(input[2]);
    let days = Number(input[3]);

    let hotelCosts = 0;
    let sport = 0;

    switch(season){
        case "Winter":
            if (groupType === "girls"){
                hotelCosts = 9.6;
                sport = "Gymnastics";
            } else if (groupType === "boys"){
                hotelCosts = 9.6;
                sport = "Judo";
            } else {
                hotelCosts = 10;
                sport = "Ski";
            }
            break;
        case "Spring":
            if (groupType === "girls"){
                hotelCosts = 7.2;
                sport = "Athletics";
            } else if (groupType === "boys"){
                hotelCosts = 7.2;
                sport = "Tennis";
            } else {
                hotelCosts = 9.5;
                sport = "Cycling";
            }
            break;
        case "Summer":
            if (groupType === "girls"){
                hotelCosts = 15;
                sport = "Volleyball";
            } else if (groupType === "boys"){
                hotelCosts = 15;
                sport = "Football";
            } else {
                hotelCosts = 20;
                sport = "Swimming";
            }
            break;
    }
    let costs = hotelCosts * days * students;
    
    if (students >= 50){
        costs = costs * 0.5;
    } else if (students >= 20 && students < 50){
        costs = costs * 0.85;
    } else if (students >= 10 && students < 20){
        costs = costs * 0.95;
    }
    console.log(`${sport} ${costs.toFixed(2)} lv.`);
}
schoolCamp(["Winter",
    "mixed",
    9,
    15,
    ])