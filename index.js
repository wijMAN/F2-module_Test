let btns = document.getElementsByClassName("btn");
for (let i = 1; i <= btns.length - 1; i++) {
  btns[i].disabled = true;
}

let div1 = document.getElementById("div1").classList;
div1.add("hide");

let naam = "k",
  uname = "",
  mail = "";
let fun1 = () => {
  btns[0].disabled = true;
  div1.remove("hide");
  naam = document.getElementById("naam").value;
  uname = document.getElementById("uname").value;
  mail = document.getElementById("mail").value;
};

let fun2 = () => {
  div1.add("hide");

  btns[1].disabled = false;
};

let fun3 = () => {
  btns[1].disabled = true;
  let div2 = (document.getElementById("div2").innerText = "name: " + naam);
  btns[2].disabled = false;
};
