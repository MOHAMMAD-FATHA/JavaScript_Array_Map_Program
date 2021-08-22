// *********************************imports*************************



// *********************************Question1**************************
 let randomNumbers =[];
for (let i = 0 ; i<10 ;i++){
    randomNumbers[i] = Math.floor(Math.random()*889)+100;
}
console.log(randomNumbers);

let largestNumber = 0;
let secLargestNumber = 0;
let smallestNumber = 0;
let secSmallestNumber = 0;

for (let i = 0 ; i< randomNumbers.length ; i++){

    if (randomNumbers[i] > largestNumber){
        largestNumber = randomNumbers[i];
    }
    if(randomNumbers[i] < smallestNumber){
        smallestNumber = randomNumbers[i];
    }
}

for (let i = 0 ; i< randomNumbers.length ; i++){

    if (randomNumbers[i] > smallestNumber && randomNumbers[i] < largestNumber){
        if(randomNumbers[i] > secLargestNumber){
            secLargestNumber = randomNumbers[i];
        }
        if(randomNumbers[i] < secSmallestNumber){
            secSmallestNumber = randomNumbers[i];
        }
    }
}
console.log(secSmallestNumber);
console.log(secLargestNumber);

// *********************************Question2**************************

let randomNumbers1 =[];
for (let i = 0 ; i<10 ;i++){
    randomNumbers1[i] = Math.floor(Math.random()*889)+100;
}
console.log(randomNumbers1);

console.log(randomNumbers1.sort());
console.log(`the second largest numbe is ${randomNumbers1[8]}`);

// *********************************Question3**************************
let threeRandomNumbers = [];
for (let j=0 ; ; j++ ){

    for(let i =0 ; i <3 ; i++){
        threeRandomNumbers [i] = Math.floor(Math.random()*9)+1;
    }
    if ((threeRandomNumbers[0] + threeRandomNumbers[1] - threeRandomNumbers[2]) == 0){
        console.log("The 3 number whic has algebric sum zero is "+threeRandomNumbers)
        break;
    }
    else if ((threeRandomNumbers[0] - threeRandomNumbers[1] + threeRandomNumbers[2]) == 0){
        console.log("The 3 number whic has algebric sum zero is "+threeRandomNumbers)
        break;
    }else if ((threeRandomNumbers[0] - threeRandomNumbers[1] - threeRandomNumbers[2]) == 0){
        console.log("The 3 number whic has algebric sum zero is "+threeRandomNumbers)
        break;
    }
}


// *********************************Question4**************************
let numbers = [];

for (let i = 0 ; i < 100 ; i++){
    numbers[i] = i;
}

for (let i = 11 ; i <= 99 ; i = i+11 ){
    console.log(numbers[i]);
}

// *********************************Question4**************************

let arr = [];
let n = 2345;

for (i=0 ; i<=n; i++){
    let tmp = (n%i);
    if(tmp == 0){
        arr.push(i);
        n = (n/i);
    }
}
console.log("Prime factors of the given numbers are ")
console.log(arr);