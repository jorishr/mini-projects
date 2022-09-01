/*
  SIMPLE SCOREKEEPER

  LOGIC
  
  - Use a tracking variable for the score of each player
  - Add event listeners to each player btn
  - Update the score board 
  - The game has two states: while score < than NUM you can play, from NUM 
  onwards game over.
  - Compare players' score with the NUM
*/


const btnP1 = document.querySelector('.btn1'),
      btnP2 = document.querySelector('.btn2'),
      btnP3 = document.querySelector('.btn3'),
      pBtns = document.querySelectorAll('.pBtn')
      scrbrd1 = document.querySelector('#scrbrdP1'),
      scrbrd2 = document.querySelector('#scrbrdP2'),
      scrbrd3 = document.querySelector('#scrbrdP3'),
      scrbrds = document.querySelectorAll('.scrbrd'),
      btnReset = document.querySelector('.btn4');


let score_player1 = 0,
    p1Score =0,
    p2Score = 0,
    p3Score = 0;

let gameOver = false;
let winScore = 10;

/* for each btn, 
  find the corresponding player score and update it when clicked
  find the corresponding scrbrd and update it
 */

btnP1.addEventListener('click', function(){
  if(!gameOver){  
    p1Score++; 
    if(p1Score === winScore){  //this means p1 has won!
      scrbrd1.classList.add('win');
      gameOver = true;
    }
    scrbrd1.textContent = p1Score;
  }
});

btnP2.addEventListener('click', function(){
  if(!gameOver){ 
    p2Score++;  
    if(p2Score === winScore){  //this means p2 has won!
      scrbrd2.classList.add('win');
      gameOver = true;
    }
    scrbrd2.textContent = p2Score;
  }
});

btnP3.addEventListener('click', function(){
  if(!gameOver){ 
    p3Score++;  
    if(p3Score === winScore){ 
      scrbrd3.classList.add('win');
      gameOver = true;
    }
    scrbrd3.textContent = p3Score;
  };
});


//  reset function
function reset(){
  resetPlayerScores();
  gameOver = false;
};

function resetPlayerScores() {
  p1Score = 0;
  p2Score = 0;
  p3Score = 0;
  for(let i = 0; i < scrbrds.length; i++){
    scrbrds[i].classList.remove('win');
    scrbrds[i].textContent = 0;
  };
};

btnReset.addEventListener('click', function(){
  reset();
});

//change the winning score into a let that can be chosen from the input field
let inputScore = document.querySelector("input");
let winScoreDisplay = document.querySelector("p span");

// inputScore.addEventListener("change", function(){
//    winScoreDisplay.textContent = inputScore;
// })

  //change detects any change, whether from click event or number typed.
  //update the p with the winning score
  //the above line will not work because, we are working with a representation
  //of an HTML inside an object, you have to extract the real value first for
  //it to be useful like this:
  //CHECK inputScore.value in the console

// inputScore.addEventListener("change", function(){
//    winScoreDisplay.textContent = inputScore.value;
//    winScore = inputScore.value;
// })
//if you run the above code we get some weird behavior, there appear to be
//no limit. So we have to start DEBUGGING. As something goes wrong when
//comparing the player scores with the winning score.

// The problem is that we are comparing a number(p1Score) to a string(winScore,
// the value of inputScore). There are TWO solutions:
// - force data equality with == instead of ===
// - OR turn the winScore into a Number().

inputScore.addEventListener("change", function(){
   winScoreDisplay.textContent = this.value;
   winScore = Number(this.value);
   reset();
   //in this context "this" refers to whatever the addEventListener is listening
   //on, that is inputScore 
   //without the reset function the winning score could be updated by the user,
   //during the game!
})
