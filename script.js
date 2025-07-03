document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('mensagemBtn');
    const mensagemParagrafo = document.getElementById('mensagem');

    btn.addEventListener('click', function() {
        const mensagens = [
            "A persistência realiza o impossível!",
            "Seja a mudança que você deseja ver no mundo.",
            "O sucesso é a soma de pequenos esforços repetidos.",
            "Acredite em você e tudo será possível!",
            "Nunca desista dos seus sonhos."
        ];
        const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];

        mensagemParagrafo.textContent = mensagemAleatoria;
        mensagemParagrafo.style.display = 'block'; // Mostra a mensagem
    });
});