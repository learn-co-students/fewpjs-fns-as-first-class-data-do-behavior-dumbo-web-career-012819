/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

const greet = (hour) => {

  if (hour > "12" && hour < "17"){
    return "Good Afternoon";
  } else if (hour > "17" && hour < "24") {
    return "Good Evening";
  } else if (hour > "17") {
    return "Good Morning";
  }

}

 const displayMessage = (message) => {
   document.getElementById('greeting').textContent = message
 }
/* Write your implementation of displayMessage() */
