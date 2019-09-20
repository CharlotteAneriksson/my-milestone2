
var welcomeArr = [`Hey, <span>its story time</span>`, `Hej, <span>dags för sagostund</span>`];
var i = 0;
var heading = document.querySelector("#two-language-heading");


function greeting(){
    heading.innerHTML = welcomeArr[i];

    setTimeout(secondGreeting, 2000);
}
 function secondGreeting(){
     i++;

     setTimeout(greeting, 1000);

     if(i > welcomeArr.length-1){
         i=0;
     }
 }
greeting();