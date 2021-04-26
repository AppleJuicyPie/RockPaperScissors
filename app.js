let userScore = 0;
let computerScore = 0;

const comp_img = document.getElementById("comp-image");
const comp_div = document.getElementById("comp");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_span = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();

function convertToWord(word){
    if (word == "rock"){
        return "Rock";
    }
    if (word == "paper"){
        return "Paper";
    }
    if (word == "scissors"){
        return "Scissors";
    }
}

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random()*3);
    return choices[index];
}

function convertCompImg(computerChoice){
    if (computerChoice == "rock"){
        comp_img.src.replace = "RPSimages/rock.png";
    }
    else if (computerChoice == "paper"){
        comp_img.src.replace = "RPSimages/paper.png";
    }
    else if (computerChoice == "scissors"){
        comp_img.src.replace = "RPSimages/scissors.png";
    }
}

function win(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    convertCompImg(computerChoice);
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!`
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
    comp_div.classList.add('red-glow');
    setTimeout(() => comp_div.classList.remove('red-glow'), 300);
}

function lose(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    convertCompImg(computerChoice);
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You Lost...`
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
    comp_div.classList.add('red-glow');
    setTimeout(() => comp_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    convertCompImg(computerChoice);
    result_div.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.`
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
    comp_div.classList.add('gray-glow');
    setTimeout(() => comp_div.classList.remove('gray-glow'), 300);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener("click", () => game("rock"));
    paper_div.addEventListener("click", () => game("paper"));
    scissors_div.addEventListener("click", () => game("scissors"));
}

main();