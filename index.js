/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet (time) {
  let greetingTime = parseInt(time.split(":"));

  if (greetingTime < 12) {
    return "Good Morning";
  } else if (greetingTime < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage (greeting) {
    let greetingNode = document.getElementById('greeting');
    greetingNode.innerHTML = greeting;
}
