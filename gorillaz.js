// Seleciona o botão de dropdown e o menu de dropdown
const dropdownButton = document.getElementById("dropdownMenuButton");
const dropdownMenu = document.getElementById("dropdownMenu");

// Adiciona o evento de clique ao botão
dropdownButton.addEventListener("click", function() {
    // Alterna a visibilidade do menu (se estiver visível, esconde; se estiver escondido, exibe)
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
    } else {
        dropdownMenu.style.display = "block";
    }
});

// Adiciona um evento de clique fora do dropdown para fechá-lo
window.addEventListener("click", function(event) {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = "none";
    }
});

function toggleDropdown() {
    var button = document.getElementById('dropdownMenuButton');
    var dropdown = document.getElementById('dropdownMenu');
    var isOpen = dropdown.classList.contains('show'); // Verifica se o dropdown está aberto
    
    // Alterna o texto do botão
    if (isOpen) {
        button.innerHTML = "🎵Gêneros Musicais";
    } else {
        button.innerHTML = "🎧Escolha seu som";
    }

    // Alterna a classe que controla o dropdown
    dropdown.classList.toggle('show'); // Bootstrap já usa a classe 'show' para exibir o dropdown
}
