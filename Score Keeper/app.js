const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1');
const p2Display = document.querySelector('#p2');
const resetButton = document.querySelector('#resetButton');
const playToSelect = document.querySelector('#playto');
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false; //If someone hit the winning score, this becomes true

//Click for player 1 button and adding +1 to the score
p1Button.addEventListener('click', function(){
	if(!isGameOver){
	//if isGameOver still false, will add +1 to the p1Score, until hit the winning score
		p1Score += 1;
	//when hitting the winning score, buttons are disabled, texts change color and gameOver is true, so the code above wont run
	if(p1Score === winningScore){
		isGameOver = true;
		p1Display.classList.add('has-text-success');
		p2Display.classList.add('has-text-danger');
        p1Button.disabled = true;
        p2Button.disabled = true;
	  }
	p1Display.textContent = p1Score;   
	}
})
//Click for player 2 button and adding +1 to the score
p2Button.addEventListener('click', function(){
	//if isGameOver still false, will add +1 to the score, untill hit the winning score
	if(!isGameOver){
		p2Score += 1;
	//hitting the winning score, isGameOver is true now, the code above won't run anymore, until reset button is clicked
	if(p2Score === winningScore){
		isGameOver = true;
		p2Display.classList.add('has-text-success');
		p1Display.classList.add('has-text-danger');
		p1Button.disabled = true;
        p2Button.disabled = true;
	  }
	p2Display.textContent = p2Score;   
	}
})

//changing the winning score limit. Default is 3 (see variables declaration)
playToSelect.addEventListener('change', function(){
   winningScore = parseInt(this.value);
   resete();
})

//Events on reset button click. It is calling the function resete whenever resetButton is clicked
resetButton.addEventListener('click', resete);


//function resete set the p1Score and p2Score to 0
//then the display content is set to 0
//also enables the p1Button and p2Button that were disabled when any of the players hit the winning score
function resete(){
	isGameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove('has-text-success','has-text-danger');
	p2Display.classList.remove('has-text-success','has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;

}