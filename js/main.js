var width = 445; // img width
var count = 3; // img number

var carousel = document.getElementById('slider-container');
var list = carousel.querySelector('.slider-list');

var position = 0; // current shift left

carousel.querySelector('.btn-1').onclick = function() {
    // shift left
    position = Math.min(position + width * count, 0);
    console.log(position);
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.btn-2').onclick = function() {
    position = Math.min(position + width * count, -445);
    console.log(position);
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.btn-3').onclick = function() {
    position = Math.min(position + width * count, -890);
    console.log(position);
    list.style.marginLeft = position + 'px';
};

