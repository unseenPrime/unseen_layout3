// Клас для додавання/видалення класу active
function toggleMenu() {
  document.querySelector('.menu__list').classList.toggle('active');
  document.querySelector('.burger').classList.toggle('active');
}

// Навішуємо обробник подій на клік по бургер-меню
document.querySelector('.burger').addEventListener('click', toggleMenu);
