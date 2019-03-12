/* Given Code, don't edit */

function handleClick(e) {
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
    greet(timeString)
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
    const timeSplit = timeString.split(":")
    const timeJoin = timeSplit.join("")
    const timeParse = parseInt(timeJoin)
    if (timeParse < 1200) {
        return `Good Morning`;
    }
    else if (timeParse < 1700 && timeParse > 1200) {
        return `Good Afternoon`;
    }
    else if  (timeParse > 1700) {
        return `Good Evening`;
    }
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
    const header = document.querySelector("h1")
    header.innerHTML = string

}
