

const cookie = document.getElementById('cookie')
const clicker = document.getElementById('clicker__counter')


cookie.onclick = () => {
    console.log(speed)
    cookie.classList.toggle('clicker__cookie')
    clicker.textContent = Number(clicker.textContent) + 1
}


