// Попап с таймером
const popup = document.getElementById("popup");
const ctaButton = document.getElementById("cta-button");
const closeBtn = document.querySelector(".close");

ctaButton.addEventListener("click", () => {
    popup.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Таймер обратного отсчета
let time = 600; // 10 минут в секундах
const timerElement = document.getElementById("timer");

setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    time--;
}, 1000);

// FAQ аккордеон
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Закрываем все открытые элементы
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Переключаем текущий элемент
        item.classList.toggle('active');
    });
});

// Закрытие попапа при клике на оверлей
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
