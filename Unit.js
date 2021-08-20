console.log("Program for units");
let upper_limit = 9999;
let lower_limit = 1000;

let range = upper_limit-lower_limit;
let n = Math.floor(Math.random() * 1000) % range + lower_limit;
console.log(n);
u=n%10;
t=(n/10)%10;
h=(n/100)%10;
th=(n/1000)%10;
l=n/10000;

console.log("Unit" +u, "Tens" +t,"Hundereds" +h, "Thousands" +th, "TenThousand" +l);