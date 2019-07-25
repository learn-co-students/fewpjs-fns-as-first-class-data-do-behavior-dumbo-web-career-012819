/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))

  greet(timeString)
  displayMessage(timeString)
}

function greet(timeString) {
  let hourString = timeString.split(":")[0];
  let hourInt = parseInt(hourString)

  if (hourInt < 12) {
    return "Good Morning"
  } else if (hourInt > 17) {
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}

function displayMessage(string) {
  document.querySelector("#greeting").textContent = string
}



/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
