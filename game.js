var gamePattern = [];
var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var flag = 0;
var level = 0;

$(document).keydown(function () {
    if (flag === 0) {
        $("h1").text("Level " + level);
        nextSequence();
        flag = 1;
    }
});

$(".btn").click(function () {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {

    userClickedPattern = [];

    var randmNumber = Math.floor(Math.random() * 4);;
    var randomChosenColour = buttonColours[randmNumber];
    gamePattern.push(randomChosenColour);

    var id = "#" + randomChosenColour;
    $(id).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    level++;
    $("h1").text("Level " + level);
}

function playSound(name) {

    var sound = "sounds/" + name + ".mp3";
    var audio = new Audio(sound);
    audio.play();
}

function animatePress(currentColour) {

    var btn = "." + currentColour;
    $(btn).addClass("pressed");

    setTimeout(function () {
        $(btn).removeClass("pressed");
    }, 100);

}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        console.log("success");

        if (userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else {
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");            
        }, 200);

        console.log("Wrong");
    }
}