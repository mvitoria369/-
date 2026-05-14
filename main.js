const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao) => {
  botao.onclick = function () {
  
    document.querySelector(".botao.ativo")?.classList.remove("ativo");

    botao.classList.add("ativo");
  };
});
function showOffsetPos(sId) {
  var nLeft = 0,
    nTop = 0;

  for (
    var oItNode = document.getElementById(sId); 
    oItNode; 
    nLeft += oItNode.offsetLeft,
      nTop += oItNode.offsetTop,
      oItNode = oItNode.offsetParent 
  ); 

  console.log(
    'Offset position of "' +
      sId +
      '" element:\n left: ' +
      nLeft +
      "px;\n top: " +
      nTop +
      "px;",
  );
}

showOffsetPos("content");

