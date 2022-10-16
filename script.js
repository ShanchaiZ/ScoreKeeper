//Score Keeping App Functions:
//====================================================================================
//Declare variables:
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

let p1Score = 0;




//Button Functions:
//----------------------------------------------------------------------
p1Button.addEventListener("click", function() {
    p1Score += 1;
    p1Display.textContent = p1Score;
});

p2Button.addEventListener("click", function() {
    alert("p2 Is working!")
});



//PseudoCode:
//==================================================
//HTML SET UP: Create the base button set up
//----------------------------------------------------
//1. Create h1 display where the score will be displayed. Span and id was used to isolate left and right score point.
//2. Create Increase Player 1, 2 and Reset buttons
//----------------------------------------------------
//JS Script: BUTTON SELECTION AND FUNCTION:
//3. Select buttons with document.queryselector

//Create Scorekeepering logic: We want to take the current score for player 1 then increase it by 1 and then update it on the display for player 1.
//----------------------------------------------------
//4. Select the player 1 Display using querySelector
//5. let player 1 score = 0. 
//6. Then after each button click on player 1, INCREASE the p1Score by 1 and then change its TEXT CONTENT to update.
