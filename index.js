import './index.css';

const but = document.querySelector('button')

let concur = localStorage.getItem("concur")

if (concur == 'true') {
    document.querySelector('.cookie-consent').remove()
} else {
    but.addEventListener('click', () => {
    localStorage.setItem("concur", true)
    trueAndFalse()
})
}

function trueAndFalse() {
    document.querySelector('.cookie-consent').remove()
}
