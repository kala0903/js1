// 1
let num = 5;

while(true){
    num++;
    if(num ==100){
        break
    }
console.log(num);
}
//2

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i =0; i < array1.length; i++){
    const num = array1[i];
    if (num > 0 && num < 10){
        console.log(num);
    }
}

for(let item of array1){
    if (item > 0 && item<10) {
        console.log(item);
    }
}



//3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < array2.length; i++){
    const element = array2[i];
    if(element ==5){
        console.log('aris');
        break;
    }
}
 for(let item of array2){
    if(item ==5){
        console.log('aris');
        break
    }
 }
//4
let array3= [1, 2, 3, 4, 5];
let sum = 0;
for(let i = 0; i < array3.length; i++){
    sum += array3[i];
    console.log(sum);
}

//5
let array4= [1, 2, 3, 4, 5];
let sum1= 0;
for(let i = 0; i < array4.length; i++){
    sum1 += array4[i] 
    console.log(sum1); 
}  

 //6
 let array5 = [1, 2, 3, 7, 6, 9];
 for(let item of array5){
    if(item == 7){
        continue;
        
    }
    console.log(item);
 }

//7
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,  
    studentstatus: "active"
  };
  console.log(user.studentstatus);
  
  
//8
let user2 = {
    name: 'anna',
    age:  20,
    studentstatus: 'active'
}
if( user2.age <18 && studentstatus =='active'){
    console.log('hello user');
}
 else if( user2.name =='levani'){
    console.log('hello levani');
 }
 else if(user2.studentstatus == 'active' || user2.age < 25){
    console.log('hello anna');
 }
 else{
    console.log('error');
 }
 let result = user2.age < 18 && user2.studentstatus == 'active' ? 'hello user' : user2.name =='leavni' ? 'hello leavni' : user2.studentstatus = 'active' || user2.age < 25 ? 'hello anna' : 'error';
 console.log(result);
 
//9
let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]

for(let item of array6){
    if(item % 2==0){
        console.log(item);
    }
}
//10
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]
for(let y of users){
    if(y.status ==true){
        console.log(y);
    }
}
    //11
    let array7 = [32, 14, 10, 'hello', null, '40', 50];

    



