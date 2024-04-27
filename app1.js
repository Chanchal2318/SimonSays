let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    let options=["rock","paper","scissor"];
    // rock, paper, scissor
    const ranIdx=Math.floor(Math.random()*3);
     return options[ranIdx];
};

const msg=document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame=()=>{
    // console.log("Game was draw");
    msg.innerText="Game was draw! Play Again ";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        // console.log("You Win the match!")
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compScorePara.innerText=compscore;
        // console.log("You lose the match!");
        msg.innerText=`You Lose!${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice)=>{
    console.log("userchoice =",userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("computerchoice =",compChoice);
    // For draw Game
    if(userChoice === compChoice){
        drawGame();
    } 
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissor, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // rock , scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
});

