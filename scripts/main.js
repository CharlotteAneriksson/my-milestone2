// Scroll to next when selection made

$("document").ready(function(){
    $("[name=character]").click(function(){
        window.location = "#enviroments";
    });
    $("[name=enviroment]").click(function(){
        window.location = "#items";
    });
    $("[name=item]").click(function(){
        window.location = "#ready";
    });
});

// Play sound when input gets checked

$(":input").click(function(){
    playCheckedAudio();
})
function playCheckedAudio(){
    $("#selectionSound")[0].currentTime = 0;
    $("#selectionSound")[0].play();
    $("#selectionSound").prop("volume", 0.1);
}

// Play sound during storywriting
$(".ready-button").click(function(){
    $("#magic-wand")[0].currentTime = 0;
    $("#magic-wand")[0].play();
    $("#magic-wand").prop("volume", 0.1);
});

// Get the input value


var firstParOfStory = ""; 
var secondPart = "";

function writeStory(myOption){
        var character = document.getElementsByName("character"); 
          
        for(i = 0; i < character.length; i++) { 
            if(character[i].type="radio") { 
                if(character[i].checked) 
                    console.log(firstParOfStory = " Once upon a time there was a " + character[i].value);
            } 
        } 
        var enviroment = document.getElementsByName("enviroment"); 
          
        for(j = 0; j < enviroment.length; j++) { 
            if(enviroment[j].type="radio") { 
                if(enviroment[j].checked) 
                    console.log(secondPart = " She was walking around in the " + enviroment[j].value);
            } 
        }
    } 