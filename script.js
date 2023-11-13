// Optimized and improved code based on the task provided

// GET ELEMENTS
const boxElement = document.querySelector(".box");
const actionButtonElement = document.getElementById("actionButton");
const chronoElement = document.getElementById("chrono");
const subButtonElement = document.getElementById("subButton");
const testCases = {
    "test 1": {
        name: "button work",
        description: "the start countdown button work"
    }
};

// Timer functionality
let startTime = localStorage.getItem('constructionStartTime'); // Retrieve the start time from localStorage
let isWorking = false;
let timer;

// Update the startChronometer function
function startChronometer() {
    if (isWorking) return;
    isWorking = true;

    // If there's no start time in localStorage, set it to the current time
    if (!startTime) {
        startTime = new Date().getTime();
        localStorage.setItem('constructionStartTime', startTime);
    }

    console.log(testCases["test 1"].description); // Output test case description
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = new Date().getTime();
    const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
    chronoElement.textContent = formatTime(elapsedSeconds);
}

function formatTime(seconds) {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
}

// Start button
actionButtonElement.addEventListener("click", () => {
    if (!isWorking) startChronometer();
    actionButtonElement.textContent = isWorking ? "Stop Countdown" : "Start Countdown";
});

// Subscription button
subButtonElement.addEventListener("click", handleSubscriptionClick);

// Handle network status changes
window.addEventListener("offline", () => {
    actionButtonElement.disabled = true;
});
window.addEventListener("online", () => {
    actionButtonElement.disabled = false;
});

// Initialize the chronoElement
if (startTime) {
    // If a start time is present, update the timer immediately
    updateTimer();
}

