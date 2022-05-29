function hotelRoom(input){
    let month = input[0];
    let nights = Number(input[1]);
    let apartmentPrice = 0;
    let studioPrice = 0;

    switch(month){
        case "May":
        case "October":
            apartmentPrice = 65;
            studioPrice = 50;
            if (nights > 7 && nights < 14){
                studioPrice = studioPrice * 0.95;
            } else if (nights > 14){
                studioPrice = studioPrice * 0.7;
                apartmentPrice = apartmentPrice * 0.9;
            } 
            break;
        case "June":
        case "September":
            apartmentPrice = 68.7;
            studioPrice = 75.2;
            if (nights > 14){
                studioPrice = studioPrice * 0.8;
                apartmentPrice = apartmentPrice * 0.9;
            } 
            break;
        case "July":
        case "August":
            apartmentPrice = 77;
            studioPrice = 76;
            if (nights > 14){
                apartmentPrice = apartmentPrice * 0.9;
            } 
            break;
    }
    let totalApPrice = nights * apartmentPrice;
    let totalStPrice = nights * studioPrice
    console.log(`Apartment: ${totalApPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStPrice.toFixed(2)} lv.`);


}
hotelRoom(["August",
"20"])


