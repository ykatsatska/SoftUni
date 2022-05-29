function salary(input){
    let index = 0;
    let tabs = Number(input[index]);
    index++;
    let payCheck = Number(input[index]);
    index++;


    for(let i = 0; i < tabs; i++){
        let name = input[index];
        index++;
        switch(name){
            case "Facebook": payCheck -= 150; break;
            case "Instagram": payCheck -= 100; break;
            case "Reddit": payCheck -= 50; break;
        }
        if (payCheck <= 0){
            console.log("You have lost your salary.");
            break;
        }
    }
    
    if (payCheck > 0){
        console.log(payCheck);
    }
}
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])
