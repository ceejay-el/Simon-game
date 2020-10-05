// variable declarations
var buttons = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var clickedPattern = [];
var started = false;
var level = 0;
//end of variable declarations

// start over
function newGame(){
    started = false;
    level = 0;
    gamePattern = [];
    clickedPattern = [];
}

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

// proceeding sequence
function nextSequence(){
    var randomChosen = buttons[Math.floor(Math.random() * 4)];
    $("#" + randomChosen).addClass("pressed").delay(100).queue(function(){
        $(this).removeClass("pressed").dequeue();
        let nextBtnSnd = $(this).attr("id");
        playSound(nextBtnSnd);
    });
    gamePattern.push(randomChosen);
    clickedPattern = [];
    level++;
    $("#level-title").text("Level " + level)
}

// when key pressed for first time, `call nextSequence()`
$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true
    }
});

// animate user click
$(".btn").click(function(){
    let userClickedBtn = $(this).attr("id");
    buttonAnimation(this);
    playSound(userClickedBtn);
    clickedPattern.push(userClickedBtn);
    matchClicks(clickedPattern.length - 1);
});

// check user answer against game sequence
function matchClicks(currentLevel){
    if(gamePattern[currentLevel] === clickedPattern[currentLevel]){
        if(gamePattern.length === clickedPattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Oops! Press any key to restart.");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        newGame();
    }
}