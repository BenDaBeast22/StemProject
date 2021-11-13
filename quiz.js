var score = 0;//holds the score
window.onload=function(){
    prepareListener();
}


function prepareListener(){
    var button1;
    button1 = document.getElementById("theButton");
    button1.addEventListener("click",checkScore);
    hideScore();
}

function checkScore(){
    //alert("Nuts");
    var holdScoreArea;
    question1();
    question2();
    question3();
    holdScoreArea = document.getElementById("theScore");
    holdScoreArea.style.visibility='visible';
    document.getElementById("myScore").innerHTML=score;
    score = 0; //reset score after displaying

}
function hideScore(){
    var holdScoreArea;
    holdScoreArea = document.getElementById("theScore");
    holdScoreArea.style.visibility='hidden';
}
function changeBGColor(){
    document.body.style.backgroundColor = "gray";
}

function question1(){
    if(document.getElementById("cascade").checked){
        score = score +1;
    }
}
function question2(){
    var answer;
    answer = document.getElementById("htmlanswer").value;
    answer = answer.toUpperCase();
    switch(answer){
        case "HYPERTEXT MARKUP LANGUAGE":
            score = score +1;
            break
        default:
            score = score + 0;
    }
}

function question3(){
    var allanswers;
    var i
    allanswers = document.getElementsByClassName("phpstand");
    for (i=0;i<allanswers.length;i++){
        if (allanswers[i].checked && (i==0 || i==1 || i ==2)){ //a point for each correct checked
            score = score +1;
        }
    }
}