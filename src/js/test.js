'use strict';

// Добавлять методы и свойства в объекты можно при их создании:

const product = {
  id: 0,
  name: "Really Cool Cat",
  price: 177,
  picture: "cat3.jpg",
};

product.description = "Really Cool Cat";

// Контент шаблона
const $template = document.getElementById("productItem").content;  

// $template
//            .querySelector('.col-md-4')
//            .setAttribute('productId', product.id);
//  $template.querySelector('.product-name').textContent = product.name;
//  $template.querySelector('.card-img-top')
//            .setAttribute('src', 'images/' + product.picture);
//  $template.querySelector('img').setAttribute('alt', product.name);
//  $template.querySelector('.product-price').textContent = product.price;

// document.querySelector('.showcase').append(document.importNode($template, true));

function makeProductItem($template, product) {
  $template
      .querySelector('.col-md-4')
      .setAttribute('productId', product.id);
  $template.querySelector('.product-name').textContent = product.name;
  $template.querySelector('.card-img-top')
      .setAttribute('src', 'images/' + product.picture);
  $template.querySelector('img').setAttribute('alt', product.name);
  $template.querySelector('.product-price').textContent = product.price;
  $template.querySelector('.card-text').textContent = product.description;
  return $template;
}

// document.querySelector('.showcase').append(document.importNode(makeProductItem($template, product), true));

// ====================Порядок перебора свойств===========================

var users = {
  "9": 'Gertrude',
  "3": 'Henry',
  "1": 'Melvin'
};

for (var key in users) console.log( key ); // 1, 3, 9

var usersPlus = {
  "+9": 'Gertrude',
  "+3": 'Henry',
  "+1": 'Melvin' };

for (var key in usersPlus) {
  var value = usersPlus[key];
  key = +key; // ..если нужно именно число, преобразуем: "+1" -> 1
  console.log( key + ": " + value ); // 9, 3, 1 во всех браузерах
}

// порядок перебора соответствует порядку присвоения свойства
for (var prop in product) {
  console.log( prop ); // id, name, price, picture, description
}

// const product = {
//   id: 0,
//   name: "Cool Cat",
//   price: 177,
//   picture: "cat1.jpg",
//   description: "Lorem ipsum dolor sit amet, consectetur elit."
// };

// for (let key in product) { 
// console.log(key + ': ' + product[key]);
// }

let animals = ['🐔', '🐷', '🐑', '🐇'];
let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];

for (let animal of animals) {
  // Random name for our animal
  let nameIdx = Math.floor(Math.random() * names.length);

  console.log(`${names[nameIdx]} the ${animal}`);
}

// Строки также являются итеративным типом, поэтому вы можете использовать for…of для строк

let str = 'abcde';

for (let char of str) {
  console.log(char.toUpperCase().repeat(3));
}


// ==================================================
let data = [
  {
      id: 0,
      name: "Cool Cat",
      price: 177,
      picture: "cat1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur elit."
  },
  {
    id: 1,
    name: "Angry Dog",
    price: 177,
    picture: "cat2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur elit."
},
]
console.log(Object.keys(data));
// консоль: Array(8) [ "0", "1" ]

// Массивоподобный объект
console.log(Object.keys(data[1]));
// консоль: Array(5) [ "id", "name", "price", "image", "description" ]

// ===============================================
