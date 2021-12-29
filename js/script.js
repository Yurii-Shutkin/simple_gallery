const slides = document.querySelectorAll('.slide');

for(const slide of slides) {
    slide.addEventListener('click', () => {
        removeClass();
        slide.classList.add('active');
    })
}

function removeClass() {
    for(const slide of slides) {
        slide.classList.remove('active');
    }
}