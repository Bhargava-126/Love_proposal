```javascript
const questions = [
    "Are you really sure? 🥺❤️",
    "Think again... 😭💔",
    "What if I promise to make you smile every day? 🥰",
    "Still saying NO? 😢",
    "One last chance... Will you be mine? ❤️"
];

let questionIndex = 0;

function noClicked() {

    if (questionIndex < questions.length) {
        document.getElementById("question").innerText =
            questions[questionIndex];

        questionIndex++;
    } else {
        moveNoButton();
    }
}

function moveNoButton() {

    const noButton = document.getElementById("no");

    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;

    const randomX = Math.max(10, Math.random() * maxX);
    const randomY = Math.max(10, Math.random() * maxY);

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}

function yesClicked() {

    document.getElementById("buttons").style.display = "none";
    document.getElementById("question").innerText =
        "You said YES! ❤️🥰";

    document.getElementById("subtext").innerText =
        "You just made my world a happier place! 💕";

    document.getElementById("result").innerText =
        "Forever starts here ❤️";
}
```

