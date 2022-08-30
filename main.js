const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav-list');
const triang = document.querySelector('.triangle');

burger.addEventListener('click', () => {
    menu.classList.toggle('visible');
    triang.classList.toggle('visible');
})