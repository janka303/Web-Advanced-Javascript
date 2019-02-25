const buttons = document.getElementById("tip")

buttons.addEventListener('click', function(e){
    if (e.target.matches('button')){
        // Do something
        console.log("A button was clicked!");  
        //get the id property of the event target to identify the specific element that sent the event and store it in a constant
        const btn = e.target.id;
        console.log(btn);
    }

    if(e.target.id === "10"){
    	
    }


});

function tip(){
	const btn = e.target.id;

	var num1 = document.getElementById("10");
	
	var tenp = num1 / 10;
	console.log(num1);

}