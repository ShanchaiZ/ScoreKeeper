//Score Keeping App Functions:
//====================================================================================
//Declare variables:
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");











//Button Functions:
//----------------------------------------------------------------------
p1Button.addEventListener("click", function() {
    alert("p1 Is working!")
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