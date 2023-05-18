function submitAnswer(questionIndex) {
    const userAnswer = document.querySelector(`input[name="answer"]:checked`).value;
    localStorage.setItem(`question${questionIndex}`, userAnswer);
    window.location.href = `answer${questionIndex}.html`;
}

function displayFeedback() {
    const questionIndex = 3;
    const storedAnswer = localStorage.getItem(`question${questionIndex}`);
    const correctAnswer = "b";
    const feedback = document.getElementById("feedback");

    if (storedAnswer === correctAnswer) {
        feedback.innerText = "Great job! Tables are not a valid data type in JavaScript. Arrays and objects are used for more complex data structures.";
    } else {
        feedback.innerText = "JavaScript has several data types, but tables are not one of them. Arrays and objects are used to create more complex data structures.";
    }
}

if (document.getElementById("question3")) {
    document.querySelector("button").addEventListener("click", () => submitAnswer(3));
} else if (document.getElementById("feedback")) {
    displayFeedback();
}
