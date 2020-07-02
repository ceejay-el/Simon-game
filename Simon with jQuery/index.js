//variable declarations
var buttons = ["red", "blue", "green", "yellow"],
    chosenButton = buttons[Math.floor(Math.random()*4)],
    buttonAlreadyClicked = [];
//end of variable declarations

//animate buttons
function buttonAnimation(buttonPressed){
    $(buttonPressed).addClass("pressed").delay(100).queue(function(){
        $(buttonPressed).removeClass("pressed").dequeue();
    });
}

//play sound
function playSound(buttonPressed) {
    new Audio("sounds/" + buttonPressed + ".mp3").play();
}

$(".btn").click(function(){
    var userClickedButton = $(this).attr("id");
    buttonAlreadyClicked.push[userClickedButton];
    buttonAnimation(userClickedButton);
    playSound(userClickedButton);
});