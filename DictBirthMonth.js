let Mon = new Map;
let sameMon = [];
// let Mon = new Map;
for (i=1; i<=50; i++){
    let x = Math.floor(Math.random() *12)+1;
    Mon[i]=x;
}
console.log(Mon);

// let c = 0;
// for(i=1; i<=12; i++){
//   for (let v of Mon.values()){
//     for (let v1 of Mon.values()){
//         if ( v == v1){
//             c++;
//         }
//     }
//     sameMon[i]=c;
//  }
// }
// console.log(sameMon);
for(i=0; i<=Mon.size; i++){
    if(Mon[i] == Mon[i]){
        sameMon.push(Mon[i])
    }
}
console.log(sameMon);