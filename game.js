var buttonColours = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(){
    return Math.floor(Math.random() * 4);
}

var randmNumber = nextSequence();

var randomChosenColour = buttonColours[randmNumber];

buttonColours.push(randomChosenColour);