const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Lógica das Abas
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// Lógica do Cronômetro
const tempos = [
    new Date("2024-12-31T23:59:59"),
    new Date("2024-11-05T00:00:00"),
    new Date("2024-09-30T00:00:00"),
    new Date("2024-08-01T00:00:00")
];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    if (tempoFinal > 0) {
        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
    } else {
        return "Prazo Encerrado";
    }
}

function atualizaCronometro() {
    for (let i = 0; i < tempos.length; i++) {
        const el = document.getElementById("contador" + i);
        if (el) {
            el.textContent = calculaTempo(tempos[i]);
        }
    }
}

// Atualiza a cada 1 segundo
// Atualiza imediatamente e depois a cada 1 segundo
atualizaCronometro();
setInterval(atualizaCronometro, 1000);
