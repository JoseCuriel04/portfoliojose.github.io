window.addEventListener('load', () => {
    doScroll();
});

window.addEventListener('scroll', () => {
    doScroll(); 
});

function doScroll() {
    const nav = document.querySelector('#navID');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
            if (nav.classList.contains('scrolled')) {
                nav.classList.remove('scrolled');
            }
        }
}
