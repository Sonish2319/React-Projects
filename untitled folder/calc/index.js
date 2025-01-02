let inp = document.getElementById("inputBox");
let but = document.querySelectorAll("button");

let str = "";
let arr = Array.from(but); // it will create an array of buttons

arr.forEach((butt) => {
  butt.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      str = eval(str); // eval is a js function that solves stings automatically
      inp.value = str;
    } else if (e.target.innerHTML == "AC") {
      str = "";
      inp.value = str;
    } else if (e.target.innerHTML == "DEL") {
      str = str.substring(0, str.length - 1);
      inp.value = str;
    } else {
      str += e.target.innerHTML;
      inp.value = str;
    }
  });
});
