const hamburger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__nav')
const close = document.querySelector('.header__nav__close')

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
})
close.addEventListener('click', () => {
    menu.classList.remove('active')
})

document.querySelectorAll('.header__nav__list__items__navlink').forEach(n => {
    n.addEventListener('click', () => {
        hamburger.classList.remove('active')
        menu.classList.remove('active')
    })
})


document.querySelectorAll('.header__nav__contact__list__items__link').forEach(n => {
    n.addEventListener('click', () => {
        menu.classList.remove('active')
    })
})

document.querySelector('.header__nav__logo').addEventListener('click', () => {
    menu.classList.remove('active')
})