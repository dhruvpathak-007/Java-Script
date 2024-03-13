// Syntax to create empty arrays in js
const arr = [1, 2, 3, 45, { name: "dhruv", marks: 45 }, "happy"];
console.log(arr);

//Acees first and last element
console.log(
  `First element is ${arr[0]} and last element is ${arr[arr.length - 1]}`
);

//Remove the last element from array, pop also returns the deleted element (complexit is O(1))
let removedElement = arr.pop();
console.log(`Removed element from array is ${removedElement}`);

//Add an element to the start of the array, it returns the index at which the element is added (complexit is O(1))
let addedElementIndex = arr.push(89);
console.log(arr, addedElementIndex);

//Delete the element at the start of the array (complexit is O(n))
// let ele = arr.shift();
// console.log(arr, ele);

//Add the element at the start of the array (complexit is O(n))
arr.unshift(60);
console.log(arr);

//How to loop through the array
arr.forEach((value, index) => {
  console.log(value, index);
});

// 1.Check weather an element is present in a array or not
let target = 5;
const findEle = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }

  return false;
};
const ans = arr.map((value) => {
  return value == target ? true : false;
});

console.log(ans);
