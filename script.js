let index = 0;

let images = document.querySelectorAll('.container__image');

let circles = document.querySelectorAll('.circles__circle');

let prevArrow = document.querySelector('.container__slideLeft');

let nextArrow = document.querySelector('.container__slideRight');

console.log(prevArrow);

console.log(nextArrow);

function showImages(i) {

    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('display-none');
    };

    for (let i = 0; i < circles.length; i++) {
        circles[i].classList.remove('active');
    };

    images[i].classList.remove('display-none');
    circles[i].classList.add('active');
};

function changeIndex(value) {
    index = index + value;

    if (index > images.length - 1) {
        index = 0
    };

    if (index < 0) {
        index = images.length - 1;
    }
};

window.addEventListener('onload', showImages(index));

prevArrow.addEventListener('click', () => {
    changeIndex(-1);
    showImages(index);
});

nextArrow.addEventListener('click', () => {
    changeIndex(+1);
    showImages(index);
});


