'use strict';
//1
const numbers = [10, 50, 6, 7, 8, 11, 6, 3, 9]
let sum1 = 0;
numbers.forEach(numb => sum1 +=numb);
console.log(sum1);

//2
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  };
function formatUserName(user) {
    if (user.isloggedin) {
      
      return `${user.firstname} ${user.lastname}`;
    } else {
      
      return false;
    }
  }

  let result = formatUserName(user);
  
  if (result) {
    console.log(`Formatted Name: ${result}`);
  } else {
    console.log('user is not logged in.');
  }
//3
const numbers1 = [1,4,5,6,20,45]

const largestnumber = (values) => {
    let  highest = 0;
    for (let i=0; i<values.length; i+=1){
        if (values[i] > highest){
            highest = values[i];
        }

    }
    return highest;
}
console.log(largestnumber(numbers1));
//5
let numbers2 = [1,2,3,4,5]; 
const newarr = numbers2.concat().reverse();
console.log(numbers2);
console.log(newarr);


//4
let number = 5 
let reaminder = (number % 2)
if (reaminder == 0){
    console.log('{number} is even');
} else{
    console.log('{number} is odd');
}
//6
 const adult = (age) => {
    return age >=19 ? 'სრულწლოვანი':'არასრულწლოვანი';
 }
 const adult1 = (60);
 console.log(adult1);
 