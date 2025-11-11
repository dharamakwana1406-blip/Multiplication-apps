//script.js
     const boxx=document.querySelector(".box");
     const scores=document.querySelector(".score");
     const anss=document.querySelector(".ans");
     const times=document.querySelector(".time");
     const btns=document.getElementById("btn");
     const quizs=document.querySelector(".quiz");
     const input=document.getElementById("text");
     let currentOperation='multipaction';
     
     function multiply(){
      num1=Math.floor(Math.random()*50);
      num2 = Math.floor(Math.random() *50);
     if (currentOperation==='multipaction') {
             correctAnswer = num1 * num2;
             quizs.firstChild.textContent = `What is ${num1} multiplied by ${num2}?`;
             currentOperation = 'addition';
         } else if(currentOperation==='addition') {
             correctAnswer = num1 + num2;
             quizs.firstChild.textContent = `What is ${num1} plus ${num2}?`;
             currentOperation = 'subtraction';
         }
         else  {
             correctAnswer = num1 - num2;
             quizs.firstChild.textContent = `What is ${num1} subtraction ${num2}?`;
             currentOperation='multipaction';
         }
     }
     
     
     let num1,num2,correctAnswer;
     //correctAnswer=num1*num2;
     let score=0;
     let time=30;
     let timer;
     let newscore=0;

     
     let timerStarted=false;
        times.textContent = `Time: ${time}`;
    
    function startTimer(){
       clearInterval(timer);
    timer = setInterval(() => {
   time--;
   times.textContent = `Time: ${time}`;
       
   if (time<= 0) {
      clearInterval(timer);
      alert("Time's up! Final score: " + score);
      input.disabled = true;
     // btns.disabled = true;
   }
}, 1000);
}
function resetTime(){
   clearInterval(timer);
   time=30;
   times.textContent = `Time: ${time}`;
         timerStarted = false;
}
     btns.addEventListener("click", () => {
        
    const userAnswer = parseInt(input.value);
    
if (!timerStarted) {
   startTimer();
    timerStarted =true;
  }   
    if (userAnswer === correctAnswer) {
      score++;
      scores.textContent = `Score: ${score}`;
      
      resetTime();
      startTimer();
      
    
     }
    else {
 alert("Incorrect! Try the next one.Final score:" + score);
   
      score=0;
          scores.textContent = `Score: ${score}`;
          
      resetTime();
       
    }
    input.value = "";
    input.focus();
    multiply();
    
   

  }


        
    );
  multiply();