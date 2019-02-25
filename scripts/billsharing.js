var itemCharge=[]

const addField = document.getElementById("items");
const addPeople = document.getElementById("info");

addField.addEventListener("click", function(e){
    if (e.target.matches('button')){
        console.log("Add item was clicked");
        addItem();  
    }
});

addPeople.addEventListener("click", function(e){
    if (e.target.matches('button')){
        console.log("Add people was clicked"); 
        addPerson();
    }
});

function addItem(){
    var inputField = document.createElement("div");

    inputField.innerHTML = "<input id='item' type='text'>";
    document.getElementById("form").appendChild(inputField);

    var x = document.getElementById("items");
    itemCharge.push(document.getElementById("item").value);
    console.log(itemCharge);
}

function addPerson(){
    var newPerson = document.createElement("div");

    newPerson.innerHTML = "<input type='text' placeholder='Name'>";
    newPerson.innerHTML = "<input id='item' type='text'>"
    document.getElementById("form").appendChild(newPerson);

}