document.querySelector('.spin-button').addEventListener('click', function() {
    const reels = document.querySelectorAll('.reel');
    
    reels.forEach(reel => {
        const randomSymbol = Math.floor(Math.random() * 5); 
        reel.querySelectorAll('.symbol').forEach((symbol, index) => {
            symbol.innerText = randomSymbol; 
        });
    });
});