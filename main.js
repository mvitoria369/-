const botoes = document.querySelectorAll('.botao');
const abasTextos = document.querySelectorAll('.aba-conteudo');

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        botoes.forEach(b => b.classList.remove('ativo'));
        abasTextos.forEach(a => a.classList.remove('ativo'));

        botao.classList.add('ativo');
        abasTextos[index].classList.add('ativo');
    });
});

const dataObjetivo = new Date("2026-12-31T23:59:59").getTime();

function atualizaContador() {
    const agora = new Date().getTime();
    const tempoRestante = dataObjetivo - agora;

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    const txtDias = dias === 1 ? "dia" : "dias";
    const txtHoras = horas === 1 ? "hora" : "horas";
    const txtMinutos = minutos === 1 ? "minuto" : "minutos";
    const txtSegundos = segundos === 1 ? "segundo" : "segundos";

    const textoCronometro = `${dias} ${txtDias} ${horas} ${txtHoras} ${minutos} ${txtMinutos} ${segundos} ${txtSegundos}`;

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