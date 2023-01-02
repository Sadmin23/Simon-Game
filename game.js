var gamePattern = [];
var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var flag=0;
var level=0;

$(document).keydown(function() {
    if (flag===0){
        flag=1;
        nextSequence();
        $("h1").text("Level " + level);
    }
});

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(level-1);
});

function nextSequence(){

    var randmNumber = Math.floor(Math.random() * 4);;
    var randomChosenColour = buttonColours[randmNumber];
    gamePattern.push(randomChosenColour);
    
    var id = "#" + randomChosenColour;
    $(id).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    level++;
    $("h1").text("Level " + level);
}

function playSound(name){

    var sound = "sounds/" + name + ".mp3";    
    var audio = new Audio(sound);
    audio.play();
}

function animatePress(currentColour){

    var btn = "." + currentColour;
    $(btn).addClass("pressed");

    setTimeout(function() { 
        $(btn).removeClass("pressed");
    }, 1000);    

}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel])
    {
        setTimeout(nextSequence(), 1000);
        userClickedPattern = [];
    }  
    else{
    }
}
function gameOver(){

}