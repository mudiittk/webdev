'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const highscore = document.querySelector(`.highscore`).textContent;
console.log(number);

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector(`.guess`).value);

    if (!guess) {
        document.querySelector(`.message`).textContent = `Please enter a valid number!`;

    } else if (guess != number) {
        if (score > 1) {
            document.querySelector(`.message`).textContent = (guess > number ? `Too High!` : `Too Low`);
            score--;
            document.querySelector(`.score`).textContent = score;
        } else {
            document.querySelector(`.message`).textContent = `Game Over.`;
            document.querySelector(`.score`).textContent = 0;

        }

    } else if (guess === number) {
        document.querySelector(`.message`).textContent = `Correct Guess!!`;
        document.querySelector(`body`).style.backgroundColor = `#60b347`;
        document.querySelector(`.number`).textContent = number;
        document.querySelector(`.number`).style.width = `30rem`;


        if (score > highscore) {
            document.querySelector(".highscore").textContent = score;

        }

    }

});

document.querySelector(`.again`).addEventListener(`click`, function () {
    document.querySelector(`.message`).textContent = `Start guessing...`;
    document.querySelector(`.score`).textContent = 20;
    document.querySelector(`.guess`).value = ``;
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.number`).style.width = `15rem`;
    document.querySelector(`body`).style.backgroundColor = `#222`;
    number = Math.trunc(Math.random() * 20) + 1;
    console.log(number);


});