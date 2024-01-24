// function arrayNumber(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 5 == 0 && i % 3 == 0) {
//       arr.push(i);
//     }
//   }
//   return arr;

// }
// let n=100
//  let result=arrayNumber(n)
// console.log(result)

// 4misol
// let arr=[]

// function sumToq(n){
//     let juft = 0;
// let toq = 0;
// for(let i=0 ;i<n;i++){
//     arr[i]=i*10
//     if(i%2==0){
//         juft-=arr[i]
//     }else
//     toq+=arr[i]
// }
// console.log(arr)
// console.log(juft,toq)
// }
// sumToq(20)

// 5misol

// let a=prompt()
// function ndex(n){
//     let arr =[]
//     let b=0
//     for(i=0;i<n;i++){
//         arr[i]=+prompt("son")
//         b+=arr[i]
//     }
//     console.log(arr)
//     console.log(b)
// }
// let n=5
// ndex(n)

// 10-misol
// let n = 7;
// let arr = [];
// for(let i = 0; i<=7; i++){
//     arr.push(Math.trunc(Math.random()*100));
// }
// let min = arr[0];
// for(let i = 0; i<arr.length; i++){
//     if(i%2==0)
//         if(min > arr[i])
//             min = arr[i]; 
// }
// console.log(arr);
// console.log(min);

// 11-misol
// let n = 7;
// let arr = [];
// for(let i = 0; i<=7; i++){
//     arr.push(Math.trunc(Math.random()*100));
// }
// let max = 0;
// for(let i = 0; i<arr.length; i++){
//     if(i%2==1)
//         if(max < arr[i])
//             max = arr[i]; 
// }
// console.log(arr);
// console.log(max);

// 12-misol
// let n = 7;
// let arr = [];
// let arif = 0;
// for(let i = 0; i<=7; i++){
//     arr.push(Math.trunc(Math.random()*100));
//     arif+= arr[i];
// }
// console.log(arif / arr.length);

// 13-misol
// let n = 7;
// let arr = [];
// for(let i = 0; i<=7; i++){
//     arr.push(Math.trunc(Math.random()*100));
//     if(i % 2 == 1)
//          console.log(arr[i]);
// }


// 14misol

// let n = 7;
// let arr = [];
// for(let i = 0; i<7; i++){
//     arr.push(Math.trunc(Math.random()*100));
//     let son = 0
//     for (let index = 1; index < arr[i]; index++) {
//         if(arr[i] % i == 0)
//             son +=1;
//     }
//     if(son >= 3)
//         console.log(arr[i]);
// }
// console.log(arr);


// 15misol

// let n = 7;
// let arr = [];
// for(let i = 0; i<=7; i++){
//     arr.push(Math.trunc(Math.random()*100));
// }

// 16misol

// let n = 7;
// let arr = [];
// for(let i = 0; i<=7; i++){
//     arr.push(Math.trunc(Math.random()*100));
// }
// arr.push("hello");
// for(let i = 0; i<arr.length; i++){
//     if(typeof(arr[i]) == "string")
//         console.log(arr[i]);
// }

// console.log(arr);

// 17misol

// let arr1 = [1,2,3,4,5,6,9];
// let arr2 = [6,4,1,7,9];
// for (let index = 0; index < arr1.length; index++) {
//     for(let i = 0; i < arr2.length; i++){
//         if(arr1[index] == arr2[i])
//             console.log(arr1[index]);
//     }
// }

// 18misol

// let n = 8;
// let arr = [];
// for (let index = 0; index < n; index++) {
//     arr[index] = +prompt(index+1 + " sonni kiriting");
// }
// console.log(arr);

// 19misol

// let n = 8;
// let son = 0
// let arr = [];
// for (let index = 0; index < n; index++) {
//     arr[index] = +prompt(index+1 + " sonni kiriting");
//     son+=arr[index];
// }
// console.log(arr, son);


// 20misol

// let n = 4;
// let arr = [];
// for (let index = 0; index < n; index++) {
//     arr[index] = +prompt(index+1 + " sonni kiriting");
// }
// let soz = prompt("Juft or Toq");
// if(soz == "Juft"){
//     for(let i = 0; i<arr.length; i++){
//         if(i % 2 == 0){
//             console.log(arr[i]);
//         }
//     }
// }else if(soz == "Toq"){
//     for(let i = 0; i<arr.length; i++){
//         if(i % 2 == 1){
//             console.log(arr[i]);
//         }
//     }
// }