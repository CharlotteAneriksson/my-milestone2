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

// Play sound during storywriting and add storyContainer to the page
$(".ready-button").click(function(){
    $("#magic-wand")[0].currentTime = 0;
    $("#magic-wand")[0].play();
    $("#magic-wand").prop("volume", 0.1);
    $("#storyContainer").css("display", "flex");
});

// Get the input value


var firstPart = "Once upon a time there was a "; 
var secondPart = " She was dreaming about living in the ";
var thirdPart = " And brought what she always brings, the ";

function writeStory(myOption){
        
        document.getElementById("result").innerHTML = "";
        var character = document.getElementsByName("character"); 
          
        for(i = 0; i < character.length; i++) { 
            if(character[i].type="radio") { 
                if(character[i].checked) 
                document.getElementById("result").innerHTML
                    += firstPart 
                    + character[i].value;
            }
        } 
        var enviroment = document.getElementsByName("enviroment"); 

        for(j = 0; j < enviroment.length; j++) { 
            if(enviroment[j].type="radio") { 
                if(enviroment[j].checked) 
                    document.getElementById("result").innerHTML
                    += secondPart 
                    + enviroment[j].value;
                  
            } 
        }
        var item = document.getElementsByName("item");

        for(e = 0; e < enviroment.length; e++) { 
            if(enviroment[e].type="radio") { 
                if(enviroment[e].checked) 
                document.getElementById("result").innerHTML
                += thirdPart 
                + item[e].value;
            } 
        }
    } 