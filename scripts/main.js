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
// Get all combinations and store them in a variable
    var character = document.selections.character.value;
    var enviroment = document.selections.enviroment.value;
    var item = document.selections.item.value;

    if(character == "frog"){
        let frog = character;
    }

function writeStory(){
    if((frog).checked){
        console.log("you choose frog")
    }
}
/*
    if(character == "frog" && enviroment == "city" && item == "boots"){
        combOne();
    }
}

function combOne(){
var combination = "frog, city and boots";
        console.log(combination);
}
*/