'use strict';

import { data } from './data.js';

function el(selector) {
    return document.querySelector(selector);
}

function makeProductItem($template, product) {
    $template
        .querySelector('.win')
        .setAttribute('productId', product.id);
    $template.querySelector('.product-name').textContent = product.name;
    $template
        .querySelector('.card-img-top')
        .setAttribute('src', 'images/' + product.picture[0]);
    $template.querySelector('img').setAttribute('alt', product.name);
    $template.querySelector('.product-price').textContent = product.price;
    return $template;
}

function slideItem(content, item, i) {
    content.querySelector('.carousel-item__title').textContent = item.name;
    content.querySelector('.carousel-item__subtitle').textContent =
        item.subtitle[i];

    content.querySelector('.carousel-item__description').textContent =
        item.description;

    content.querySelector('.carousel-item__image').style.backgroundImage =
        'url(images/' + item.picture[i] + ')';

    return content;
}

function carousel(dataItem) {
    let carouselItem = el('#carouselItem').content;

    let detailTemplate = el('#productDetail').content;

    for (let i = 0; i < dataItem.picture.length; i++) {
        detailTemplate
            .querySelector('.carousel-detail')
            .append(
                document.importNode(
                    slideItem(carouselItem, dataItem, i),
                    true
                )
            );
    }

    el('.showcase').replaceWith(document.importNode(detailTemplate, true));

    document
        .querySelectorAll('.carousel-detail-item')[0]
        .classList.add('active-slide');

    var total = document.querySelectorAll('.carousel-detail-item').length;

    var current = 0;
    moveLR('#moveRight', 1);
    moveLR('#moveLeft', -1);

    function moveLR(eId, step) {
        el(eId).addEventListener('click', function() {
            let prev_next = current;
            current = current + step;
            setSlide(prev_next, current);
        });
    }

    function setSlide(prev, next) {
        let slide = current;
        if (next > total - 1) {
            slide = 0;
            current = 0;
        }
        if (next < 0) {
            slide = total - 1;
            current = total - 1;
        }
        document
            .querySelectorAll('.carousel-detail-item')
            [prev].classList.remove('active-slide');
        document
            .querySelectorAll('.carousel-detail-item')
            [slide].classList.add('active-slide');
    }
}

function _translate(img, offset=-150){
    let rect = img.getBoundingClientRect();
    let elements = ['translate3D('];
    return [...elements, rect.left - offset + 'px,', rect.top - offset + 'px,0)'].join('');
}

// ====================================================

function initStorage() {
    window.localStorage.getItem("basket") ?
      window.localStorage.getItem("basket") :
      window.localStorage.setItem("basket", JSON.stringify([]));
}

function openCart() {
    showCart();
    el('.sidebar').classList.add('active');
    el('.overlay').classList.add('active');
}

function closeCart() {
    el('.sidebar').classList.remove('active');
    el('.overlay').classList.remove('active');
}

function getProducts() {
    return JSON.parse(window.localStorage.getItem("basket"));
}

function saveCart(product) {
    let tmpProducts = getProducts();
    console.log(tmpProducts);
    tmpProducts.push(product);
    window.localStorage.setItem("basket",JSON.stringify(tmpProducts));
    console.log(localStorage);
}

function productInCart(content, item) {
    content.querySelector('.cart-item').setAttribute('id', item.id);
    content.querySelector('.item-title').textContent = item.name;
    content.querySelector('.item-price').textContent = item.price;
    content.querySelector('.quontity').textContent = item.amount;
    
    content.querySelector('.item-price').setAttribute('price', item.price);
    content.querySelector('.item-img').style.backgroundImage= 'url('+ item.picture+")";

    content.querySelector('.item-price').innerText = parseFloat(item.price * item.amount).toFixed(2);

    return content;
}

function showCart() {
    let shoppingCart = getProducts();
    if (shoppingCart.length == 0) {
        console.log("Your Shopping Cart is Empty!");
        return;
    }
    document.querySelector(".cart-items").innerHTML = '';
    shoppingCart.forEach(function (item) {
        let template = document.getElementById("cartItem").content;
        document.querySelector(".cart-items").append(document.importNode(productInCart(template, item), true));
    });
}

//=====================================================

(function() {

    initStorage();
    
    if (localStorage) {
        console.log("It's basket storage");
    }

    el('#sidebarCollapse').addEventListener('click', () => openCart());
    el('.dismiss').addEventListener('click', () => closeCart());
    el('.overlay').addEventListener('click', () => closeCart());
    
    const template = el('#productItem').content;
    
    // Make Product Item
    data.forEach((item) => {
        el('.showcase').append(makeProductItem(template, item).cloneNode(true));
    });

    const content = el('#cartItem').content;
    
    // ---------------------Step 1-----------------------------------
    let addToCarts = document.querySelectorAll('.add-to-cart');

    addToCarts.forEach(function(addToCart) {
        addToCart.addEventListener('click', function() {

            // создадим объект
            let product = {
                id: 2, 
                name: 'Black Cat', 
                price: 555, 
                picture:['cat1.jpg', 'cat2.jpg', 'cat3.jpg']
            };
            
            saveCart(product);

        let imgItem = this.closest('.card').querySelector('img');
        let win = this.closest('.card').querySelector('.win');

        if (imgItem) {
            let imgClone = imgItem.cloneNode(true);
            imgClone.classList.add('offset-img');

            document.body.appendChild(imgClone);

            imgItem.style.transform = 'rotateY(180deg)';
            win.style.display = 'block';

            imgClone.animate([{
                transform: _translate(imgItem)
                },
                {
                    transform: _translate(document.querySelector('#sidebarCollapse'), 50) + 'perspective(500px) scale3d(0.1, 0.1, 0.2)'
                },
            ], {
                duration: 2000,
            })
            .onfinish = function() {
                imgClone.remove();
                imgItem.style.transform = 'rotateY(0deg)';
                win.style.display = 'none';
            };
        }
    });
});

// ------------------------View Details----------------------------
    const viewDetails = document.querySelectorAll('.view-detail');
    viewDetails.forEach(function(element) {
        element.addEventListener('click', function() {
            let dataId = this.closest('.card').querySelector('.win').getAttribute('productId');
            carousel(data[dataId]);
        });
    });
    
})();
