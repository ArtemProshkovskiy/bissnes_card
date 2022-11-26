const swiper = new Swiper('.swiper-portfolio', {
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next-portfolio',
        prevEl: '.swiper-button-prev-portfolio',
    },
    speed: 600,
});

const hamb = document.querySelector(".menu__burger");
const popup = document.querySelector(".popup-burger");
const body = document.body;


// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
}


// Закрытие попапа при клике на  меню
function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}


const anchors = document.querySelectorAll('a[href^="#"]');

// Цикл по всем ссылкам
for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        popup.classList.remove("open");
        hamb.classList.remove("active");
        body.classList.remove("noscroll");
        e.preventDefault() // Предотвратить стандартное поведение ссылок
        // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
        const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
        // Плавная прокрутка до элемента с id = href у ссылки
        document.querySelector(goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

new WOW().init();