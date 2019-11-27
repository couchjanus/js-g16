'use strict';
import $ from 'jquery';

window.jQuery = window.$ = $;

// Выборка элементов

// Выборка одного или нескольких элементов DOM для каких-либо манипуляций с ними это одна из самых простых функций jQuery. Эквивалентом $() или jQuery() в JavaScript являются querySelector() или querySelectorAll(), в которых вы можете задавать параметры как и в jQuery — с помощью CSS селектора.

// Выбираем все элементы h1
console.log(jQuery('h1'));

// Вместо этого, мы можем выбрать первый элемент с h1
document.querySelector("h1");

// …или же выбрать все элементы h1
document.querySelectorAll("h1");

// JQuery Получить DOM-элемент body
console.log($("body"));

// JQuery Получить все элементы div
console.log($('div'));

// JQuery Получить #touch-me
console.log($('#touch-me'));

// JQuery Получить все элементы span внутри div
console.log($($('div span')));

// Без jQuery Выбираем первый span в div
var container = document.querySelector("div");// И потом...
container.querySelector("span");

// JQuery Получить все элементы span внутри div
console.log($($($('div').find('span'))));
       
// JQuery Получить все элементы span внутри div
console.log($($('div > span')));

// Например, выбрать все элементы, имеющие класс btn:
console.log($(".btn"));
// также можно записать следующим образом:
console.log($("*.btn"));

$(".filter li:first").css("color", "green");

$(".filter li:contains('Item 3')").css("color", "yellow");


// JQuery Получить элемент перед .plus
console.log($('.plus').prev());

// Без jQuery Отдаст следующий, предыдущий и родительский элемент для .plus
var plus = document.querySelector(".plus");
plus.nextElementSibling;
plus.previousElementSibling;
plus.parentElement;

// JQuery Получить элемент после #banner
console.log($('.minus').next());

// метод css()

// Получить значение установленного цвета:
// var bg = $('#list').css('background-color');
// console.log(bg);

// Если метод применить к набору элементов, он возвращает значения указанного CSS свойства только для первого элемента этого набора.
// var bg = $('#list li').css('background-color');
// console.log(bg);

$(document).ready(
    function(){
        console.log('Bla, Bla, Bla...');
        // $('p').css('border', '3px solid blue');
        // // получим значение background у элемента a
        // var background = $('.nav li a').css('background-color');
        // console.log(background);     // выведем его в консоль

        // var cssProperties = $('p').css(['width','height']);
        // console.log(cssProperties);
        // $("a").css("color", "red");
        // $('#list').css('background-color', 'rgb(255,255,0)'); // можно так
        // $('#list').css('background-color', 'yellow'); // или так
        // $('#list').css('background-color', '#ffff00'); // или так
        
        // если необходимо поменять сразу несколько свойств css у выбранного элемента:

        // $('#list').css('background-color', '#ffff00');
        // $('#list').css('font-style', 'italic');
        // $('#list').css('font-size', '18px');
        
        // Можно сократить код до одной строки, вызывая методы цепочкой, один за другим:
        
        // $('#list').css('background-color', '#ffff00').css('font-style', 'italic').css('font-size', '18px');
        
        // Есть более удобный вариант указать сразу несколько значений для свойств css. Для этого мы можем передать параметром объект свойств:
        
        // $('#list').css({
        //  "background-color": "#ffff00",
        //  "font-style": "italic",
        //  "font-size": "18px"
        // });

        // $('div').css({
        //     'color':'green',
        //     'font-size':'16px'
        // });

        // var newCSS = {
        //     'color':'green',
        //     'font-size':'16px'
        // };
        
        // $('p').css(newCSS);

        // $('p').css({
        //     "padding-left": "+=10",
        //     "padding-right":"+=10", 
        //     "padding-top": "+=10"
        // });

    }
);

// $(document).ready(ready);

// function ready() {
//     $("p").text("Структура документа загружена и полностью сформирована!");
// }
    
// $().ready(ready);
 
// $(function() {
//     //DOM-дерево готово
//     $("p").text("Структура документа загружена и полностью сформирована!");
// });



function square(x) {
    return x * x;
}

let i = 2;

function setMessageText(msg) {
    $('.count').text(msg);
}

setMessageText("The Square of " + i + " is " + square(i));

$('.count').click(() => {
    i++;
    setMessageText("The Square of " + i + " is " + square(i));
})


//  Получить HTML
// Получить HTML Native
console.log(el.innerHTML);

// Получить HTML jQuery
console.log($('#el').html());

// Присвоить HTML
let htmlString = 'Hello Element';
// Присвоить HTML jQuery
$('#el').html(htmlString);

// Присвоить HTML Native
el.innerHTML = htmlString;

