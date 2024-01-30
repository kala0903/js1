'use strict';
//1
let array2 = [14, 150, 'css', null, 'javascript', 25];

let newarray = array2.map((item) => {
if (typeof item === 'number') {
  return item * item;
} else if (typeof item === 'string') {
   return item.toUpperCase();
}

})

 console.log(newarray);
 //2
 let info = 'good day';
 const word = info.slice(5);
 console.log(word);
 //3
 let strlength = (str) => str.length;
 const er = strlength('hellooo');
 console.log(er);
 //4
 
 // let userResponse = prompt("Capital of Georgia?");
 // let userLowerCase = userResponse.toLowerCase();
 // let correctAnswer = 'tbilisi';

 // if (userLowerCase === correctAnswer) {
    // console.log("Correct!");
// } else {
    //console.log("False");
//}

//5
let fruits = ['apple', 'mango', 'avocado','kiwi']
 let newfruit = fruits.splice(2,1, 'strawberry');
 console.log(fruits);
 //6
  const numbers = [5, 25, 89, 120, 36];
 numbers.push('javascript', 'python');
 numbers.splice( 0,0, 'html', 'css');
 console.log(numbers.length);
 let newarray3 = numbers.slice(1,8);
 console.log(newarray3);
//7
const fruits3 = ['orange', 'banana', 'kiwi'];
console.log(fruits3.length, fruits3);
fruits3.push('apple', 'pineapple');
fruits3.splice(0,0, 'waterlemon');
console.log(fruits3.length, fruits3);
fruits3.splice(2,0, 'mango')
console.log(fruits3.length,fruits3);
//8
const array4 = [1,2,3,4,5];
let eu = array4.splice(3,0,'a','b','c');
console.log(array4);
//10
const array6 = [15,100,25,10,36];
const element = array6.splice (3,1);
console.log(array6);
//11
const array7 = [1,2,3,4,5];
const words = array7.splice(2,1, 'three');
console.log(array7);
//12
let array8 =['hello1', 14,24,'hello2'];
const newarr = array8.filter((elemnt) => typeof elemnt === 'numbers');
console.log(array8);
//13
let array9 = [1,2,3,4,5];
let sumarray9 = 0;
let sum = array9.forEach((item => sumarray9 += item));
console.log(sumarray9);
//14
const lang = ['html', 'css', 'javascript', 'python', 'php'];
let filter = lang.filter((item => item.length > 3));
console.log(filter);
//15
let worrds = ['madrid', 'rome', 'milan', 'berlin'];
 let v = worrds.filter((item => item.includes('m')));
 console.log(v);