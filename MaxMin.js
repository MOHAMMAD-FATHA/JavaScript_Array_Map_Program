//Program To Find Max and Min of Five Random Numbers

let lower_limit = 100;
let upper_limit = 999;
let range = upper_limit - lower_limit;
let max = min = 0;
for (i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 1000) % range + lower_limit;
    console.log("Random Number '" + (
        i + 1
    ) + "' : " + number);
    if (i == 0) {
        min = max = number;
    }
    if (number > max) {
        max = number;
    }
    if (number < min) {
        min = number;
    }
}
console.log("Maximum of 5 Random NUmbers : " + max);
console.log("Minimum of 5 Random NUmbers : " + min);