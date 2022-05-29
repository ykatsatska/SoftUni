function vacation(input){
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let location = 0;
    let accommodation = 0;

    
    switch (season){
        case "Summer": location = "Alaska"; break;
        case "Winter": location = "Morocco"; break;
    }
    if (budget <= 1000){
        accommodation = "Camp";
        switch (season){
            case "Summer":
                price = budget * 0.65;
                break;
            case "Winter":
                price = budget * 0.45;
                break;
        }
    } else if (budget > 1000 && budget <= 3000){
        accommodation = "Hut";
        switch (season){
            case "Summer":
                price = budget * 0.80;
                break;
            case "Winter":
                price = budget * 0.60;
                break;
        }
    } else {
        accommodation = "Hotel";
        price = budget * 0.9;
    }

    console.log(`${location} - ${accommodation} - ${price.toFixed(2)}`);
}
vacation([800, "Summer"])