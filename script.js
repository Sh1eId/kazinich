document.querySelector('.spin-button').addEventListener('click', function() {
    const reels = document.querySelectorAll('.reel');
    
    // Генерируем уникальные числа для каждой катушки
    for (let i = 0; i < reels.length; i++) {
        const symbols = reels[i].querySelectorAll('.symbol');
        const uniqueNumbers = getUniqueRandomNumbers(1, 15, symbols.length);
        
        // Заполняем символы уникальными числами
        symbols.forEach((symbol, index) => {
            symbol.textContent = uniqueNumbers[index];
        });
    }
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