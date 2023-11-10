'use strict';

//1. In javascript we create an array containing the file names of the images and save it as a variable.
// 2. We create an "items" variable that will contain the html div element that will contain all our images.
// 3. We create a variable that represents the position of the currently active slide in the array.
// 4. We create variables that represent the "prev" and "next" arrows in our document
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const items = document.querySelector('.items');
let currentSlide = 0;

// 5. We use a for loop to add the images to the html using a template literal.
for (let i = 0; i < images.length; i++) {
    items.innerHTML += `<div class="item"><img src="img/${images[i]}" alt="Image ${i+1}"></div>`;
}

// // 6. We add the "active" class to the first slide.
const firstItem = items.querySelector('.item');
firstItem.classList.add('active');

// // 7. We create a variable that selects all of our slides in the html.
const domSlides = document.querySelectorAll('.item');

// 8. We use addEventListener to cycle through the images when we click on the arrows, making sure we can't continue past the first and last image.
// Bonus 1: add "else" conditions to make the carousel cyclical
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', function() {
    if (currentSlide > 0) {
        domSlides[currentSlide].classList.remove('active');
        currentSlide--;
        domSlides[currentSlide].classList.add('active');
    } else {
        domSlides[currentSlide].classList.remove('active');
        currentSlide = domSlides.length - 1;
        domSlides[currentSlide].classList.add('active');
    }
})

next.addEventListener('click', function() {
    if (currentSlide < domSlides.length - 1) {
        domSlides[currentSlide].classList.remove('active');
        currentSlide++;
        domSlides[currentSlide].classList.add('active');
    } else {
        domSlides[currentSlide].classList.remove('active');
        currentSlide = 0;
        domSlides[currentSlide].classList.add('active');
    }
})