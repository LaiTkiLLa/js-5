

const timer = document.getElementById('timer')


var end = setInterval(() => {
    timer.textContent = Number(timer.textContent) - 1
    if (parseInt(timer.textContent) === 0) {
        alert('Вы победили в конкурсе!')
        clearInterval(end);
    }
},1000)
