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
    $("#frogSound")[0].currentTime = 0;
    $("#frogSound")[0].play();
}


