// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', function () {
            nav.classList.toggle('active');
        });

        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }

    // Contact form -> WhatsApp
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const servico = document.getElementById('servico').value;
            const mensagem = document.getElementById('mensagem').value.trim();

            let text = `Olá! Meu nome é ${nome}.`;
            if (servico) {
                text += ` Gostaria de solicitar um orçamento para: ${servico}.`;
            }
            if (mensagem) {
                text += `\n\n${mensagem}`;
            }

            const url = `https://wa.me/5511915188531?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
        });
    }
});
