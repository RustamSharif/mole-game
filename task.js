document.addEventListener('DOMContentLoaded', () => {
    const deadCounter = document.getElementById('dead');
    const lostCounter = document.getElementById('lost');
    let dead = 0;
    let lost = 0;

    const checkGameStatus = () => {
        if (dead === 10) {
            alert('Вы выиграли!');
            resetCounters();
        } else if (lost === 5) {
            alert('Вы проиграли!');
            resetCounters();
        }
    };

    const resetCounters = () => {
        dead = 0;
        lost = 0;
        updateUI();
    };

    const updateUI = () => {
        deadCounter.textContent = dead;
        lostCounter.textContent = lost;
    };

    for (let i = 1; i <= 9; i++) {
        const hole = document.getElementById(`hole${i}`);
        hole.onclick = () => {
            if (hole.classList.contains('hole_has-mole')) {
                dead++;
            } else {
                lost++;
            }
            updateUI();
            checkGameStatus();
        };
    }
});