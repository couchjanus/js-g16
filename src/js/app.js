// import { data } from './data.js';

function el(selector) {
    return document.querySelector(selector);
}

function openCart() {
    el('.sidebar').classList.add('active');
    el('.overlay').classList.add('active');
}

function closeCart() {
    el('.sidebar').classList.remove('active');
    el('.overlay').classList.remove('active');
}

// ===============================================================

// (function () {
//     el("#sidebarCollapse").addEventListener('click', function () {
//         openCart();
//     });
//     el(".dismiss").addEventListener('click', function () {
//         closeCart();
//     });
//     el(".overlay").addEventListener('click', function () {
//         closeCart();
//     });

//     let addToCarts = document.querySelectorAll('.add-to-cart');
//     addToCarts.forEach(function(addToCart){
//         addToCart.addEventListener('click', function() {
//             let y = 180;
//             this.closest(".card").firstElementChild.style.transform = 'rotateY(' + y + 'deg)';
//         });
//     });

//     let plus = document.querySelectorAll('.plus');
//     plus.forEach(function(el){
//         el.addEventListener('click', function(e) {
//             let price = 55.00;
//             let val = parseInt(this.previousElementSibling.innerText);
//             val = this.previousElementSibling.innerText = val+1;
//             this.parentNode.nextElementSibling.querySelector('.item-price').innerText = parseFloat(price*val).toFixed(2);
//         });
//     });

//     let minus = document.querySelectorAll('.minus');
//     minus.forEach(function(el){
//         el.addEventListener('click', function(e) {
//             let price = 55.00;
//             let val = parseInt(this.nextElementSibling.innerText);
//             if (val > 1) {
//                 val = this.nextElementSibling.innerText = val-1;
//             }
//             this.parentNode.nextElementSibling.querySelector('.item-price').innerText = parseFloat(price*val).toFixed(2);
//         });
//     });

// })();

// ===============================================================

(function() {
    el('#sidebarCollapse').addEventListener('click', function() {
        openCart();
    });
    el('.dismiss').addEventListener('click', function() {
        closeCart();
    });
    el('.overlay').addEventListener('click', function() {
        closeCart();
    });

    const content = document.getElementById('cartItem').content;

    document.querySelector('.cart-items').addEventListener(
        'click',
        function(e) {
            if (e.target && e.target.matches('.remove-item')) {
                e.target.parentNode.parentNode.remove();
            }
            if (e.target && e.target.matches('.plus')) {
                let el = e.target;
                let price = parseFloat(
                    el.parentNode.nextElementSibling
                        .querySelector('.item-price')
                        .getAttribute('price')
                );
                let val = parseInt(el.previousElementSibling.innerText);
                val = el.previousElementSibling.innerText = val + 1;
                el.parentNode.nextElementSibling.querySelector(
                    '.item-price'
                ).innerText = parseFloat(price * val).toFixed(2);
            }

            if (e.target && e.target.matches('.minus')) {
                let el = e.target;
                let price = parseFloat(
                    el.parentNode.nextElementSibling
                        .querySelector('.item-price')
                        .getAttribute('price')
                );
                let val = parseInt(el.nextElementSibling.innerText);
                if (val > 1) {
                    val = el.nextElementSibling.innerText = val - 1;
                }
                el.parentNode.nextElementSibling.querySelector(
                    '.item-price'
                ).innerText = parseFloat(price * val).toFixed(2);
            }
        },
        false
    );

    let addToCarts = document.querySelectorAll('.add-to-cart');

    function addProductToCart(content, item) {
        content.querySelector('.item-title').textContent = item.querySelector(
            '.product-name'
        ).textContent;

        content.querySelector('.item-price').textContent = item.querySelector(
            '.product-price'
        ).textContent;

        content
            .querySelector('.item-price')
            .setAttribute(
                'price',
                item.querySelector('.product-price').textContent
            );

        content.querySelector('.item-img').style.backgroundImage =
            'url(' + item.querySelector('img').getAttribute('src') + ')';
        return content;
    }

    addToCarts.forEach(function(addToCart) {
        addToCart.addEventListener('click', function() {
            this.closest('.card').firstElementChild.style.transform =
                'rotateY(180deg)';
            document
                .querySelector('.cart-items')
                .append(
                    document.importNode(
                        addProductToCart(content, this.closest('.card')),
                        true
                    )
                );
        });
    });
})();
