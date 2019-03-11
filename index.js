/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(string) {
  let time = parseInt(string.split(':'))

  if (time < 12) {
    return 'Good Morning';
  } else if (time >= 12 && time < 17) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}

function displayMessage(string) {
  let node = document.getElementById('greeting');
  node.innerHTML = string;
}
