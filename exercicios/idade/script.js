function verificar() {
  var date = new Date();
  var year = date.getFullYear();
  var formYear = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (formYear.value.length == 0 || formYear.value > year) {
    window.alert("[ERRO] Verifique os dados e tenet novamente!");
  } else {
    var formSex = document.getElementsByName("radsex");
    var age = year - Number(formYear.value);
    var gen = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (formSex[0].checked) {
      gen = "Homem";

      if (age >= 0 && age < 10) {
        img.setAttribute("src", "images/child_boy.png");
      } else if (age < 21) {
        img.setAttribute("src", "images/boy.png");
      } else if (age < 50) {
        img.setAttribute("src", "images/man.png");
      } else {
        img.setAttribute("src", "images/old_man.png");
      }
    } else if (formSex[1].checked) {
      gen = "Mulher";

      if (age >= 0 && age < 10) {
        img.setAttribute("src", "images/child_girl.png");
      } else if (age < 21) {
        img.setAttribute("src", "images/girl.png");
      } else if (age < 50) {
        img.setAttribute("src", "images/woman.png");
      } else {
        img.setAttribute("src", "images/old_woman.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `${gen} com ${age} anos`;

    img.style.display = "block";
    img.style.margin = "10px auto";
    res.appendChild(img);
  }
}
