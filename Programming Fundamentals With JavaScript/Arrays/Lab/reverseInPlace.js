function reverseInPlace(arr) {
    let k = arr.length - 1;

    for (let i = 0; i < arr.length / 2; i++, k--) {
        let tempEl = arr[i];
        arr[i] = arr[k];
        arr[k] = tempEl;
    }
    console.log(arr.join(" "));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);