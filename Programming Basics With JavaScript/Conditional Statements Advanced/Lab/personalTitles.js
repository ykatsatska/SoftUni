function personalTitles(input){
    let age = Number(input[0]);
    let sex = input[1];

    if (sex == "m"){
        if (age >= 0 && age < 16){
            console.log("Master");
        } else if (age >= 16){
            console.log("Mr.");
        }
    } else {
        if (age >= 0 && age < 16){
            console.log("Miss");
        } else if (age >= 16){
            console.log("Ms.");
        } 
    }

}

personalTitles(["12",
"f"])