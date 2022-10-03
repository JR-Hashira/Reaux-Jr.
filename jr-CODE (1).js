//Alert Text that strings a notification five times
// the counter "i" is just variable for a counter
function displayAlert(alertText){

    counterVariable - 0;

    for(i=0; i < 5; i++){
        alert(alertText+i);
    }
    // Another Countdown Varible is any letter but just have it consist
    //
    for(i=10; i > 0; i--){
        alert(alertText + "minus" +i);
    }
}


// Runtime is where it's stores my countdown sequence
function runtime(x) {   
//This is the start of JavaScript Comment
CurrTime = 50;
//The number my timer starts at
var Timeout = 5000;
//How long before each change in the timer, 5000 miliseconds

setTimeout(function(){
x.innerHTML = CurrTime;
Currtime = Currtime - 5;
//Currtime will be decreasing by 5 seconds each time
}, setTimeout(function(){
    if(CurrTime == 0){
    x.innerHTML = Currtime
    alert("Testing the Charge")
}
else if(CurrTime < 25){
    x.innerHTML = "Want a break from the charge?"
}
else{
    x.innerHTML = CurrTime}

setTimeout(function(){
x.innerHTML = CurrTime;
//Lines 18 Throught 75 is the whole countdown 
// The Alert for when my time equals zero
alert("Blasting off again");
}, Timeout);

