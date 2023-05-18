function submitAnswer(questionIndex) {
    const userAnswer = document.querySelector(`input[name="answer"]:checked`).value;
    localStorage.setItem(`question${questionIndex}`, userAnswer);
    window.location.href = `answer${questionIndex}.html`;
}

function displayFeedback() {
    const questionIndex = 5;
    const storedAnswer = localStorage.getItem(`question${questionIndex}`);
    const correctAnswer = "d";
    const feedback = document.getElementById("feedback");

    if (storedAnswer === correctAnswer) {
        feedback.innerText = "Nice work! The new keyword with square brackets is not a valid way to create an object in JavaScript.";
    } else {
        feedback.innerText = "There are several ways to create an object in JavaScript, but using the new keyword with square brackets is not one of them.";
    }
}

if (document.getElementById("question5")) {
    document.querySelector("button").addEventListener("click", () => submitAnswer(5));
} else if (document.getElementById("feedback")) {
    displayFeedback();
}
