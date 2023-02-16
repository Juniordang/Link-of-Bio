const btn = document.querySelector('.switch')
btn.addEventListener('click', change)
function change() {
    const html = document.querySelector('html')
    if (html.classList.contains('light')){
        html.classList.remove('light')
    }else {
        html.classList.add('light')
    }
}