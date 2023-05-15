var button = document.getElementById("enter"); // this is the part that selects the button and create a varoaible for it
var input = document.getElementById("userinput");// this is the part that selects the input and create a varoaible for it
var ul = document.querySelector("ul");// this is the part that selects the ul and create a varoaible for it

function createListElement() { // this is the part that creates the list element
	var div = document.createElement("div");// this is the part that creates the div element that separetes the li and the button
	var li = document.createElement("li");// this is the part that creates the li element
	var delButton = document.createElement("button");// this is the part that creates the button element
	div.classList.add("wrapper");//this is the part that adds the class wrapper to the div
	ul.appendChild(div);//this is the part that adds the div to the ul
	div.append(li, delButton);//this is the part that adds the li and the button to the div 
	li.classList.add("taskClass");//this is the part that adds the class taskClass to the li after the button is clicked
	li.appendChild(document.createTextNode(input.value));//this is the part that adds the input value to the li after the button is clicked
	input.value = "";//this is the part that clears the input value after the task is added and the button is clicked
	delButton.classList.add("delClass");//this is the part that adds the class delClass to the button 
	delButton.innerHTML='DONE';//this is the part that adds the text DONE to the button and changes the text to DONE after the button is clicked
}

function inputLength() { // this is the part that checks the input length and returns the length
	return input.value.length;
}

function addListAfterClick() {// this is the part that checks the input length and creates the list element after the button is clicked
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) { //this is the part that checks the input length and creates the list element after the enter key is pressed
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneTask(task) {//this is the part that adds the class done to the li after the button is clicked also it removes the class done if the button is clicked again
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}

function deleteListElement(element) { //this is the part that deletes the li after the button is clicked
	if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}

function handleUlClick (element) {//this is the part that calls the doneTask and deleteListElement functions
	doneTask(element);
	deleteListElement(element);
}

ul.addEventListener("click", handleUlClick) //this is the part that calls the handleUlClick function
button.addEventListener("click", addListAfterClick); //this is the part that calls the addListAfterClick function
input.addEventListener("keypress", addListAfterKeypress);//this is the part that calls the addListAfterKeypress function