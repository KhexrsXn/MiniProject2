const quizForm = document.querySelector(".questions-form");
const resultPanel = document.querySelector("#result");
const marks = document.querySelector("span.marks");
const audio = document.querySelector("#audio1");
const testAnswers = ["B", "C", "C", "B", "C", "B", "C", "B", "B", "A"];

quizForm.addEventListener("submit", e => {
    e.preventDefault();
    audio.play();

    let userAnswers = [quizForm.qn1.value, quizForm.qn2.value, quizForm.qn3.value, quizForm.qn4.value, quizForm.qn5.value, quizForm.qn6.value, quizForm.qn7.value, quizForm.qn8.value, quizForm.qn9.value, quizForm.qn10.value];
    let score = 0;

    userAnswers.forEach((answer, index) => {
        if (answer === testAnswers[index]) {
            score += 10;
        }
    });

    resultPanel.classList.remove("hide");

    scrollTo({
        top: 0,
        behavior: "smooth"
    });

    let output = 0;

    const counter = setInterval(() => {
        marks.textContent = `${output}%`;

        if (output === score) {
            clearInterval(counter);
        } else {
            output++;
        }
    })

    quizForm.reset();
});