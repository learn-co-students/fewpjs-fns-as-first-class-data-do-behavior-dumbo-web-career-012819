/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString))
}

function greet(time) {
  if (parseInt (time, 10) < 12) return "Good Morning";
  else if (parseInt(time, 10) < 17) return "Good Afternoon";
  else return "Good Evening"
}

function displayMessage(display){
  document.getElementById("greeting").textContent = display
}


/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
