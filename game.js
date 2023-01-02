var gamePattern = [];

var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
    var randmNumber = Math.floor(Math.random() * 4);;

    var randomChosenColour = buttonColours[randmNumber];
    
    gamePattern.push(randomChosenColour);
    
    var id = "#" + randomChosenColour;
    
    $(id).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    // var sound = "sounds/" + randomChosenColour + ".mp3";
    
    // var audio = new Audio(sound);
    // audio.play();
}

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    // alert(userChosenColour);

    playSound(userChosenColour);

    // var sound = "sounds/" + randomChosenColour + ".mp3";
    // var audio = new Audio(sound);
    // audio.play();    
});


function playSound(name){

    var sound = "sounds/" + randomChosenColour + ".mp3";    
    var audio = new Audio(sound);
    audio.play();
}
