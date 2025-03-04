const btn = document.querySelector("#btn");
const colors = ["green", "#4ab8bf", "#17191b", "#f3f2ed", "#828282", "#24272b"];

function colorChange() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const colorChanging = colors[randomIndex];
  const colorName = document.querySelector(".color-name-change");

  document.body.style.backgroundColor = colorChanging;
  colorName.textContent = colorChanging;

  //   this is for more then one
  //   colorName.forEach((colorNameItem) => {
  //     colorNameItem.textContent = colorChanging;
  //   });
}

btn.addEventListener("click", colorChange);
