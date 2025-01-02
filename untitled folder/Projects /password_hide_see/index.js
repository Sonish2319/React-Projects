// const pass = document.querySelector("input");
// const btn = document.querySelector("button");

// let show = true; // password is initailly hidden
// // type="password" -> automatically hides password
// btn.addEventListener("click", function () {
//   if (show) {
//     btn.innerHTML = "🙈";
//     pass.setAttribute("type", "text"); // type text converts password to visible text
//     show = false;
//   } else {
//     btn.innerHTML = "👀";
//     pass.setAttribute("type", "password");
//     show = true;
//   }
// });

const pass = document.getElementById("myinput");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  if (pass.getAttribute("type") === "password") {
    btn.innerHTML = "🙈";
    pass.setAttribute("type", "text");
  } else {
    pass.setAttribute("type", "password");
    btn.innerHTML = "👀";
  }
});
