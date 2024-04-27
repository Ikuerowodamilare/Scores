//Initializing scores for both Teams
let teamAScore = 0;
let teamBScore = 0;

//Letting HTML elements displays the scores
let teamAScoreValue = document.getElementById("teamAScore");
let teamBScoreValue = document.getElementById("teamBScore");

//Increasing the score for a given team
 let incrementScore = (team) => {
    if (team === "teamA") {
        teamAScore++;
        teamAScoreValue.textContent = teamAScore;
        
    }
 }