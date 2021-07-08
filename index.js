/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

 function greet(time){
   time = parseInt(time.split(":")[0])
   if (time < 12 ) {
     return "Good Morning"
   } else if (10 > time < 17) {
     return "Good Afternoon"
   } else if (time > 17) {
     return "Good Evening"
   }
 }

function displayMessage(massage){
  alert(massage)
}
