// Находим три элемента, с которыми будем работать
const menuBtn = document.querySelector(".menu-btn");
const navlinks = document.querySelector(".nav-links");
const body = document.body;

// При клике на кнопку-бургер
menuBtn.addEventListener("click", function () {
    // Переключаем классы на всех трех элементах
    menuBtn.classList.toggle("is-active");
    navlinks.classList.toggle("is-open");
    body.classList.toggle("no-scroll");
});

// Находим ВСЕ ссылки в меню
const allLinks = document.querySelectorAll(".nav-links a");

// Для каждой ссылки
allLinks.forEach(function (link) {
    // добавляем обработчик клика
    link.addEventListener("click", function () {
        // который убирает все активные классы, чтобы закрыть меню
        menuBtn.classList.remove("is-active");
        navlinks.classList.remove("is-open");
        body.classList.remove("no-scroll");
    });
});
