'use strict';
//1
let link = "https://google.com";
checkHttps(link);
  
function checkHttps(link) {
   
   if (link.indexOf("https://") !== -1) {
       console.log("კი მოიცავს 'https://'");
       return true;
   } else {
       console.log(" არა არ მოიცავს  'https://'");
       return false;
   }
}

//2

const newdiv = document.querySelector("#meme");
newdiv.innerHTML = `
<div class="wraper">
   <img src = photo.jpg  alt ="image">
   <h2 class="meme"> image title </h2>
</div>
`;
//3
const text = document.querySelectorAll(".myid");
dispatchEvent.foreach(function(div) {
   const pElement = document.createElement('p');
   pElement.classname = 'text';
   pElement.textcontent = 'hello';
   div.appandchild(pelement);
});
//4
let array6 = [-1, -2, -3, -4];
let unarray6 = array6.some((element) => element > 0);
console.log(array6);
//5
let array7 = '12345';
let unarray7 = array7.split("").map(Number);
console.log(array7);
let  sum = unarray7.reduce((accumulator, currentvalue) => accumulator + currentvalue );
console.log(sum);
//6
let numbersarray = [1,2,3,4,2,6,7,2,4];
let sum = numbersarray.reduce((acc,curr) => acc + curr);
console.log(sum);