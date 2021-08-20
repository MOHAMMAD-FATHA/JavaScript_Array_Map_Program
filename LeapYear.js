console.log("Program to find the year is leap year or not");
let upper_limit = 9999;
let lower_limit = 1000;

let range = upper_limit-lower_limit;
let year = Math.floor(Math.random() * 1000) % range + lower_limit;

console.log("Given Year: "+year);

if (year%4==0 && (year%100!=0 || year%400!=0)){
    console.log(year+" is a leap year");
} else{
    console.log(year+" is not a leap year");
}