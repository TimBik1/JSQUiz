function submitAnswer(questionIndex) {
    const userAnswer = document.querySelector(`input[name="answer"]:checked`).value;
    localStorage.setItem(`question${questionIndex}`, userAnswer);
    window.location.href = `answer${questionIndex}.html`;
}

function displayFeedback() {
    const questionIndex = 8;
    const storedAnswer = localStorage.getItem(`question${questionIndex}`);
    const correctAnswer = "a";
    const feedback = document.getElementById("feedback");

    if (storedAnswer === correctAnswer) {
        feedback.innerText = "Good job! The <script> tag is used to include JavaScript code in an HTML file.";
    } else {
        feedback.innerText = "The correct way to include JavaScript code in an HTML file is by using the <script> tag. Other options are not valid for including JavaScript in an HTML file.";
    }
}

if (document.getElementById("question8")) {
    document.querySelector("button").addEventListener("click", () => submitAnswer(8));
} else if (document.getElementById("feedback")) {
    displayFeedback();
}
