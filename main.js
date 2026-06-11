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

    // Define se usa singular ou plural para cada unidade de tempo
    const txtDias = dias === 1 ? "dia" : "dias";
    const txtHoras = horas === 1 ? "hora" : "horas";
    const txtMinutos = minutos === 1 ? "minuto" : "minutos";
    const txtSegundos = segundos === 1 ? "segundo" : "segundos";

    // Texto formatado com o nome inteiro
    const textoCronometro = `${dias} ${txtDias} ${horas} ${txtHoras} ${minutos} ${txtMinutos} ${segundos} ${txtSegundos}`;

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

atualizaContador();
setInterval(atualizaContador, 1000);