const readline = require('readline')
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var str1;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (line) => {
    Input(line);
});

process.stdin.on('data', inp => {
    str1 += inp;
});

process.stdin.on('end', _ => {
    process.stdout.write(str1)
})

function Input(input) {
    var arr = input.split(" ")
    abc(arr);
}

function abc(arr) {
    var len = arr.length - 1;
    var str = [];
    console.log(arr);
    arr.sort(function (a, b) {
        return a - b;
    });
    console.log(arr);
    for (let i = 0, j = len, k = 0; i < (len / 2), j > (arr.length / 2), k <= len; i++ , j-- , k += 2) {
        str[k] = arr[i];
        if (k < len)
            str[k + 1] = arr[j];
    }
    console.log(str);
};