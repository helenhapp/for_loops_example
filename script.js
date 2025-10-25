// ===== Toggle =====
document.querySelectorAll(".toggle-header").forEach((header) => {
  const content = header.nextElementSibling;
  header.addEventListener("click", () => {
    const isActive = header.classList.toggle("active");
    if (isActive) {
      content.style.display = "block";
      const fullHeight = content.scrollHeight + "px";
      requestAnimationFrame(() => {
        content.style.maxHeight = fullHeight;
        content.style.opacity = "1";
      });
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "0";
      requestAnimationFrame(() => (content.style.maxHeight = "0"));
    }
  });
});

// ===== Code Snippets =====
const snippets = {
  snippet1: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}`,
  snippet2: `let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`,
  snippet3: `function add(a, b) {
  return a + b;
}

add(2, 5);`,
};

Object.entries(snippets).forEach(([id, code]) => {
  const el = document.getElementById(id);
  if (el) el.textContent = code; // use textContent instead of innerHTML (safer)
});

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
