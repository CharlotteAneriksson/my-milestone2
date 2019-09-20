var welcomeArr = ["Hey, its story time", "Hej, dags för sago stund"];
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