const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", function() {
  startCountdown();
  document.querySelector("#start-btn").disabled = true;
});




// ITERATION 2: Start Countdown
function startCountdown() {
  // console.log("startCountdown called!");


  // Your code goes here ...
  const timer = setInterval(function() {
    if (remainingTime === 0) {
      clearTimeout(timer);
      showToast();
    } else {
      remainingTime -= 1;
      document.querySelector("#time").innerText = remainingTime;
    }
  }, 1_000);
}




// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
