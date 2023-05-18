function submitAnswer(questionIndex) {
    const userAnswer = document.querySelector(`input[name="answer"]:checked`).value;
    localStorage.setItem(`question${questionIndex}`, userAnswer);
    window.location.href = `answer${questionIndex}.html`;
}

function displayFeedback() {
    const questionIndex = 7;
    const storedAnswer = localStorage.getItem(`question${questionIndex}`);
    const correctAnswer = "c";
    const feedback = document.getElementById("feedback");

    if (storedAnswer === correctAnswer) {
        feedback.innerText = "Correct! The func keyword is not a valid way to create a function in JavaScript.";
    } else {
        feedback.innerText = "There are different ways to create a function in JavaScript, but using the func keyword is not one of them.";
    }
}

if (document.getElementById("question7")) {
    document.querySelector("button").addEventListener("click", () => submitAnswer(7));
} else if (document.getElementById("feedback")) {
    displayFeedback();
}
