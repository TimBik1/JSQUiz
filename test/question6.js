function submitAnswer(questionIndex) {
    const userAnswer = document.querySelector(`input[name="answer"]:checked`).value;
    localStorage.setItem(`question${questionIndex}`, userAnswer);
    window.location.href = `answer${questionIndex}.html`;
}

function displayFeedback() {
    const questionIndex = 6;
    const storedAnswer = localStorage.getItem(`question${questionIndex}`);
    const correctAnswer = "a";
    const feedback = document.getElementById("feedback");

    if (storedAnswer === correctAnswer) {
        feedback.innerText = "Correct! When a string and a number are combined using the '+' operator, JavaScript coerces the number into a string and concatenates the two strings. The result is the string \"1020\".";
    } else {
        feedback.innerText = "When a string and a number are combined using the '+' operator, JavaScript coerces the number into a string and concatenates the two strings. In this case, the result is the string \"1020\".";
    }
}

if (document.getElementById("question6")) {
    document.querySelector("button").addEventListener("click", () => submitAnswer(6));
} else if (document.getElementById("feedback")) {
    displayFeedback();
}
