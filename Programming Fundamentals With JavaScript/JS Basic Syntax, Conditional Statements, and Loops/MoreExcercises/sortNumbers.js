function sortNumbers(a, b, c) {
    let maxNum = 0;
    let midNum = 0;
    let minNum = 0;

    if (a > b && a > c){
        maxNum = a;
        if (b > c) {
            midNum = b;
            minNum = c;
        } else {
            midNum = c;
            minNum = b;
        }
    } else if (a < b && b > c){
        maxNum = b;
        if (a > c) {
            midNum = a;
            minNum = c;
        } else {
            midNum = c;
            minNum = a;
        }
    } else if (c > b && a < c){
        maxNum = c;
        if (b > a) {
            midNum = b;
            minNum = a;
        } else {
            midNum = a;
            minNum = b;
        }
    }
    console.log(maxNum);
    console.log(midNum);
    console.log(minNum);
}
sortNumbers(2, 1, 3);