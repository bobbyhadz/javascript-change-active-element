console.log('bobbyhadz.com');

// ✅ set activeElement to another element
const box = document.getElementById('box');
box.tabIndex = '-1';
box.focus();

// ✅ set activeElement back to `body`
// document.activeElement.blur();

// 👇️ <body> element
// console.log(document.activeElement);
