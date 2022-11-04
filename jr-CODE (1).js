var intervalIds = new Array();

function startButtonClick(){ // When someone clicks the start button the stop button function is disabled.
    document.getElementById("btnStart").disabled= true;
    document.getElementById("btnStop").disabled= false;

    runTimer(document.getElementById("DisplayCountdown")); //starts the timer

}

function stopButtonClick(){ // When someone clicks the stop button the start button function is disabled.
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStop").disabled = true;

    for(i=0; i < 11; i++){
        clearTimeout(intervalIds[i]); //pause
    }

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
function runTimer(x) {   
//This is the start of JavaScript Comment
CurrTime = 50;
//The number my timer starts at
var Timeout = 1000;
//How long before each change in the timer, 5000 miliseconds
for(i=0; i < 11; i++){
    intervalIds[i] = setTimeout(function(){
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

function getInput() {

do{
    Firstname = prompt ("Please deposit your name"); // Part one of my passkey(only has to limit under 20 character)
    Lastname = prompt ("Please desposit, please deposit last name"); // Part two of my passkey(only has to limit under 20 character)
    Fullname = Firstname + " " + Lastname; // Making sure that both first and last are total to the passwords
    if(Fullname.length > 20){           // Explainingthat my charater limit can't surpass 20 unless the passcode will be deemed invalid
        alert("DIDN'T DEPOSIT RIGHT COINAGE PLEASE TRY AGAIN,PLEASE DEPOSIT. PLEASE DEPOSIT")
    }
}
    while(Fullname.length > 20); // A way to break out of the loop

    do{
        BadgeHashtag = prompt("Please insert the correct code or else!");

        if(BadgeHashtag > 1000){// This mean that any number below 1000 is safe to use
            alert("I WILLL ASK ONCE AGAIN, PLEASE INSERT THE CORRECT CODE OR ELSE");

        } 
    } while(BadgeHashtag > 1000); // The bagde number can't surpass the number 1000 unless the passcode will be deem invalid


}
