function invalidNumber(input) {
    let num = Number(input[0]);
    let isValid = num == 0 || num >= 100 && num <= 200;

    if (!isValid) {
        console.log("invalid");
    }
}
invalidNumber(["100"])