'use strict';
import $ from 'jquery';

window.jQuery = window.$ = $;

const product = {
    id: 0,
    name: "Really Cool Cat",
    price: 177,
    picture: "cat3.jpg",
};

function makeProductItem($template, product) {
    $template.find('.col-md-4')
        .attr('productId', product.id);
    $template.find('.product-name').text(product.name);
    $template
        .find('.card-img-top')
        .attr('src', 'images/' + product.picture);
    $template.find('img').attr('alt', product.name);
    $template.find('.product-price').text(product.price);
    return $template;
}

$(function() {
    //DOM-дерево готово

    var $template = $($('#productItem').html());

    $template
        .find('.col-md-4')
        .attr('productId', product.id);
    $template.find('.product-name').text(product.name);
    $template
        .find('.card-img-top')
        .attr('src', 'images/' + product.picture);
    $template.find('img').attr('alt', product.name);
    $template.find('.product-price').text(product.price);
    $('.showcase').append($template);
    // $('.showcase').append(makeProductItem($template, product));
});

