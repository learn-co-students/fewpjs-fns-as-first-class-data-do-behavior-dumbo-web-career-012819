/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
    if (parseInt(time, 10) < 12) return "Good Morning"
    if (parseInt(time, 10) > 17) return "Good Evening"
    return "Good Afternoon"
    }

 function displayMessage(message) {
     document.getElementById("greeting").textContent = message;
 }
