// *******************************************************
//  Розкривні заголовки (Toggle Headers)
// *******************************************************

// Знаходимо всі елементи з класом .toggle-header
document.querySelectorAll(".toggle-header").forEach((header) => {
  const content = header.nextElementSibling; // Наступний елемент після заголовка (прихований блок)

  header.addEventListener("click", () => {
    const isActive = header.classList.toggle("active"); // Додаємо або забираємо клас "active"

    if (isActive) {
      // Якщо розкриваємо блок
      content.style.display = "block"; // Тимчасово показуємо для обчислення висоти
      const fullHeight = content.scrollHeight + "px"; // Отримуємо повну висоту контенту

      // Анімуємо розкриття
      requestAnimationFrame(() => {
        content.style.maxHeight = fullHeight;
        content.style.opacity = "1";
      });
    } else {
      // Якщо приховуємо блок
      content.style.maxHeight = content.scrollHeight + "px"; // Встановлюємо поточну висоту
      content.style.opacity = "0"; // Починаємо затемнення

      // Потім плавно згортаємо блок
      requestAnimationFrame(() => {
        content.style.maxHeight = "0";
      });
    }
  });
});

// *******************************************************
//  Вкладки (Tabs)
// *******************************************************

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

// Для кожної кнопки вкладки додаємо обробник події
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Спочатку знімаємо "active" з усіх кнопок і вмісту
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    // Активуємо натиснуту кнопку
    btn.classList.add("active");

    // Отримуємо цільову вкладку через data-tab (наприклад, "info", "game" тощо)
    const target = btn.dataset.tab;

    // Активуємо відповідний блок контенту
    const targetContent = document.getElementById(`tab-${target}`);
    if (targetContent) targetContent.classList.add("active");
  });
});

// *******************************************************
//  Ефект плавного завантаження сторінки
// *******************************************************

// Коли сторінка повністю завантажена, додаємо клас .loaded до body
// Це активує анімацію появи (opacity) у CSS
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
