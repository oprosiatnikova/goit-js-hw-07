// напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка
// елемента(тегу < h2 >) і кількість елементів у категорії(усіх < li >, вкладених у нього).

const categories = document.querySelector('#categories');
const categoryCount = categories.querySelectorAll('.item').length;
console.log(`Кількість категорій: ${categoryCount}`);

const items = categories.querySelectorAll('.item');
items.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const numberOfElements = item.querySelectorAll('ul li').length;
  
  console.log(`Категорія: ${title} має ${numberOfElements} елементів`);
});