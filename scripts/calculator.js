const buttons = document.getElementById("functions");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const divide = document.getElementById("divide");

buttons.addEventListener('click', function(e){
    if (e.target.matches('button')){
        // Do something
        console.log("A button was clicked!");  
        //get the id property of the event target to identify the specific element that sent the event and store it in a constant
        const btn = e.target.id;
        console.log(btn);
    }if(e.target.id === "plus"){
        addMe();
        document.getElementsByTagName("span")[0].innerHTML = "+";
    }if(e.target.id === "minus"){
        subtractMe();
        document.getElementsByTagName("span")[0].innerHTML = "-";
    }if(e.target.id === "times"){
        multiplyMe();
        document.getElementsByTagName("span")[0].innerHTML = "×";
    }if(e.target.id === "divide"){
        divideMe();
        document.getElementsByTagName("span")[0].innerHTML = "÷";
    }if(e.target.id === "reload"){
        location.reload();
    }   
});

function addMe(){
    //sum is local to the function
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    var sum = num1 + num2;
    document.querySelector("#sum").innerHTML = "Sum: " + sum;
    // Using the span elemnt to change with button press
}

function subtractMe(){
	var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    var subtract = num2 - num2;
    document.querySelector("#subtract").innerHTML = "Subtract: " + subtract;
}

function multiplyMe(){
	var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    var product = num1 * num2;
    document.querySelector("#product").innerHTML = "Product: " + product;
}

function divideMe(){
	var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    var quotient = num1 / num2;
    document.querySelector("#quotient").innerHTML = "Quotient: " + quotient;
}



// //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_loc_reload
// function reload(){
// 	location.reload();
// }


// https://www.youtube.com/watch?v=7HiC7RK6f-c
// I understand most of what he did in the tutorial but not sure about the cases and the final compute function
// Did not pursue because did not want to copy exactly what he had

//function addOne(){

// 	var one = document.getElementById("input");
// 		one.value += "1";
// 		console.log(one);
// }


// function addTwo(){

// 	var two = document.getElementById("input");
// 		two.value += "2";
// 		console.log(two);
// }

// function addThree(){

// 	var three = document.getElementById("input");
// 		three.value += "3";
// 		console.log(three);
// }

// function addFour(){

// 	var three = document.getElementById("input");
// 		three.value += "4";
// 		console.log(three);
// }

// function addFive(){

// 	var three = document.getElementById("input");
// 		three.value += "5";
// 		console.log(three);
// }

// function addSix(){

// 	var three = document.getElementById("input");
// 		three.value += "6";
// 		console.log(three);
// }

// function addSeven(){

// 	var three = document.getElementById("input");
// 		three.value += "7";
// 		console.log(three);
// }

// function addEight(){

// 	var three = document.getElementById("input");
// 		three.value += "8";
// 		console.log(three);
// }

// function addNine(){

// 	var three = document.getElementById("input");
// 		three.value += "9";
// 		console.log(three);
// }

// function sum(){

// 	var sum = document.getElementById("input");
// 		sum.value += "+";
// 		console.log(sum);
// }

// function subtract(){

// 	var subtract = document.getElementById("input");
// 		subtract.value += "-";
// 		console.log(subtract);
// }

// function product(){

// 	var product = document.getElementById("input");
// 		product.value += "×";
// 		console.log(product);
// }

// function quotient(){

// 	var quotient = document.getElementById("input");
// 		quotient.value += "÷";
// 		console.log(quotient);
// }


	



