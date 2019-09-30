// Only show page when user clicks start
$("document").ready(function(){
    $("#start").click(function(){
        $(".selections").css("display", "block");
    });
});

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



// Story variables
var firstPart = "Once upon a time there was a "; 
var secondPart = ` beautiful, courageous and strong. Still young with his whole life ahead. <br />Living in their cozy nest with parents and one sister. Dreaming about one day traveling out to the big `;
var thirdPart = ` The magic world that everyone talks about.<br />What do you think? Lets imagine it together...`;
var forthPart = `<br />The day came and it was time to go. Finally it was time to travel the world. He knew exacly what to bring, the `;
var fifthPart = ` The luckiest item in the whole world. <br /> He had the best time, got a million friends and tought them to be courageous just like him.<br /> He lived happily ever after, godnight love!`;


function writeStory(myOption) {
        
        document.getElementById("result").innerHTML = "";
        var character = document.getElementsByName("character"); 
        for (i = 0; i < character.length; i++) { 
            if (character[i].type="radio") { 
                if (character[i].checked) 
                document.getElementById("result").innerHTML
                    += firstPart 
                    + character[i].value + ","
                    + secondPart;
            }
        } 
        var enviroment = document.getElementsByName("enviroment"); 
        for (j = 0; j < enviroment.length; j++) { 
            if (enviroment[j].type="radio") { 
                if (enviroment[j].checked) 
                    document.getElementById("result").innerHTML
                    += enviroment[j].value
                    + "."
                    + thirdPart
                    + forthPart;
            } 
        }
        var item = document.getElementsByName("item");
        for (e = 0; e < enviroment.length; e++) { 
            if (enviroment[e].type="radio") { 
                if (enviroment[e].checked) 
                document.getElementById("result").innerHTML
                += item[e].value
                + "."
                + fifthPart; 
            } 
        }
        $("form").css("display", "none");
        $("#startSection").css("display", "none");
    } 
