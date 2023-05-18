function submitAnswer(questionIndex) {
    const userAnswer = document.querySelector(`input[name="answer"]:checked`).value;
    localStorage.setItem(`question${questionIndex}`, userAnswer);
    window.location.href = `answer${questionIndex}.html`;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("answer1.html")) {
      const userAnswer = localStorage.getItem("question1");
      const correctAnswer = "b";
      const feedbackElement = document.getElementById("feedback");
  
      if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Congratulations! You're right. console.log() is the standard way to log a message to the console in JavaScript. It's often used for debugging purposes.";
      } else {
        feedbackElement.textContent = "The correct way to log a message to the console in JavaScript is using the console.log() method. Other options are not standard methods provided by JavaScript to log messages in the console.";
      }
    }
  });
  