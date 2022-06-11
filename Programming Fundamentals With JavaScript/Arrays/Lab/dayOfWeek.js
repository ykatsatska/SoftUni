function dayOfWeek(n) {
    let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    if (n < 0 || n > 7) {
        console.log("Invalid day!")
    } else {
        console.log(daysOfTheWeek[n - 1]);
    }     
}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(7);