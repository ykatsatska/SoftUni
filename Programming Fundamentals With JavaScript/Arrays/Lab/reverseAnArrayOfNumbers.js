function reverseAnArrayOfNumbers(n, numbers) {
    let reversed = [];

    for (let i = n - 1; i >= 0; i--) {
        reversed.push(numbers[i]);
    }
    console.log(reversed.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);