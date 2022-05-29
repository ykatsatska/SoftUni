function weatherForecast2(input){
    let num = Number(input[0]);

    if (num > 35){
        console.log("unknown");
    }else if (num >=26){
        console.log("Hot");
    }else if (num >= 20.1){
        console.log("Warm");
    }else if (num >= 15){
        console.log("Mild");
    }else if (num >= 12){
        console.log("Cool");
    }else if (num >= 5){
        console.log("Cold");
    }else{
        console.log("unknown");
    }        
}

weatherForecast2(["27"])