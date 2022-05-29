function time15Minutes(input) {
    let h = Number(input[0]);
    let m = Number(input[1]);

    let add = h * 60 + m + 15;
    let hours = Math.floor(add / 60);
    let minutes = add % 60;

    if (hours == 24){
        hours = 00;
    }


    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
    

}
time15Minutes(["23", "59"]);