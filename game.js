var buttonColours = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
    return Math.floor(Math.random() * 4);
}

var randmNumber = nextSequence();

var randomChosenColour = buttonColours[randmNumber];

buttonColours.push(randomChosenColour);

var id = "#" + randomChosenColour;

// alert(id);

// $("h1").css("color","yellow");

$(id).fadeOut(100).fadeIn(100);