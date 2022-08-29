const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

let scrollTop;
let scrollLeft;

open.addEventListener('click', () =>{
    container.classList.add('show-nav');
    scrollTop = window.pageYOffset;
    scrollLeft = window.pageXOffset
    window.scrollTo({top: 0});
    window.onscroll = function() {
        window.scrollTo(0, 0);
    };
});

close.addEventListener('click', () => {
    container.classList.remove('show-nav');
    window.onscroll = function() {};
    window.scrollTo({top: scrollTop, left: scrollLeft, behavior:"smooth"});
});