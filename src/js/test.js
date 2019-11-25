// test.js
'use strict';


// let h1 = document.querySelector('h1');

// getElementsByTagName
// document.body.getElementsByTagName('h1')[0].innerHTML="Hello world";

// Свойство textContent используется для получения и установки текста узла.

// document.getElementsByTagName('h1')[0].textContent = 'Hello Text Content!';

// querySelectorAll
// document.querySelectorAll('h1')[0].textContent = 'Hello querySelectorAll Text Content!';

// querySelector
// document.querySelector('h1').textContent = 'Hello JavaScript!';

// Метод getElementsByClassName находит массив объектов определенного класса.
// getElementsByClassName
// document.getElementsByClassName('see')[0].innerHTML = 'Hello JavaScript ClassName!';

function messageShow() {
    alert('Документ и все ресурсы загружены!');
  }

// window.onload = function() {
//     messageShow();
// };


// (function(){
//     console.log('Документ и все ресурсы загружены!');
// })();


// window.onbeforeunload = function() {
//     return "Точно перейти? И куда же ты собрался?";
// };

// Добавляет слушателя событий DOMContentLoaded
// document.addEventListener("DOMContentLoaded", ready);

function ready() {
 hello.innerHTML = "Я готова!";
}

// var button = document.getElementById('button')
// .addEventListener('click', buttonClick);

function buttonClick(e) {
     console.log('Button clicked');
}

function buttonClick1(e) {
    document.getElementById('hell').textContent = 'Changed';
    document.querySelector('#main').style.backgroundColor = '#f4f';
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
}

function buttonClick2(e){
    var output = document.getElementById('output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';
    console.log(e.type);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY);
}
  
// (function(){
//     console.log('Документ и все ресурсы загружены!');
//     document.getElementById("sidebarCollapse").addEventListener('click', function () {
//             document.querySelector(".sidebar").classList.add('active');
//         }
//     );
// })();
 

// (function () {
//     document.getElementById("sidebarCollapse").addEventListener('click', function () {
//         if (document.querySelector(".sidebar").classList.contains("active")) {
//             document.querySelector(".sidebar").classList.remove('active');
//         } else {
//             document.querySelector(".sidebar").classList.add('active');
//         }
//     });
// })();
 


// function el(selector) {
//     return document.querySelector(selector);
// }


// (function () {
//     el("#sidebarCollapse").addEventListener('click', function () {
//         el(".sidebar").classList.add("active");
//         el(".overlay").classList.add("active")
//     });
// })();


// добавление элементу класса "pink"
// elem.classList.add("pink");

// можно добавить нескольких классов через запятую
// elem.classList.add( "pink, container", "bg-big" );

// удаление класса "pink"
// elem.classList.remove("pink");

//можно удалить несколько классов
// elem.classList.remove("pink", "bordered", "clearfix");

// переключение класса "pink"
// elem.classList.toggle("pink");

//свойство,которое возвращает количество классов, назначенных элементу
// elem.classList.length

// проверка, есть ли у элемента класс "pink".
// Если есть - метод возвращает true, если класса нет, то false
// console.log( elem.classList.contains("pink") );
