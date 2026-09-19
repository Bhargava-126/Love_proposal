const questions = [
    "Are you really sure? 🥺❤️",
    "Think again... 😭💔",
    "Please give me one chance? 🥹💕",
    "Are you sure you want to say NO? 😢",
    "What if I promise to make you smile every day? 🥰",
    "Still NO? My heart is breaking... 💔🥺",
    "Maybe you should think about it again? 😌❤️",
    "Don't you think we would look cute together? 🥰💕",
    "Are you really going to break my heart? 😭💔",
    "One more chance please? 🥺👉👈",
    "What if I bring you your favorite food? 🍕❤️",
    "What if I make you laugh every single day? 😂💕",
    "Still saying NO to me? 😭",
    "My heart says you should click YES ❤️",
    "Are you absolutely sure? 🥺",
    "You might regret saying NO 😜❤️",
    "Come on... give me a chance? 🥹",
    "I promise I will always make you smile ❤️",
    "What if this is our beginning? 💕",
    "Please don't make me ask again 😭❤️",
    "Do you really want to keep saying NO? 🥺",
    "Maybe your heart is saying YES? ❤️",
    "I think you secretly want to say YES 😏💕",
    "Still NO? Seriously? 😭",
    "Can I get one YES from you? 🥹❤️",
    "What if I say please one more time? 🥺👉👈",
    "My heart is waiting for your YES ❤️",
    "Don't leave me with a NO 😭💔",
    "Are you trying to make me cry? 🥺",
    "Okay... but think one more time ❤️",
    "Last chance... maybe? 😜💕",
    "You know you want to say YES 😏❤️",
    "Should I keep asking forever? 😂💕",
    "I can do this all day 😌❤️",
    "NO again? My heart cannot handle this 😭",
    "Please press YES and make me happy 🥰",
    "What is stopping you? 🥺❤️",
    "Maybe we are meant to be? 💕",
    "I'm still waiting... ❤️",
    "Your YES would make my day 🥹",
    "One little YES? ❤️",
    "I promise this is worth it 🥰💕",
    "Okay... I'm not giving up 😜❤️",
    "You cannot escape this question 😂",
    "Will you finally say YES? 🥺❤️"
];

let questionIndex = 0;

const question = document.getElementById("question");
const subtext = document.getElementById("subtext");
const buttons = document.getElementById("buttons");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const result = document.getElementById("result");

noButton.addEventListener("click", function () {

    // Get next question
    question.innerText = questions[questionIndex];

    questionIndex++;

    // When all questions are finished,
    // start again from first question
    if (questionIndex >= questions.length) {
        questionIndex = 0;
    }

    // Change the subtext every time
    const messages = [
        "I really want to know your answer... 🥺",
        "Please think about it ❤️",
        "I'm still waiting for you... 💕",
        "Don't give up on us yet 🥹",
        "My heart is waiting... ❤️"
    ];

    subtext.innerText =
        messages[Math.floor(Math.random() * messages.length)];

    // Make YES button slightly bigger after every NO
    const currentSize =
        parseFloat(window.getComputedStyle(yesButton).fontSize);

    yesButton.style.fontSize = (currentSize + 1) + "px";

    const currentPadding =
        parseFloat(window.getComputedStyle(yesButton).paddingTop);

    yesButton.style.padding =
        (currentPadding + 1) + "px 30px";
});


yesButton.addEventListener("click", function () {

    // Hide both buttons
    buttons.style.display = "none";

    // Show final message
    question.innerText = "You said YES! ❤️🥰";

    subtext.innerText =
        "You just made my world a happier place! 💕";

    result.innerText =
        "Forever starts here ❤️💍";

    // Create floating hearts
    createHearts();
});


function createHearts() {

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.innerText = "❤️";

        heart.style.position = "fixed";
        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top =
            Math.random() * 100 + "vh";

        heart.style.fontSize =
            (20 + Math.random() * 30) + "px";

        heart.style.pointerEvents = "none";

        heart.style.animation =
            "heartFloat 3s ease-out forwards";

        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 3000);
    }
}
