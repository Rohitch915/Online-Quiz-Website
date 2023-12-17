let main=document.querySelector('.main');
let score = document.querySelector('.score');
let question = document.querySelector('.question');
let number = document.querySelector('.number');
let submit = document.querySelector('.submit');
let result = document.querySelector('.result');
let result2=document.querySelector('.result-2');
let retest=document.querySelector('.retest');
let li1=document.querySelector('.li-1');
let li2=document.querySelector('.li-2');
let li3=document.querySelector('.li-3');
let li4=document.querySelector('.li-4');
let animateBox=document.querySelector('.animate-box');
let str = "", sol = 0, catc = 0,qAttempted=-1,correct=0,wrong=0,fScore=0,flag1=0;
var scoreCard=0;
const arr = ["+", "-", "*"];
let randIndex = Math.floor((Math.random() * 3));
let rand1 = Math.floor((Math.random() * 10)) + 1;
let rand2 = Math.floor((Math.random() * 10)) + 1;
console.log(rand1 + " " + rand2);

function getQuestion(randIndex, rand1, rand2) {
    qAttempted++;
    randIndex = Math.floor((Math.random() * 3));
    rand1 = Math.floor((Math.random() * 10)) + 1;
    rand2 = Math.floor((Math.random() * 10)) + 1;
    str = "Q. What is " + rand1 + " " + arr[randIndex] +" " + rand2 + " ?"
    question.innerHTML = str;
    if (randIndex == 0) {
        sol = rand1 + rand2;
    } else if (randIndex == 1) {
        sol = rand1 - rand2;
    } else {
        sol = rand1 * rand2;
    }
  
}
getQuestion(randIndex, rand1, rand2);

function checkSolution(event)
{

  

  event.preventDefault();
    if(number.value==sol)
    {
      scoreCard+=4;
      correct++;
      animateBox.classList.add('green-back');
      animateBox.classList.remove('red-back');
      if(flag1==0)
      {
        animateBox.style.animationName="box1";
        flag1=1;
      }else{
        animateBox.style.animationName="box2";
        flag1=0;
      }
     
      
      animateBox.innerHTML= "your are right and your score is "+scoreCard;
    }else{
        scoreCard--;
        wrong++;
        if(flag1==0)
      {
        animateBox.style.animationName="box1";
        flag1=1;
      }else{
        animateBox.style.animationName="box2";
        flag1=0;
      }
     
        animateBox.classList.remove('green-back');
      animateBox.classList.add('red-back');
      animateBox.innerHTML= "your are wrong and your score is "+scoreCard;
    }
    
    score.innerHTML="Score - > " +scoreCard;
    getQuestion(randIndex, rand1, rand2);
   number.value="";
}
submit.addEventListener('click', checkSolution);


function showResult(){
    result.classList.add('hidden');
    main.classList.add('hidden');
    result2.classList.remove('hidden');
    retest.classList.remove('hidden');
    li1.innerHTML="Questions attempted : "+qAttempted;
    li2.innerHTML="Correct Answered  : "+correct;
    li3.innerHTML="Wrong Answered : "+wrong;
    li4.innerHTML="Total Marks : "+scoreCard;
    result.removeEventListener();
    number.value="";
    animateBox.style.animation="none";
}
result.addEventListener('click',showResult);

function restart()
{
    qAttempted=-1,correct=0,wrong=0,fScore=0,scoreCard=0;
    getQuestion(randIndex,rand1,rand2);
    main.classList.remove('hidden');
    result2.classList.add('hidden');
    retest.classList.add('hidden');
    result.classList.remove('hidden');
    number.value="";
    score.innerHTML="Score - > 0";
    
}
retest.addEventListener('click',restart);

