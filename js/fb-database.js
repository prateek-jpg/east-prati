var database = firebase.database();

var email = document.getElementById("email");
const btn = document.getElementById("btn");

function check(){

    if(email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        email.setCustomValidity("");
        database.ref('/newsletter/').push({
            _email: email.value
        })
        alert("Thanks for Subscription! \n ");
        document.getElementById("nform").submit();
        document.getElementById("nform").reset();
    }
    else{email.setCustomValidity("Enter valid email id");
    }
}