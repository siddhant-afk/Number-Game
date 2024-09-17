'use strict';

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc((Math.random()*20)) + 1;


document.querySelector('.score').textContent = score;

function displayMessage(message){

    document.querySelector('.message').textContent = message;
}


document.querySelector('.again').addEventListener(
    'click',
    function(){

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.number').textContent='?'
        score = 20;
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';
        document.querySelector('.number').style.width = '15rem';
        secretNumber = Math.trunc((Math.random()*20)) + 1;

    }

)
document.querySelector('.check').addEventListener(
    'click',
    function(){
        const guess = Number(document.querySelector('.guess').value);

     

        if(!guess){
            displayMessage( '⛔ No Number');
        }
        else{

            if(guess === secretNumber){
                displayMessage('🎉 Correct Number');
                document.querySelector('.number').textContent = secretNumber;

                document.querySelector('body').style.backgroundColor = '#94d82d';

                document.querySelector('.number').style.width = '30rem';

                highscore = Math.max(highscore,score);
                document.querySelector('.highscore').textContent = highscore;
            }
            else if(guess !== secretNumber){
                if (score>1){
                    displayMessage( (guess > secretNumber) ?'📈 Too High':'📉 Too Low');
                    score--;
                document.querySelector('.score').textContent = score;
                }
                else{
                    document.querySelector('.score').textContent = 0;
                   
                    displayMessage('😓 Game Over'); 
                }
            }
            
            

        }
    }
)