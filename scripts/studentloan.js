$("button").click(function(){
    console.log("Button clicked")
    calculate();    
});

// button.addEventListener('click', function(e){
//     if (e.target.matches('button')){
        
//         console.log("A button was clicked!");  
        
//         const btn = e.target.id;
//         console.log(btn);

//         calculate();
//     }

// });

function calculate(){
	var studentLoan = Number($("#studentloan").val());
    var annualInterest = Number($("#annualinterest").val())/100;
    var time = Number($("#time").val());

    // n = years * 12 payments per year
    // i = interest
    // D = discount factor
    // P = A/D
    //(((1+.005)^360) - 1) / (.005(1+.005)^360)

    var totalPayments = time*12;
    var interestRate = annualInterest/12;
    var r = 1+interestRate;

    console.log(totalPayments);
    console.log(interestRate);

	var discountFactor1 = Math.pow(r, totalPayments)-1;
	// console.log(discountFactor1);

	var discountFactor2 = Math.pow(r, totalPayments)*interestRate;
	// console.log(discountFactor2);

  	var discountFactor = discountFactor1/discountFactor2;
  	// console.log(discountFactor);

  	var monthlyPayment = (studentLoan/discountFactor).toFixed(2);
  	console.log("Monthly Payment = " + monthlyPayment);

	//compound interest formula
    
    //A = P(1+r)^t

    var compoundInterestP1 = studentLoan*(1+annualInterest);

    var compoundInterest = Math.pow(compoundInterestP1, time);
    var finalCompound = compoundInterest.toFixed(2);

    console.log("Compound Interest = " + compoundInterest);

    $("#monthly").html("Monthly Payment: $" + monthlyPayment);
    $("#compound").html("Compound Interest: $" + finalCompound);

}