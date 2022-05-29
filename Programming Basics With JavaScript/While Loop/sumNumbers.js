function sumNumbers(input) {
    let index = 0;
    let numbers = Number(input[index]);
    index++;
    let sum = 0;

    while (sum < numbers) {
        let CurrentNum = Number(input[index]);
        sum += CurrentNum;
        index++;
        }

        console.log(sum);
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

