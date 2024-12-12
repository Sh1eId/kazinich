document.querySelector('.spin-button').addEventListener('click', function() {
    const reels = document.querySelectorAll('.reel');

    reels.forEach(reel => {
        // Генерация уникальных символов для каждой катушки
        const uniqueSymbols = getUniqueRandomNumbers(1, 5, 3); // Генерируем 3 уникальных числа от 1 до 5
        
        reel.querySelectorAll('.symbol').forEach((symbol, index) => {
            symbol.innerText = uniqueSymbols[index]; 
        });
    });
});

// Функция для получения уникальных случайных чисел в заданном диапазоне
function getUniqueRandomNumbers(min, max, count) {
    const numbers = new Set();

    while (numbers.size < count) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNum);
    }

    return Array.from(numbers);
}