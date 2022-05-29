function onTimeForTheExam(input){
    let hourExam = Number(input[0]);
    let minutesExam = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let arrivalTime = arrivalHour * 60 + arrivalMinutes;
    let examTime = hourExam * 60 + minutesExam;
    let diff = Math.abs(arrivalTime - examTime);

    if (arrivalTime > examTime){
        console.log("Late");
        if (diff < 60){
            console.log(`${diff} minutes after the start`);
        } else {
            let hours = Math.floor(diff / 60);
            let minutes = diff % 60;
                if (minutes >= 10){
                    console.log(`${hours}:${minutes} hours after the start`);
                } else {
                    console.log(`${hours}:0${minutes} hours after the start`);
                }
        }
    } else if (arrivalTime === examTime || examTime - arrivalTime <= 30){
        console.log("On time");
        if (arrivalTime !== examTime){
            console.log(`${diff} minutes before the start`);
        }
    } else {
        console.log("Early");

        if (diff < 60){
            console.log(`${diff} minutes before the start`);
        } else {
            let hours = Math.floor(diff / 60);
            let minutes = diff % 60;
                if (minutes >= 10){
                    console.log(`${hours}:${minutes} hours before the start`);
                } else {
                    console.log(`${hours}:0${minutes} hours before the start`);
                }
        }

    }
} 
onTimeForTheExam(["11",
"30",
"12",
"32"])


	

