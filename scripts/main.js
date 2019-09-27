var messege = "You have selected this";

function playAudio(){
    var userSelections = document.getElementsByTagName("input");
    if(userSelections[0].checked){
        alert(messege);
    }
    else if(userSelections[1].checked){
        alert("butterfly selected");
    }
    else if(userSelections[2].checked){
        alert("fox selected");
    }
    else if(userSelections[3].checked){
        alert("city selected");
    }
    else if(userSelections[4].checked){
        alert("forest selected");
    }
    else if(userSelections[5].checked){
        alert("ocean selected");
    }
    else if(userSelections[6].checked){
        alert("boots selected");
    }
    else if(userSelections[7].checked){
        alert("pocketwatch selected");
    }
    else if(userSelections[8].checked){
        alert("umbrella selected");
    }
}