function truckDriver(input){
    let season = input[0];
    let km = Number(input[1]);
    let salary = 0;
    // 1 season = 4 months

    if (km <= 5000){
        switch(season){
            case "Spring":
            case "Autumn":
                salary = 0.75 * km * 4;
                break;
            case "Summer":
                salary = 0.90 * km * 4;
                break;
            case "Winter":
                salary = 1.05 * km * 4;
                break;
        }
    } else if (km > 5000 && km <= 10000){
        switch(season){
            case "Spring":
            case "Autumn":
                salary = 0.95 * km * 4;
                break;
            case "Summer":
                salary = 1.10 * km * 4;
                break;
            case "Winter":
                salary = 1.25 * km * 4;
                break;
        }

    } else {
        salary = 1.45 * km * 4;
    }
    salary = salary * 0.9;
    console.log(salary.toFixed(2));
}
truckDriver(["Summer", 3455])