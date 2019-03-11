/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

const greet = function(str) {
  let arr = str.split(":")
  let int = parseInt(arr[0])

  if (int < 12 ) {
    return "Good Morning";
  } else if (int > 12 && int < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

const displayMessage = function(str) {
  let greeting = document.getElementById('greeting');
  greeting.innerHTML = str;
}
