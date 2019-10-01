// Only show content when user clicks in different stages
$("document").ready(function(){
    $("#start").click(function(){
        $(".selections").css("display", "block");
        $("form li:nth-child(n+4)").css("display", "none");
        $(".showWithjQuery").css("display", "none");
        $("#startSection").css("display", "none");
    }); 
    $("[name=character]").click(function(){
        $("form li:nth-child(-n+6)").css("display", "block");
        window.location = "#enviroments";
    });
    $("[name=enviroment]").click(function(){
        $("form li:nth-child(-n+9)").css("display", "block");
        window.location = "#items";
    });
    $("[name=item]").click(function(){
        $(".showWithjQuery").css("display", "block");
        window.location = "#ready";
    });
});
 

// Play sound when input gets checked
$("#selections").find(":input").click(playCheckedAudio);

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
const firstPart = "Once upon a time there was a "; 
const secondPart = `, beautiful, courageous and strong. Still young with his whole life ahead. <br />Living in their cozy nest with parents and one sister. Dreaming about one day traveling out to the big `;
const thirdPart = `. The magic world that everyone talks about.<br />What do you think, lets imagine it together...<br />`;
const fourthPart = `The day eventually came. Finally it was time to travel the world. He knew exacly what to bring, the `;
const fifthPart = `. The luckiest item in the whole world.<br />He had the best time, got a million friends and tought them to be courageous just like him.<br /> He lived happily ever after, godnight love!`;

const svFirstPart = "Det var en gång en ";
const svSecondPart = `, vacker, modig och stark. Fortfarande ung med hela livet framför sig.<br />Boende med mamma och pappa och en syster i deras mysiga näste. Drömmen var att en dag resa ut till den stora `;
const svThirdPart = `. Den magiska världen alla pratade om.<br />Vad tror du, låt oss föreställa oss den tillsammans...<br />`;
const svFourthPart = `Dagen kom äntligen, det var dags att fara. Dags att se världen. Hon visste precis var hon skulle ta med sig, `;
const svFithPart = `. Det mest tursamma föremålet i hela världen.<br />Hon hade en otroligt resa, fick miljoner nya vänner som hon lärde att vara modiga precis som henne.<br />Snipp snapp snut så var sagan slut, sov gott hjärtat.`;

function writeStory() {
        
        document.getElementById("result").innerHTML = "";
        var character = document.getElementsByName("character"); 
        for (i = 0; i < character.length; i++) { 
            if (character[i].checked)  { 
                document.getElementById("result").innerHTML
                    += firstPart 
                    + character[i].value
                    + secondPart;
            }
        } 
        var enviroment = document.getElementsByName("enviroment"); 
        for (j = 0; j < enviroment.length; j++) { 
             if (enviroment[j].checked){ 
                    document.getElementById("result").innerHTML
                    += enviroment[j].value
                    + thirdPart
                    + fourthPart;
            } 
        }
        var item = document.getElementsByName("item");
        for (e = 0; e < enviroment.length; e++) { 
            if (enviroment[e].checked){ 
                document.getElementById("result").innerHTML
                += item[e].value
                + fifthPart; 
            } 
        }
        $("form").css("display", "none");
        $("#startSection").css("display", "none");
    } 


     // Write the swedish farytail
function skrivSaga(){

        document.getElementById("result").innerHTML = "";
        var character = document.getElementsByName("character"); 
        for (i = 0; i < character.length; i++) { 
            if (character[i].checked){ 
                document.getElementById("result").innerHTML
                    += svFirstPart
                    + character[i].value
                    + svSecondPart;
            }
        } 
        var enviroment = document.getElementsByName("enviroment"); 
        for (j = 0; j < enviroment.length; j++) { 
            if (enviroment[j].checked) { 
                    document.getElementById("result").innerHTML
                    += enviroment[j].value
                    + svThirdPart
                    + svFourthPart;
            } 
        }
        var item = document.getElementsByName("item");
        for (e = 0; e < enviroment.length; e++) { 
            if (enviroment[e].checked){ 
                document.getElementById("result").innerHTML
                += item[e].value
                + svFithPart; 
            } 
        }
        $("form").css("display", "none");
        $("#startSection").css("display", "none");
}