console.log ("hello world!");
// Hype Measurement

function Excited() {
    let hype = prompt("On a scale of ten, how excited are you to see Gertrude the elephant?"); 
    if (hype < 5) {
        message = ", you have upset Gertude with your indifference.🐘🐘🐘🐘🐘";
    }
    else if (hype > 10) {
        message = " has too much excitement friend, take some deep breaths and drink some water 🐘🐘🐘🐘🐘";
    }
    else if (hype > 6) {
        message = " is awesome! Yeaaaah! Elephants! YEAAAH!! STOMP STOMP!🐘🐘🐘🐘🐘";
    }
    else {
        message = " try again, friend🐘🐘🐘🐘🐘"
        Excited()
    }
    {
        document.getElementById('scroller').innerHTML = (visitor  +  message);  
    }
    
}
let visitor = prompt("What is your name friend?")
// let hype = prompt("On a scale of ten, how excited are you to see Gertrude the elephant?") 
Excited()

let rating = prompt('How many elephants do you want to see? 1-10', '10');

for (let i = 0; i < rating; i++) {
    document.write("<img src='./angry elephant.jpg'/>")
    document.write(i+1)
}


let i = 0;
while(i<10) {
  console.log(i)
  console.log("Blimey, another one stomping this way!!")
  i++
}





        // message = " try again, friend🐘🐘🐘🐘🐘";