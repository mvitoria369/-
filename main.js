const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    document.querySelector(".botao.ativo")?.classList.remove("ativo");
    botao.classList.add("ativo");
  });
});

function showOffsetPos(sId) {
  const elemento = document.getElementById(sId);
  
  if (!elemento) {
    console.warn(`Elemento com id "${sId}" não encontrado.`);
    return;
  }

  // Pega a posição relativa à viewport + o scroll atual da página
  const rect = elemento.getBoundingClientRect();
  const absoluteTop = rect.top + window.scrollY;
  const absoluteLeft = rect.left + window.scrollX;

  console.log(
    `Posição de "${sId}":\n` +
    `Esquerda: ${absoluteLeft}px;\n` +
    `Topo: ${absoluteTop}px;`
  );
}

showOffsetPos("content");