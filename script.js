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

// ===== Tabs =====
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove 'active' from all
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    // Add 'active' to the selected tab and its content
    btn.classList.add("active");
    const target = btn.dataset.tab;
    document.getElementById(`tab-${target}`).classList.add("active");
  });
});
