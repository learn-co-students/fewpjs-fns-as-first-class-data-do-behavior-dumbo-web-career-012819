/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  if (time.substring(0,2) > 17)  {
    return "Good Evening";
  } else if (time.substring(0,2) > 12 && time.substring(0,2 < 17)) {
    return "Good Afternoon";
  } else {
    return "Good Morning";
  }
}
(time.substring(0,2) < 12)

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  document.getElementById('greeting').innerHTML = `<h1>${string}</h1>`;
}
