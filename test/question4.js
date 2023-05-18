function submitAnswer(questionIndex) {
    const userAnswer = document.querySelector(`input[name="answer"]:checked`).value;
    localStorage.setItem(`question${questionIndex}`, userAnswer);
    window.location.href = `answer${questionIndex}.html`;
}

function displayFeedback() {
    const questionIndex = 4;
    const storedAnswer = localStorage.getItem(`question${questionIndex}`);
    const correctAnswer = "c";
    const feedback = document.getElementById("feedback");

    if (storedAnswer === correctAnswer) {
        feedback.innerText = "Correct! The .length property returns the length of a string in JavaScript.";
    } else {
        feedback.innerText = "The length of a string can be obtained using the .length property. Other options do not provide the length of a string.";
    }
}

if (document.getElementById("question4")) {
    document.querySelector("button").addEventListener("click", () => submitAnswer(4));
} else if (document.getElementById("feedback")) {
    displayFeedback();
}
