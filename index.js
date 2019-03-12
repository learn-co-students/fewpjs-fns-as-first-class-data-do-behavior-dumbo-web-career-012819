/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const timeArr = time.split(":");
  const hour = parseInt(timeArr[0]);
  const minutes = parseInt(timeArr[1]);

  if (hour < 12) {
    return "Good Morning";
  } else if ((hour >= 12 && minutes >= 0) && (hour < 17)) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  const greetingNode = document.querySelector('#greeting');
  greetingNode.textContent = string;
}
