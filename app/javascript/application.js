document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.ver-mas');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var card = this.closest('.card'); // Encuentra la tarjeta padre más cercana

            // Alterna entre las clases verde y azul
            if (card.classList.contains('card-clicked-green')) {
                card.classList.remove('card-clicked-green');
                card.classList.add('card-clicked-blue');
            } else if (card.classList.contains('card-clicked-blue')) {
                card.classList.remove('card-clicked-blue');
                card.classList.add('card-clicked-green');
            } else {
                // Si no tiene ninguna clase, asigna la clase verde por defecto
                card.classList.add('card-clicked-green');
            }
        });
    });
});
