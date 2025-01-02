let inputslider = document.getElementById("inputslider");

let slidervalue = document.getElementById("slidervalue");

let passbox = document.getElementById("passbox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genpass = document.getElementById("genpass");

// showing input slider value
slidervalue.textContent = inputslider.value;

inputslider.addEventListener("input", () => {
  slidervalue.textContent = inputslider.value;
});

genpass.addEventListener("click", () => {
  passbox.value = generatepassword();
});

// function to generate password
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let num = "0123456789";
let sym = "~!@#$%^&*";

function generatepassword() {
  let genpassword = "";
  let allchars = "";

  allchars += lowercase.checked ? lowerChars : "";
  allchars += uppercase.checked ? upperChars : "";
  allchars += numbers.checked ? num : "";
  allchars += symbols.checked ? sym : "";

  if (allchars == "" || allchars.length == 0) {
    return genpassword;
  }

  // charAt gives a character from stings at certain index
  let i = 1;
  while (i <= inputslider.value) {
    genpassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
    i++;
  }

  return genpassword;
}
