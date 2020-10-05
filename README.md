# Simon-game
Simon with jQuery
> ![Simon game](/sounds/display.png)

+ Remember the good old Simon game that we had to play back in the mid-60s? No? Me neither.
+ The most challenging part was to get the game to evaluate user input and tally it against the game sequence. But here's how you do it.
```
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
```
+ The array `clickedPattern` is initialized as an empty global variable. Every time a user select a color, it is added to this array.
+ The function `setTimeout` takes two arguments. The first is a function or an expression that will be evaluated after a specified number of milliseconds - which are 
the second argument.
+ The jquery cdn can be found [here](https://code.jquery.com)
