console.log ("hello world!");
// Hype Measurement

// function greet() { 
//     let visitor = prompt("What is your name friend?");
// }



function Excited() {
    let hype = prompt("On a scale of ten, how excited are you to see Gertrude the elephant?"); 
    if (hype < 5) {
        message = ", you have upset Gertude with your indifference.🐘🐘🐘🐘🐘";
    }
    else if (hype > 6) {
        message = " is awesome! Yeaaaah! Elephants! YEAAAH!! STOMP STOMP!🐘🐘🐘🐘🐘";
    }
    else {
        message = " try again, friend🐘🐘🐘🐘🐘";
    }
    {
        document.getElementById('scroller').innerHTML = (visitor  +  message);  
    }
    
}
let visitor = prompt("What is your name friend?")
// let hype = prompt("On a scale of ten, how excited are you to see Gertrude the elephant?") 
Excited()

