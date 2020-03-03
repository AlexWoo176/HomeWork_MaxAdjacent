function inputArr() {
    length = parseInt(prompt("Enter length of sequence : "));
    let arr = [];
    for (let i = 0; i < length ; i++) {
        arr[i] = Math.floor(Math.random() * 50);
    }
    return arr;
}
function adjacentMax(arr) {
    let maxbegin = arr[0] * arr[1];
    for (let i = 1; i < arr.length - 1; i++) {
        let maxend = arr[i] * arr[i+1];
        if (maxbegin < maxend) maxbegin = maxend;
    }
    document.write('The sequence is :' + arr + '<br>');
    document.write('The max adjacent of sequence is :' + maxbegin + '<br>');
}
adjacentMax(inputArr());