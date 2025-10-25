document.querySelectorAll("section").forEach((section) => {
  const btn = section.querySelector("button");
  const content = section.querySelector("div[id^='part']");
  btn.addEventListener("click", () => {
    content.classList.toggle("hidden");
    btn.textContent = content.classList.contains("hidden") ? "▶" : "▼";
  });
});

document.getElementById(
  "snippet1"
).innerHTML = `// This is a sample JS code snippet
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Olena");`;
