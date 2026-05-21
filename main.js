const botoes = document.querySelectorAll('.botao');
const abasTextos = document.querySelectorAll('.aba-conteudo');

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        // Remove a classe 'ativo' de todos os botões e abas
        botoes.forEach(b => b.classList.remove('ativo'));
        abasTextos.forEach(a => a.classList.remove('ativo'));

        // Adiciona a classe 'ativo' apenas no botão e aba clicados
        botao.classList.add('ativo');
        abasTextos[index].classList.add('ativo');
    });
});

const dataObjetivo = new Date("2026-12-31T23:59:59").getTime();

function atualizaContador() {
    const agora = new Date().getTime();
    const tempoRestante = dataObjetivo - agora;

    // Cálculos de tempo para Dias, Horas, Minutos e Segundos
    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    // Texto formatado que vai aparecer na tela
    const textoCronometro = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    // Atualiza o contador de TODAS as abas (já que o prazo final é o mesmo)
    for (let i = 0; i < 4; i++) {
        const elementoContador = document.getElementById(`contador${i}`);
        
        if (elementoContador) {
            if (tempoRestante > 0) {
                elementoContador.innerHTML = textoCronometro;
            } else {
                elementoContador.innerHTML = "Prazo Encerrado!";
            }
        }
    }
}

// Executa a função imediatamente para não começar em branco
atualizaContador();

// Atualiza o cronômetro a cada 1 segundo (1000 milissegundos)
setInterval(atualizaContador, 1000);