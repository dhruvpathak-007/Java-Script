// function Wish(name) {
//   console.log(`hello ${name}`);
// }

// Wish("Dhruv");

// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(6, 7));

// 1.Print the square of each number of array*********

// let arr = [2, 4, 5, 7, 3, 9];
// arr.forEach((ind, i) => {
//   console.log(ind * ind, i);
// });

// 2.Map methods in array************
// let arr = [3, 4, 6, 7, 8];et arr = [3, 4, 6, 7, 8];

// let newArr = arr.map((val) => {
//   return val * 2;
// });

// console.log(newArr);


// 3.Reduce method in Array**********
// let arr = [3, 4, 6, 7, 8];

// let newArr= arr.reduce((res, curr)=>{
//   return res+curr;
// })

// console.log(newArr);

// P.P_1 : Take an array and filter out the marks of students which score marks greater than 90

// let marks =[76,56,98,56,93,90,78,64];
// let newMarks= marks.filter((value)=>{
//   return value>=90;
// })
// console.log(newMarks);

// P.P_2 : Take a number as input and create an array of numbers from 1 to n and calculate sum and product od numbers using reduce
const prompt = require('prompt-sync')();
const n = prompt("Enter the value of n: ");
let arr =[];
for(let i=0;i<n;i++){
  arr[i]=i+1;
}

let sum =arr.reduce((prev,curr)=>{
  return prev+curr
})

let prod =arr.reduce((prev,curr)=>{
  return prev*curr
})

console.log(`The sum of array is ${sum} and product is ${prod}`);