import './index.scss'
import './pug/layouts/index.pug'


const links = document.querySelectorAll('.header__nav__list__items__navlink')

links.forEach(li => {
    li.addEventListener('click', () => {
        resetLinks();
        li.classList.add("active")
    })
})

function resetLinks(){
    links.forEach(li => {
        li.classList.remove("active")
    })
}


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


const closeRegister = document.querySelector('.register__card__close')
const openRegister = document.querySelectorAll('.header__nav__contact__list__items__link')
const openValid = document.querySelectorAll('.footer__contact__link')
const register = document.querySelector('#register')

openRegister.forEach( (el) =>{
    el.addEventListener("click", () => {
        register.style.display = "block"
    })
})

openValid.forEach( (el) =>{
    el.addEventListener("click", () => {
        register.style.display = "block"
    })
})

closeRegister.addEventListener("click", () =>{
    register.style.display = "none"
})


const form = document.querySelector('.register__card__form')
const name = document.querySelector('.register__card__form__name')
const nameError = document.querySelector('.register__card__form__error--name')
const email = document.querySelector('.register__card__form__email')
const emailError = document.querySelector('.register__card__form__error--email')
const problem = document.querySelector('.register__card__form__problem')
const problemError = document.querySelector('.register__card__form__error--problem')
const btn = document.querySelector('.register__card__form__btn')
const success = document.querySelector('.register__card__success')


let validate = true

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    checkInput()
    if(validate === true){
        btn.classList.add('active')
        btn.disabled = true
        btn.innerHTML = "идет отправка..."
        setTimeout(async ()=>{
            btn.disabled = false
            btn.innerHTML = "Отправить"
                btn.classList.remove('active')
                success.style.display = "block"
            clearInput()
        },2000)
    }
})


function checkInput(){
    const nameValue = name.value.trim()
    const emailValue = email.value.trim()
    const problemValue = problem.value.trim()


    if (nameValue === ''){
        validate = false
        nameError.style.display = 'block'
        name.classList.add('active')
    }else{
        validate = true
        nameError.style.display = 'none'
        name.classList.remove('active')
    }

    if (emailValue === ''){
        validate = false
        emailError.style.display = 'block'
        email.classList.add('active')
    }else{
        validate = true
        emailError.style.display = 'none'
        email.classList.remove('active')
    }

    if (problemValue === ''){
        validate = false
        problemError.style.display = 'block'
        problem.classList.add('active')
    }else{
        validate = true
        problemError.style.display = 'none'
        problem.classList.remove('active')
    }
}

function clearInput (){
    name.value= '';
    email.value= '';
    problem.value= ''
}