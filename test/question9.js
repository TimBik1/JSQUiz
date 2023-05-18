function submitAnswer(questionIndex) {
    const userAnswer = document.querySelector(`input[name="answer"]:checked`).value;
    localStorage.setItem(`question${questionIndex}`, userAnswer);
    window.location.href = `answer${questionIndex}.html`;
}

function displayFeedback() {
    const questionIndex = 9;
    const storedAnswer = localStorage.getItem(`question${questionIndex}`);
    const correctAnswer = "d";
    const feedback = document.getElementById("feedback");

    if (storedAnswer === correctAnswer) {
        feedback.innerText = "Well done! for, while, and do...while are all looping structures in JavaScript.";
    } else {
        feedback.innerText = "JavaScript supports several looping structures, including for, while, and do...while loops. Option 'd' correctly lists all of these looping structures.";
    }
}

if (document.getElementById("question9")) {
    document.querySelector("button").addEventListener("click", () => submitAnswer(9));
} else if (document.getElementById("feedback")) {
    displayFeedback();
}
