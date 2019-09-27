// Welcomephrase Landingpage
var welcomeArr = [`Hey, <span>its story time</span>`, `Hej, <span> tid för sagostund</span>`];
var i = 0;
var heading = document.querySelector("#two-language-heading");


function greeting(){
    //Tell JS where and what should appear
    heading.innerHTML = welcomeArr[i];

    //Make it visible with opacity 
    heading.style.opacity = 1;

    //Call next greeting
    setTimeout(secondGreeting, 3000);
}
 function secondGreeting(){
     //Increse i and get next value of array
     i++;

    //Make it invisable with opacity 
    heading.style.opacity = 0;

    //Call first greeting again
    setTimeout(greeting, 1000);

    //Make sure you only show the array values and not an infinit loop of nothing.
    if(i > welcomeArr.length-1){
        i=0;
    }
 }
greeting();

//End of Welcomephrase

// Information button - toggle info show/hide
var mySounds = new Audio ();
var soundList = new Array ('assets/audio/open.mp3', 'assets/audio/close.mp3');

function openInfo(){
    showHowItWorks.style.visibility="visible"
    mySounds.src = soundList[0];
    mySounds.play();
}
function closeInfo(){
    showHowItWorks.style.visibility="hidden"
    mySounds.src = soundList[1];
    mySounds.play();
}





