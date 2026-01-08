let vet_val = [];

function adicionar() {
  let num = document.getElementById("txtnum");
  let val = document.getElementById("selval");

  if (num.value > 0 && num.value < 101) {
    if (!vet_val.includes(num.value)) {
      let item = document.createElement("option");
      item.text = `Valor ${num.value} adicionado`;
      val.appendChild(item);

      vet_val.push(num.value);
    } else window.alert("Numero já inserido!");
  } else window.alert("Numero fora do range determinado");

  num.value = "";
  num.focus();
}

function analisar() {
  let showData = document.querySelector("div#res");
  let maior = 0;
  let menor = 100;
  let media = 0;
  let soma = 0;
  let pares = 0;
  let impares = 0;

  for (let i in vet_val) {
    let n = Number(vet_val[i]);
    if (maior < n) maior = n;
    if (menor > n) menor = n;
    if (Number(vet_val[i]) % 2 == 0) pares++;
    else impares++;

    soma += Number(vet_val[i]);
    media = soma / Number(vet_val.length);
  }

  if (!vet_val.length == 0)
    showData.innerHTML = `<p>Foram cadastrados ${vet_val.length} numeros <p>
                          <p>O maior numero é ${maior} <p>
                          <p>O menor numero é ${menor} <p>
                          <p>A soma dos numeros é ${soma} <p>
                          <p>A media dos numeros é ${media.toFixed(2)} <p>
                          <p>Existem ${pares} numeros pares <p>
                          <p>Existem ${impares} numeros impares <p>`;
  else window.alert("Nenhum valor cadastrado!");
}
