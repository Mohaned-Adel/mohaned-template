let openIcon = document.querySelector('.open');
let closeIcon = document.querySelector('.closeIcon')
let navBar = document.getElementById('nav-bar');
console.log(openIcon)


openIcon.addEventListener('click', () => {
    navBar.classList.toggle('view');
    closeIcon.classList.toggle('close')
})

closeIcon.addEventListener('click', () => {
    navBar.classList.toggle('view');
    closeIcon.classList.toggle('close')
})
