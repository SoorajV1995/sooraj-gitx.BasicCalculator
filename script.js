let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let numOnebox;
let numTwobox;
let numOne;
let numTwo;
let total;

btn1.addEventListener("click", function(event) {
	numOnebox = document.getElementById('box1').value;
	numTwobox = document.getElementById('box2').value;
	numOne = Number(numOnebox);
	numTwo = Number(numTwobox);

	total = numOne + numTwo;

	document.getElementById('box3').value=total;
});

btn2.addEventListener("click", function(event) {
	numOnebox = document.getElementById('box1').value;
	numTwobox = document.getElementById('box2').value;
	numOne = Number(numOnebox);
	numTwo = Number(numTwobox);

	total = numOne - numTwo;

	document.getElementById('box3').value=total;
});

btn3.addEventListener("click", function(event) {
	numOnebox = document.getElementById('box1').value;
	numTwobox = document.getElementById('box2').value;
	numOne = Number(numOnebox);
	numTwo = Number(numTwobox);

	total = numOne * numTwo;

	document.getElementById('box3').value=total;
});

btn4.addEventListener("click", function(event) {
	numOnebox = document.getElementById('box1').value;
	numTwobox = document.getElementById('box2').value;
	numOne = Number(numOnebox);
	numTwo = Number(numTwobox);

	if(numTwo === 0){
		document.getElementById('box3').value="Can't divide by zero!";
	} else {
	total = numOne / numTwo;
	document.getElementById('box3').value=total;
	}
});