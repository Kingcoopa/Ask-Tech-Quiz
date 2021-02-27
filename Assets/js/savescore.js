const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const score_text = document.getElementById('scoreText');
const highScoreList = document.getElementById('highScoreList');

username.addEventListener('change', () => {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;     
});

var highScores = JSON.parse(window.localStorage.getItem("playerScores"));
highScores?.map((record) => {
    let listItem = document.createElement("LI");
    let text = document.createTextNode(`Player: ${Object.keys(record)}, Score: ${Object.values(record)}`) 
    listItem.appendChild(text);
    highScoreList.appendChild(listItem)
})


saveHighScore = (e) => {
    const player = username.value;
    const score = localStorage.getItem('score');
    console.log("clicked the save button!");
    e.preventDefault();

    // When adding a new score, pull player scores from local storage, parse it, and then add another player and score.
    var currentScores = JSON.parse(window.localStorage.getItem("playerScores"))
    if (currentScores === null) currentScores = []; // empty array

    var highScore = {[player]: score}
    currentScores.push(highScore)

    localStorage.setItem ("playerScores", JSON.stringify(currentScores))
};
