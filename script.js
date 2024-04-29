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
    } else if (team === "teamB") {
        teamBScore++;
        teamBScoreValue.textContent = teamBScore;
    }
 };
 //Decreasing the score for a given team
 let decrementScore = (team) => {
    if (team === "teamA" && teamAScore > 0) {
        teamAScore--;
        teamAScoreValue.textContent = teamAScore;
    } else if (team === "teamB" && teamBScore > 0) {
        teamBScore--;
        teamBScoreValue.textContent = teamBScore;
    }
 };
//Reseting the scores
let resetScores = () => {
    teamAScore = 0;
    teamBScore = 0;
    teamAScoreValue.textContent = teamAScore;
    teamBScoreValue.textContent = teamBScore;
}