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

// Information button - info show/hide with additional sounds jQuery
$('document').ready(function(){
    $('#open').click(function() {
        playOpenAudio();
    });
    $('#close').click(function(){
        playCloseAudio();
    });
});

function playOpenAudio() {
    $('#openInfo')[0].currentTime = 0;
    $('#openInfo')[0].play();
    $('#showHowItWorks').css('visibility', 'visible');
}
function playCloseAudio(){
    $('#closeInfo')[0].currentTime = 0;
    $('#closeInfo')[0].play();
    $('#showHowItWorks').css('visibility', 'hidden');
}




