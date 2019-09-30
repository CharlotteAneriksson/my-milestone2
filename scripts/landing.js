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

// All buttons - Actions and Sounds
$("document").ready(function(){
    $("#open").click(playOpenAudio);
    $("#close").click(playCloseAudio);
});

function playOpenAudio() {
    $("#openInfo")[0].currentTime = 0;
    $("#openInfo")[0].play();
    $("#openInfo").prop("volume", 0.1);
    $("#showHowItWorks").css("visibility", "visible");
}
function playCloseAudio(){
    $("#closeInfo")[0].currentTime = 0;
    $("#closeInfo")[0].play();
    $("#closeInfo").prop("volume", 0.1);
    $("#showHowItWorks").css("visibility", "hidden");
}


