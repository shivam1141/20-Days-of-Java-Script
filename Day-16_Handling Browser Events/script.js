const box = document.getElementById("box");
const score = document.getElementById("score");
let currentScore = 0;

box.addEventListener("click", function(){
  currentScore++;
  score.innerHTML = currentScore;
});
box1.addEventListener("click",function(){
    currentScore--;
    score.innerHTML = currentScore;
})