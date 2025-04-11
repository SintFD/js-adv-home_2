// Задача 1: Динамический список товаров
// 🎯 Цель:
// Создать список товаров, в котором можно добавлять, удалять и
// отмечать товар как купленный.
// 📋 HTML:
// <ul id="products"></ul>
// <button id="addBread">Добавить "Хлеб"</button>
// <button id="addMilk">Добавить "Молоко"</button>
// <button id="clearList">Очистить список</button>
// 📌 Задание:
// 1. По нажатию на кнопку "Добавить 'Хлеб'" или "Молоко" — создаётся li с текстом
// товара.
// 2. Каждый товар должен:
// ○ иметь класс product
// ○ содержать кнопку "Удалить"
// ○ содержать кнопку "Куплено"
// 3. При нажатии на "Куплено" товар получает/теряет класс bought (с помощью
// classList.toggle)
// 4. При нажатии на "Удалить" — товар удаляется
// 5. Кнопка "Очистить список" удаляет все товары из ul
// 💡 Дополнительно:
// ● Класс .bought можно стилизовать зачёркиванием: text-decoration:
// line-through; color: gray;

const products = document.querySelector("#products");

const addBread = document.querySelector("#addBread");
const addMilk = document.querySelector("#addMilk");
const clearList = document.querySelector("#clearList");

const createProduct = (prod) => {
  return () => {
    const li = document.createElement("li");
    const remove = document.createElement("button");
    const buy = document.createElement("button");

    li.textContent = prod;
    li.classList.add("product");

    buy.textContent = "Куплено";
    remove.textContent = "Удалить";

    buy.addEventListener("click", () => {
      li.classList.toggle("bought");
      li.style.textDecoration =
        (li.classList.contains("bought") && "line-through") || "";
      li.style.color = (li.classList.contains("bought") && "gray") || "";
    });

    remove.addEventListener("click", () => {
      li.remove();
    });

    li.append(buy);
    li.append(remove);

    products.append(li);
  };
};

addBread.addEventListener("click", createProduct("Хлеб"));
addMilk.addEventListener("click", createProduct("Молоко"));
clearList.addEventListener("click", () => {
  products.innerHTML = "";
});

// ------------------------------------------------------------------------------------------------------------------------------

// Задача 2: Список заметок с цветом и порядком
// 🎯 Цель:
// Создать список заметок, в котором можно менять цвет заметки и поднимать/опускать
// её в списке.
// 📋 HTML:
// html
// CopyEdit
// <ul id="notes"></ul>
// <button id="createNote">Создать заметку</button>
// 📌 Задание:
// 1. При клике на "Создать заметку":
// ○ Создаётся li с текстом "Нова замітка"
// ○ Добавляется кнопка "🔼" (поднять)
// ○ Кнопка "🔽" (опустить)
// ○ Кнопка "🎨" (изменить цвет фона — циклично: белый → жёлтый →
// голубой → белый)
// ○ Кнопка "❌" (удалить)
// 2. Поведение:
// ○ Поднять — переместить элемент выше
// (element.previousElementSibling + insertBefore)
// ○ Опустить — переместить ниже (element.nextElementSibling +
// insertBefore)
// ○ Цвет — циклически переключается между 3 цветами
// ○ Удалить — удаляет li
// Подсказки:
// ● Можно использовать el.parentElement для доступа к li, если кнопка
// вложена внутрь
// ● Для цвета — использовать индекс в data-color-index, и брать цвет из
// массива: ["white", "yellow", "lightblue"]
