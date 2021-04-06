var colors = generateRandomColors(6);
var numsquares = 6;
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");

//Easy Button click
easyBtn.addEventListener("click", function(){
	//add class "selected" to variable easybtn, remove from hardbtn
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	//easy mode are only 3 squares, so numsquares = 3
	numsquares=3;
	//generating random colors for the 3 squares using generateRandomColors function
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
});
//Hard button Click, samething as easy button, but with a small difference of 6 squares, instead of 3
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numsquares = 6;
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}

});
//Reset Button Click, adding the click event (when click, something happens)
resetButton.addEventListener("click", function(){
	//generate new colors
	colors = generateRandomColors(numsquares);
	//pick new color
	pickedColor = pickColor();
	//change color display
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
	//change color of squares
	for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	}
	h1.style.background ="steelblue";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares (when you click, something happens)
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//comparing color to pickedColor and changing background
		//if they are the same color, then it's correct, if not, background changes
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = pickedColor;
			resetButton.textContent = "Play Again?"
		} else {
			this.style.background = "white";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//Picking squares, one by one
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	//random number for the array of colors
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	//Adding the result of random color function to an array
	//the result shall be something like (number, number, number), making the RGB system
     for(var i = 0; i < num; i++){
     	arr.push(randomColor())
     
     	
     }
return arr;
}


//random color function, it takes a random number and assign to variables r, g and b. The range is from 0 to 255.
// this is how the RGB system is built
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
