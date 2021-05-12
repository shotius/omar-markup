import { Carousel } from './carousel.js'

function gym() {
    document.getElementById('exercise-slider-pic')
    .src='/assests/Mail_Image.png'

    document.getElementById('exercise-slider-text')
    .innerHTML = '<div class="ex-slider-header">A short title works best </div>At home to gym, crossfit to pilates, yoga to bodyweight, as well as healthy and easy to make breakfasts, lunches, dinners and snacks. We want to make sure you enjoy the journey for a healthy lifestyle.</div>'
}

function home() {
    document.getElementById('exercise-slider-pic')
    .src="/assests/ladyathome.jpg"

    document.getElementById('exercise-slider-text')
    .innerHTML = "<div class='ex-slider-header'>Working out at home</div> the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
}

function yoga() {
    document.getElementById('exercise-slider-pic')
    .src='/assests/yogalady.jpg'

    document.getElementById('exercise-slider-text')
    .innerHTML = '<div class="ex-slider-header">Doing yoga </div> not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with des.</div>'
}

function Healthy() {
    document.getElementById('nutrition-switcher-text')
    .innerHTML = "<div class='ex-slider-header'>eating healthy food</div> industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "

    document.getElementById('nutrition-switcher-pic')
    .src = '/assests/Rectangle 1473.png'
}

function Personolize() {
    document.getElementById('nutrition-switcher-text')
    .innerHTML = "<div class='ex-slider-header'>Working out at home</div> the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "

    document.getElementById('nutrition-switcher-pic')
    .src = 'https://www.nutriheroes.com/img/nutrition-2.png' 
}

/** carousels */


// this is global variable for all carousels
// var direction = -1


// /* carousel 1 */

// var current_1 = 0

const carousel_1 = document.querySelector('.carousel_1')
Carousel(carousel_1)
// const slider_1 = carousel_1.querySelector('.slider')

// // control buttons
// const next_btn_1 = carousel_1.querySelector('.next')
// const prev_btn_1 = carousel_1.querySelector('.prev')

// const slides_1 = slider_1.childElementCount
// const translate_1 = 100 / slides_1

// generateDots(carousel_1, slides_1)
// setActiveDot(carousel_1)

// next_btn_1.addEventListener('click', () => handleClickNext(carousel_1, slider_1, translate_1))
// prev_btn_1.addEventListener('click', () => handleClickPrev(carousel_1, slider_1,  translate_1))

// slider_1.ontransitionend = () => handleAfterSlide(slider_1);


// /* carousel 2 */

// const carousel_2 = document.querySelector('.carousel_2')
// const slider_2 = carousel_2.querySelector('.slider')

// const prev_btn_2 = carousel_2.querySelector('.prev')
// const next_btn_2 = carousel_2.querySelector('.next')

// const slides_2 = slider_2.childElementCount
// const translate_2 = 100 / slides_2

// generateDots(carousel_2, slides_2)


// next_btn_2.addEventListener('click', () => handleClickNext(carousel_2, slider_2, translate_2))
// prev_btn_2.addEventListener('click', () => handleClickPrev(carousel_2, slider_2, translate_2))

// slider_2.ontransitionend = () => handleAfterSlide(slider_2)


/** functions for carousel action */
 
// function handleClickNext(carousel, slider, translate) {
//     // if change direction_carousel_1 there already happend child append 
//     // to the end of the slider so we need to revert it back
//     if (direction === 1 ) {
//         direction = -1 
//         slider.prepend(slider.lastElementChild)
//     }
//     carousel.style.justifyContent = "flex-start"
//     slider.style.transform = `translate(-${translate}%)`

//     current_1 = current_1 + 1
//     current_1 = (current_1) % slider.childElementCount
//     setActiveDot(carousel)
// }

// function handleClickPrev(carousel, slider, translate) {
//     // if directon was negative slider has prepended the last element
//     // so we need to append it back and then translate
//     if (direction === -1 ) {
//         direction = 1
//         slider.appendChild(slider.firstElementChild)
//     }
//     carousel.style.justifyContent = "flex-end"
//     slider.style.transform = `translate(${translate}%)`

//     if (current_1 == 0) {
//         current_1 = 5 
//     } else {
//         current_1 = current_1 - 1
//     }
//     current_1 = (current_1) % slider.childElementCount
//     setActiveDot(carousel)
// }

// // this function is called after carousel slide happens
// function handleAfterSlide(slider) {
//     // if slide action is done append or prepend already slided child to the end ot to the begining of slides deque
//     if (direction == -1 ){
//         slider.appendChild(slider.firstElementChild)
//     } else if (direction === 1) {
//         slider.prepend(slider.lastElementChild)
//     }

//     // fix the offset
//     slider.style.transition=  'none'
//     slider.style.transform = 'translate(0)'
//     setTimeout(() => {
//         slider.style.transition = "all 0.5s"
//     })
// }

// // generates carousel indicator dots
// function generateDots(carousel, n) {
//     // create div with classname 'dots
//     var dots = document.createElement('div');
//     dots.className = 'dots'
	
//     // append button elements to the 'dots
//     for (let i = 0; i < n; i++) {
// 		dots.innerHTML =
//             dots.innerHTML + 
//             '<button class="dot" onclick="goToSlide(' + i + ')"></button>';
//     }
//     // append dots to carousel
//     carousel.querySelector('.controls').appendChild(dots);
// }

// // set active class to a button 

// function  setActiveDot(carousel) {
//     const dots = carousel.querySelectorAll('.dot')
    
//     for (let i = 0 ; i < dots.length; i++){
//         dots[i].classList.toggle('active', current_1 === i)
//     }
// }

// function goToSlide(n) {
//     slider_1.style.transform = `translate(${translate_1 * (current_1 - n)}%)`
//     current_1 = n
//     setActiveDot(carousel_1)
// }