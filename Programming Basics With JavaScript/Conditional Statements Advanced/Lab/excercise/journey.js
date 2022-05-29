function journey(input){
    let budget = Number(input[0]);
    let season = input[1];

    let percent = 0;
    let accommodation = 0;
    let price = 0;
    let destination = 0;

    
    if (budget <= 100 && season === "summer"){
        destination = "Bulgaria";
        price = budget * 0.3;
        accommodation = "Camp";
    } else if (budget <= 100 && season === "winter"){
        destination = "Bulgaria";
        price = budget * 0.7;
        accommodation = "Hotel";
    }  else if (budget <= 1000 && season === "summer"){
        destination = "Balkans";
        price = budget * 0.4;
        accommodation = "Camp";
    }  else if (budget <= 1000 && season === "winter"){
        destination = "Balkans";
        price = budget * 0.8;
        accommodation = "Hotel";
    } else {
        destination = "Europe";
        price = budget * 0.9;
        accommodation = "Hotel";
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${accommodation} - ${price.toFixed(2)}`);

}
journey(["75", "winter"])

