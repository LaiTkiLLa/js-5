const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1
            console.log(dead)
            if (parseInt(dead.textContent) === 10) {
            alert('Вы победили')
            dead.textContent = 0
            lost.textContent = 0
        }
        } else {
            lost.textContent = Number(lost.textContent) + 1
            if (parseInt(lost.textContent) === 5) {
            alert('Вы проиграли')
            dead.textContent = 0
            lost.textContent = 0
        }
        };
    };
};

