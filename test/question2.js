function submitAnswer(questionIndex) {
    const userAnswer = document.querySelector(`input[name="answer"]:checked`).value;
    localStorage.setItem(`question${questionIndex}`, userAnswer);
    window.location.href = `answer${questionIndex}.html`;
}

function displayFeedback() {
    const questionIndex = 2;
    const storedAnswer = localStorage.getItem(`question${questionIndex}`);
    const correctAnswer = "d";
    const feedback = document.getElementById("feedback");

    if (storedAnswer === correctAnswer) {
        feedback.innerText = "Well done! var, let, and const are all used to declare variables in JavaScript. They have different scopes and behaviors, which makes JavaScript a flexible language for variable declaration.";
    } else {
        feedback.innerText = "All options (var, let, const) are used to declare variables in JavaScript. They have different scopes and behaviors, but all are used for variable declaration.";
    }
}

if (document.getElementById("question2")) {
    document.querySelector("button").addEventListener("click", () => submitAnswer(2));
} else if (document.getElementById("feedback")) {
    displayFeedback();
}
