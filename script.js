// Fetch a random quote from quotes.json
function fetchQuotes() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "quotes.json", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const quotes = JSON.parse(xhr.responseText);
            const randomIndex = Math.floor(Math.random() * quotes.length);
            document.getElementById("quote").innerText = quotes[randomIndex];
        } else {
            console.error("Error fetching quotes");
        }
    };
    xhr.send();
}

// Fetch and display breathing instructions
function fetchBreathingExercise() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "breathing.json", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const steps = JSON.parse(xhr.responseText);
            const display = document.getElementById("breathing-display");
            display.innerHTML = ""; // Clear previous content

            steps.forEach((step, index) => {
                setTimeout(() => {
                    display.innerText = step;
                }, index * 4000); // Show each step for 4 seconds
            });
        } else {
            console.error("Error fetching breathing exercise");
        }
    };
    xhr.send();
}
/*cd E:/MindfulnessTracker
npm install -g http-server
http-server
http://localhost:8080/index.html
*/