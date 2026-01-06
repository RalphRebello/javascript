function contar() {
  let inicio = document.getElementById("txtinicio");
  let fim = document.getElementById("txtfim");
  let passo = document.getElementById("txtpasso");
  let resultado = document.querySelector("div#res");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    window.alert("[ERRO] Dados faltando!");
    resultado.innerHTML = "Impossivel contar";
  } else {
    resultado.innerHTML = "Contando...";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    let r = "";

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        r += String(c) + " 🖕 ";
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        r += String(c) + " 🖕 ";
      }
    }
    resultado.innerHTML = r;
  }
}
