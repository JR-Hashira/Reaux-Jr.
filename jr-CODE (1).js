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
