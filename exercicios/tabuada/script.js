function gerarTabuada() {
  let number = Number(document.getElementById("txtnum").value);
  let tab = document.getElementById("seltab");
  let result = "";
  let show = document.querySelector("div#res");

  tab.innerHTML = "";

  for (let n = 0; n <= 10; n++) {
    let item = document.createElement("option");
    item.text = `${n} x ${number} = ${n * number}`;
    tab.appendChild(item);
    //result += `${n} x ${number} = ${n * number} <br>`;
  }
  //show.style.textAlign = "center";
  //show.innerHTML = result;
}
