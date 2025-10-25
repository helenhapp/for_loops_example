document.querySelectorAll("section").forEach((section) => {
  const btn = section.querySelector("button");
  const content = section.querySelector("div[id^='part']");
  btn.addEventListener("click", () => {
    content.classList.toggle("hidden");
    btn.textContent = content.classList.contains("hidden") ? "▶" : "▼";
  });
});

document.getElementById("snippet1").innerHTML = `for (let i = 1; i <= 5; i++) {
  console.log(i);
}`;

document.getElementById("snippet2").innerHTML = `let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`;
