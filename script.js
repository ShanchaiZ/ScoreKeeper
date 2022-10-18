//Score Keeping App Functions:
//=================================================================================================================================================
//Declare variables:
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;
let winningScore = 1;
let isGameOver = false;



//Player Button Functions:
//-------------------------------------------------------------------------------------------------------------------------------------------------
p1Button.addEventListener("click", function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add("winner");
            p2Display.classList.add("loser");
        }
        p1Display.textContent = p1Score;
    }
});


p2Button.addEventListener("click", function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add("winner");
            p1Display.classList.add("loser");
        }
        p2Display.textContent = p2Score;
    }
});


// Winnning Score Selection:
//-------------------------------------------------------------------------------------------------------------------------------------------------

winningScoreSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
});


//note: "this" keyword WITH RESPECT to addEventlisteners refers to the winningScoreSelect variable which is a dropdown list of numbers as a string! but we need to PARSE the string into AN INTEGER so we can use the result as a NUMBER VALUE.

// Reset button and its function:
//-------------------------------------------------------------------------------------------------------------------------------------------------

resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner", "loser");
    p2Display.classList.remove("winner", "loser");
}


//PSEUDOCODE:
//=================================================================================================================================================
//HTML SET UP: Create the base button set up
//-------------------------------------------------------------------------------------------------------------------------------------------------
//1. Create h1 display where the score will be displayed. Span and id was used to isolate left and right score point.
//2. Create Increase Player 1, 2 and Reset buttons.

//JS Script: BUTTON SELECTION AND FUNCTION:
//=================================================================================================================================================
//3. Select player display and buttons with document.queryselector.

//SCOREKEEPING LOGIC:
//SCOREKEEPING logic 1: Take the current score for player 1 then increase it by 1 and then update it on the display for player 1. Once player 1 reaches the winning score = gameover. Repeat logic with player 2.
//----------------------------------------------------------------------
//4. Select the player 1 Score using querySelector.
//5. let player 1 score = 0.
//6. After each button click on player 1, INCREASE the p1Score by 1 and then change its TEXT CONTENT to update diplay.
//7. Once player 1 reaches the winningScore = ScoreKeeping stops.
//8. REWRITE step 5- 7 as if you DO NOT have the winning score continue with incremental scorekeeping; BUT once player 1 reaches winning score === stop running code.

//SCOREKEEPING logic 2: Once ANY player reaches the game winning score === gameover. Therefore, Another way to think about it is, are we we STILL playing the game once the winningScore is reached ==> Boolean logic.
//----------------------------------------------------------------------
//9. let isGameOver === false because we are still playing the game and continue to increase score by 1 and update display for player.
//10. Once any player score === winning score, isGameOver will be === true. then none of the code will run.
//11. repeat for player 2.

//-------------------------------------------------------------------------------------------------------------------------------------------------
//CREATE RESET BUTTON AND FUNCTION:
//12. Select reset button using document.queryselector
//13. Once button is clicked: a. Restart the game by setting is gameOver BACK to false "isGameover = false", b. Reset the players Score = 0. c. Update the players display = 0;


// WINNING SCORE SELECTION:
//14. HTML - use "select" and "option" to list number of games to play towards the winning score.
// we want to select the winning score that we want to play towards and have the drop down option list connected to the winningScore. Therefore we want to the scorekeeping to trigger when winningScore drop down CHANGES in value.
//15. We want to .addeventlisten to "change" when drop down NUMBER VALUE is selected.
//16. This selected number will be obtained by ParseInt and will now be the new winningScore.
//17. Once new winningScore is set => scorekeeping resets display automatically using the reset function.
//18. Therefore reset function has been rewritten as a function reset() and this reset function is used as a CALLBACK FUNCTION to the winningScoreSelection dropdown.

//-------------------------------------------------------------------------------------------------------------------------------------------------
// Optional: Winner = green, Loser = Red.
// wrote internal/embedded html styling for winner = green, loser = red then if player 1 or player 2's display is equal to the winningScore = green. 