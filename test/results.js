document.addEventListener('DOMContentLoaded', function() {
    const correctAnswers = {
        question1: 'b',
        question2: 'd',
        question3: 'b',
        question4: 'c',
        question5: 'd',
        question6: 'a',
        question7: 'c',
        question8: 'a',
        question9: 'd',
        question10: 'b',
    };

    let score = 0;

    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
        const userAnswer = localStorage.getItem(question);
        if (userAnswer === correctAnswer) {
            score++;
        }
    }

    document.getElementById('score').textContent = `${score}/10`;
    clearAnswers();
});

function clearAnswers() {
    for (let i = 1; i <= 10; i++) {
        localStorage.removeItem(`question${i}`);
    }
}

function startAgain() {
    window.location.href = 'index.html';
}



