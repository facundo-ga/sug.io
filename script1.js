const colors = [
  "null",
  "#f1ce07",
  "#079beb",
  "#ee1992",
  "#02ee35",
  "#f1ce07",
  "#079beb",
  "#ee1992",
  "#02ee35"
];
const time = ["null", ".2s", ".3s", ".4s", ".5s", ".6s", ".7s", ".8s"];
for (let i = 1; i <= 8; i++) {
  let branch = ".branch" + i;
  let light = document.querySelector(branch);
  light.style.setProperty("animation-delay", time[i]);
  light.style.setProperty("--color", colors[i]);
}
// ===== NIEVE
const container = document.querySelector(".container");
const crearNieve = () => {
  let snowflake = document.createElement("i");
  let x = innerWidth * Math.random();
  let size = Math.random() * 5 + 2;
  snowflake.style.left = x + "px";
  snowflake.style.width = size + "px";
  snowflake.style.height = size + "px";
  container.appendChild(snowflake);
};
setInterval(crearNieve, 2000);