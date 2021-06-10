let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slider = document.querySelector('.slider');

let pixels = 0;
let slide = document.querySelectorAll('.slide');
slider.style.width = slide.length * 684 + 'px';
let count = 1;
let indexItem = 1;
let a = document.querySelector('.block_slider');

let b = a.offsetWidth;
let c = slide[0].offsetWidth;
let d = window.innerWidth;

function t1() {
    count++;


    slide[indexItem].classList.remove('slide_scale');
    indexItem++;
    slide[indexItem].classList.add('slide_scale');
    pixels -= c + 150;
    slider.style.transform = `translateX(${pixels}px)`;

    if (count > 1) prev.disabled = false;
    if (count >= slide.length - 1) {
        next.disabled = true;
    } else next.onclick = this.onclick;

}
next.onclick = t1;

function t2() {
    count--;
    if (count < slide.length) next.disabled = false;
    if (count < 1) {
        prev.disabled = true;
    } else prev.onclick = this.onclick;

    slide[indexItem].classList.remove('slide_scale');
    indexItem--;
    if (indexItem == 0) prev.disabled = true;
    slide[indexItem].classList.add('slide_scale');
    pixels += c + 150;
    slider.style.transform = `translateX(${pixels}px)`;

}

prev.onclick = t2;