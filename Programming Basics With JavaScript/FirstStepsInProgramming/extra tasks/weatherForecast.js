function weatherForecast([arg1]){
    let weather = arg1;

    if (weather === "sunny"){
        console.log("It's warm outside!");
    } else {
        console.log("It's cold outside!");
    }
}

weatherForecast(["Sunny"]);