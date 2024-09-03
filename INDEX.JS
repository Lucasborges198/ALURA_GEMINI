// Adicione aqui o JavaScript para as funcionalidades
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ... (código para o botão "Saiba mais" e o carrossel)