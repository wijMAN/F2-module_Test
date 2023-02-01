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
};

let fun2 = () => {
  let warn = document.getElementById("warn");
  naam = document.getElementById("naam").value;
  uname = document.getElementById("uname").value;
  mail = document.getElementById("mail").value;

  let reg1 = /^[a-zA-Z]/;
  let reg2 = /[^a-zA-Z 0-9]/; //these are the only allowed characters
  if (
    reg1.test(naam) &&
    !reg2.test(naam) &&
    naam.length >= 2 &&
    reg1.test(uname) &&
    !reg2.test(uname) &&
    uname.length >= 2
  ) {
    let reg3 = /^([_0-9a-zA-Z]+)@([0-9a-zA-Z]+)\.([a-zA-Z])/;
    if (reg3.test(mail)) {
      div1.add("hide");
      btns[1].disabled = false;
    } else {
      warn.innerText = `Invalid email`;
    }

    // if(mail.){}
  } else {
    warn.innerText = `Name & Username can't be a single letter, it can only start with alphabets, & it can only contain alpha numeric values`;
  }
};

let fun3 = () => {
  btns[1].disabled = true;
  document.getElementById("div2").innerHTML = `
  <h3 style="color: red;">
  Details are as follows:
  </h3>
  <h3>
  Name:  ${naam} 
  </h3>
  <h3>
  Username: ${uname}
  </h3>
  <h3>
  Email: ${mail}
  </h3>
  `;
  btns[2].disabled = false;
};

let div3 = document.getElementById("div3").classList;
div3.add("hide");

let fun4 = () => {
  div3.remove("hide");
  div3.add("div3show");
  btns[2].disabled = true;
  document.getElementById("div2").classList.add("hide");
};

let attempt = 1,
  roll = 0,
  score = 0;
let fun5 = () => {
  let temp = Math.floor(Math.random() * 6) + 1;
  roll++;
  if (roll > 3) {
    if (score >= 10) {
      document.getElementById("score").innerHTML = `
  <h3>Your score is ${score}, which is >=10. Thus generate your winning token :) </h3>
  `;
      document.getElementById("dice").disabled = true;
      btns[3].disabled = false;
    } else if (attempt < 2) {
      document.getElementById("score").innerHTML = `
      
      <h3>As your score is ${score}, which is less than 10. Thus start your 2nd attempt, with a 0 score. </h3>
      `;
      alert("Start your 2nd attempt");
      attempt++;
      score = 0;
      roll = 0;
    } else {
      document.getElementById("score").innerHTML = `
      <h3 style="color: red;"> BAD LUCK</h3>
  <h3>You have exhausted all your attempts. Restart the game by refeshing the page </h3>
  `;
      document.getElementById("dice").disabled = true;
    }
  } else {
    score += temp;
    document.getElementById("score").innerHTML = `
        <h3>Details are as follows:</h3>
        <h3>Attempt No.: ${attempt} / 2</h3>
        <h3>Roll:  ${roll} / 3</h3>
        <h3>You got a ${temp}</h3>
        <h3>Score: ${score} </h3>
  `;
  }
};

let fun6 = () => {
  btns[3].disabled = true;
  div3.remove("div3show");
  div3.add("hide");

  let temp = Math.floor(Math.random() * 8) + 1;
  let arr = ["a", "s", "d", "F", "G", "z", "j", "U", "T", "p", "q"];
  let a = "" + temp;
  for (let i = 0; i < 11; i++) {
    temp = Math.floor(Math.random() * 10);
    if (i % 2 == 0) {
      a += temp;
    } else {
      a += arr[temp];
    }
  }
  document.getElementById("div4").innerHTML = `
  <h3 style="color: red;">
  Your 12 digit winning coupon is: <span style="color: black" >${a}</span>
  </h3>
  <img
  style="margin: 30px 10px"
            src="https://images.unsplash.com/photo-1576610981602-438b2860eb77?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29uZ3JhdHMsdHJvcGhpZXx8fHx8fDE2NzUyOTE5MTU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=350"
            alt="congo"
          />

  <h3 style="color: green;">
  Restart the game by reloading the page.
  </h3>
  `;
};
