let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
  //rock,paper,scissor. randomly kuch v generate kaeraga computer.
  //array hmne esliye liya qki koe v js kai ander koe strate forward tarika nhi haibohot sare  string se koe v random strin nikalene ka but java script kai pass ek math(MAth class hote hai jiskai pa random method hai jo ki 0-1 tak random value deta hai) naam ka  fuction hai jo random value deta hai esliye hmne
  const options=["rock","paper","scissors"];
 const randIdx= Math.floor(Math.random()*3);
 return options[randIdx];
};
const drawGame=()=>{
  
  msg.innerText="Draw Match!.Play again";
 msg.style.background="#081b31";
};
const showWinner=(userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    //agar ham background mai kuch v change karna chate hai to akr skte hai(method hai:msg.style.backgroundColor=)
  msg.style.background="green";
  }
  else{
    compScore++;
    compScorePara.innerText=compScore;
 
    msg.innerText=`You loss! ${compChoice} beats your ${userChoice}`;
    msg.style.background="red";
  }
};
const playGame=(userChoice)=>{

//generate the choice of computer.
const compChoice=genCompChoice();


if(userChoice===compChoice){
drawGame();
}
else{
  let userWin=true;
  if(userChoice==='rock'){
   userWin= compChoice==="paper"?false:true;
  }
  else if(userChoice==="paper"){
    userWin=compChoice==="scissors"?false:true;
  }
  else{
    userWin=compChoice==="rock"?false:true;
  }
  showWinner(userWin,userChoice,compChoice);
}
};
choices.forEach((choice)=>{
  console.log(choice);
  choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id")
//console.log("choices was clicked",choice);
playGame(userChoice);
  });
});