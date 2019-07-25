/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time){
  let hours;
  if (time.length === 5){
    hours = time.slice(0, 2)
  }
  else if (time.length === 4){
    hours = time.slice(0, 1)
  }
  if (Number(hours) < 12){
    // debugger
    return "Good Morning";
  }
  else if (Number(hours >= 12 && hours < 17)){
    // debugger
    return "Good Afternoon";
  }
  else if (Number(hours >= 17)){
    return "Good Evening";
  }
}
function displayMessage(time){
  greeting = document.getElementById('greeting');
  greeting.textContent = time;

}
