const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao) => {
  botao.onclick = function () {
    // Remove a classe de quem quer que a tenha no momento
    document.querySelector(".botao.ativo")?.classList.remove("ativo");

    // Adiciona ao botão clicado
    botao.classList.add("ativo");
  };
});