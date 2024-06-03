// Função para abrir e fechar o menu hambúrguer
function toggleMenu() {
    var menu = document.querySelector('.table-of-contents');
    console.log(menu); // Verifica se o seletor está selecionando o menu corretamente
    menu.classList.toggle('active');
}

// Event listener para o menu hambúrguer
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.hamburger').addEventListener('click', toggleMenu);
});


// Função para mostrar ou ocultar o botão "Voltar ao Topo"
function toggleBackToTop() {
    var button = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Event listener para o scroll da página
window.addEventListener('scroll', toggleBackToTop);

// Função para voltar ao topo da página
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Event listener para o botão "Voltar ao Topo"
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.back-to-top').addEventListener('click', backToTop);
});
