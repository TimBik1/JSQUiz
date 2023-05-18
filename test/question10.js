function submitAnswer(questionIndex) {
    const userAnswer = document.querySelector(`input[name="answer"]:checked`).value;
    localStorage.setItem(`question${questionIndex}`, userAnswer);
    window.location.href = `answer${questionIndex}.html`;
}

function displayFeedback() {
    const questionIndex = 10;
    const storedAnswer = localStorage.getItem(`question${questionIndex}`);
    const correctAnswer = "b";
    const feedback = document.getElementById("feedback");

    if (storedAnswer === correctAnswer) {
        feedback.innerText = "Great job! The onclick event is triggered when the user clicks on an HTML element.";
    } else {
        feedback.innerText = "The onclick event is triggered when the user clicks on an HTML element. The other options do not represent events that occur when an element is clicked.";
    }
}

if (document.getElementById("question10")) {
    document.querySelector("button").addEventListener("click", () => submitAnswer(10));
} else if (document.getElementById("feedback")) {
    displayFeedback();
}
