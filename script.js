document.querySelector('.spin-button').addEventListener('click', function() {
    const reels = document.querySelectorAll('.reel');

    reels.forEach(reel => {
        // Генерация уникального числа от 1 до 5 для каждой символа в катушке
        const uniqueSymbols = getRandomNumbers(1, 5, 3); // Генерируем 3 случайных числа от 1 до 5
        
        reel.querySelectorAll('.symbol').forEach((symbol, index) => {
            symbol.innerText = uniqueSymbols[index]; 
        });
    });
});

// Функция для получения случайных чисел в заданном диапазоне
function getRandomNumbers(min, max, count) {
    const numbers = [];
    
    while (numbers.length < count) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

        // Убедимся, что число еще не добавлено в массив
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }

    return numbers;
}