function playRPS(playerChoice){
    const choices = ["rock", "paper", "scissors"];
    
    const computerChoice = choices[Math.floor(Math.random() * computerChoices.length)];
    
    let result;
    if (playerChoice === computerChoice){
      result = "Tie " + playerChoice + ".";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
      result = "You win! Rock beats scissors.";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
      result = "You win! Paper beats rock.";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
      result = "You win! Scissors beats paper.";
    } else {
      result = "You lose! " + computerChoice + " beats " + playerChoice + ".";
    }
  
    // display the outcome and the computer choice
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Result: ${result} <br> Computer Choice: ${computerChoice}`;
  }