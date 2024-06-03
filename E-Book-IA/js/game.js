let acertos = 0;
let erros = 0;
let pontos = 0;
let conquistas = {
    'rápido': false,
    'perfeito': false
};

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', toggleBackToTop);
    updateScore();
});

function checkAnswer(button, answer) {
    const card = button.closest('.card');
    const correctAnswer = card.getAttribute('data-correct');
    const resultDiv = card.querySelector('.result');

    disableCardButtons(card);

    if (answer === correctAnswer) {
        displayResult(resultDiv, 'Correto!', 'green');
        acertos++;
        pontos += 10;
        if (pontos > 0 && pontos % 50 === 0) {
            conquistas['rápido'] = true;
        }
    } else {
        displayResult(resultDiv, 'Errado!', 'red');
        erros++;
        pontos -= 5;
    }

    updateScore();
    updateAchievements();
    checkEndGame();
}

function disableCardButtons(card) {
    const buttons = card.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
}

function displayResult(element, message, color) {
    element.textContent = message;
    element.style.color = color;
}

function updateScore() {
    const scoreElement = document.querySelector('.score');
    scoreElement.textContent = `Acertos: ${acertos} | Erros: ${erros} | Pontos: ${pontos}`;
}

function updateAchievements() {
    const achievementsElement = document.querySelector('.achievements');
    achievementsElement.innerHTML = '';
    for (let achievement in conquistas) {
        if (conquistas[achievement]) {
            achievementsElement.innerHTML += `<li>${achievement}</li>`;
        }
    }
}

function checkEndGame() {
    const totalCards = document.querySelectorAll('.card').length;
    
    if (acertos >= 10) {
        endGame('Parabéns! Você venceu o jogo!', true);
    } else if (acertos + erros === totalCards) {
        endGame('Você perdeu o jogo. Deseja jogar novamente?', false);
    }
}


function endGame(message, isWin) {
    setTimeout(() => {
        alert(message);
        if (isWin) {
            congratulatePlayer();
        }
        showEndGameOptions();
    }, 100);
}

function congratulatePlayer() {
    
    console.log("Parabéns! Você venceu o jogo!");
    
    const winMessage = document.createElement('div');
    winMessage.textContent = 'Parabéns! Você venceu o jogo!';
    winMessage.classList.add('win-message');
    document.body.appendChild(winMessage);
}

function resetGame() {
    acertos = 0;
    erros = 0;
    pontos = 0;
    conquistas = {
        'rápido': false,
        'perfeito': false
    };
    document.querySelectorAll('.card').forEach(card => {
        card.querySelectorAll('button').forEach(btn => btn.disabled = false);
        card.querySelector('.result').textContent = '';
    });
    updateScore();
    updateAchievements();
    hideEndGameOptions();
}

function exitGame() {
    alert('Obrigado por jogar! Até a próxima!');
    // Redirecionar para a página inicial
    window.location.href = "index.html";
}

function toggleBackToTop() {
    const button = document.querySelector ('.back-to-top');
    button.style.display = window.scrollY > 300 ? 'block' : 'none';
}

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function showEndGameOptions() {
    const optionsDiv = document.querySelector('.end-game-options');
    optionsDiv.style.display = 'block';
}

function hideEndGameOptions() {
    const optionsDiv = document.querySelector('.end-game-options');
    optionsDiv.style.display = 'none';
}
