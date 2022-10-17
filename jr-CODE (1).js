function startButtonClick(){
    document.getElementById("btnStart").disabled= true;
    document.getElementById("btnStop").disabled= false;


}

function stopButtonClick(){
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStop").disabled = true;

}

//Alert Text that strings a notification five times
// the counter "i" is just variable for a counter
function displayAlert(alertText){

    counterVariable - 0;

    for(i=0; i < 5; i++){
        alert(alertText+i);
    }
    // Another Countdown Varible is any letter but just have it consist
    
    }

// Runtime is where it's stores my countdown sequence
function runtime(x) {   
//This is the start of JavaScript Comment
CurrTime = 50;
//The number my timer starts at
var Timeout = 1000;
//How long before each change in the timer, 5000 miliseconds
for(i=0; i < 11; i++){
setTimeout(function(){
//Currtime will be decreasing by 5 seconds each time
    if(CurrTime == 0){
    x.innerHTML = CurrTime
    alert("Testing the Charge")
    // When my timer his zero, the alert will show
}
else if(CurrTime < 25){
    x.innerHTML = "Want a break from the charge?"
    // When timer hits less than 25 seconds an alert will show
}
else{
    x.innerHTML = CurrTime}
    CurrTime = CurrTime - 5;

}, Timeout);
Timeout = Timeout + 1000;
}
}

function getInput(y) {

do{
    Firstname = prompt ("Please deposit your name");
    Lastname = prompt ("Please desposit, please deposit last name");
    Fullname = Firstname + " " + Lastname; // Making sure that both first and last are total to the passwords
    if(Fullname.length > 20){
        alert("DIDN'T DEPOSIT RIGHT COINAGE PLEASE TRY AGAIN,PLEASE DEPOSIT. PLEASE DEPOSIT")
    }
    while(Fullname.length > 20) // A way to break out of the loop

    do{
        BadgeHashtag = prompt("Please insert the correct code or else!");

        if(BadgeHashtag > 1000){// This mean that any number below 1000 is safe to use
            alert("I WILLL ASK ONCE AGAIN, PLEASE INSERT THE CORRECT CODE OR ELSE");

        } 
    }
    while(BadgeHashtag > 1000) // just like line 51


}
