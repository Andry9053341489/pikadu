// Сщздаем переиенную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// Отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event) {
	// Отменяем стандартное поведение ссылки
	event.preventDefault();
	// Вешаем класс на меню, когда кнопка нажата
	menu.classList.toggle('visible');
})
