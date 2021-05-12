export const  Carousel = (node) =>  {
    

// this is global variable for all carousels
var direction = -1


/* carousel 1 */

var current = 0

const slider = node.querySelector('.slider')

// control buttons
const next_btn = node.querySelector('.next')
const prev_btn = node.querySelector('.prev')

const slides = slider.childElementCount
const translate = 100 / slides

generateDots(node, slides)
setActiveDot(node)

next_btn.addEventListener('click', () => handleClickNext(node, slider, translate))
prev_btn.addEventListener('click', () => handleClickPrev(node, slider,  translate))

slider.ontransitionend = () => handleAfterSlide(slider);

}


function handleClickNext(carousel, slider, translate) {
    // if change direction_carousel_1 there already happend child append 
    // to the end of the slider so we need to revert it back
    if (direction === 1 ) {
        direction = -1 
        slider.prepend(slider.lastElementChild)
    }
    carousel.style.justifyContent = "flex-start"
    slider.style.transform = `translate(-${translate}%)`

    current_1 = current_1 + 1
    current_1 = (current_1) % slider.childElementCount
    setActiveDot(carousel)
}

function handleClickPrev(carousel, slider, translate) {
    // if directon was negative slider has prepended the last element
    // so we need to append it back and then translate
    if (direction === -1 ) {
        direction = 1
        slider.appendChild(slider.firstElementChild)
    }
    carousel.style.justifyContent = "flex-end"
    slider.style.transform = `translate(${translate}%)`

    if (current_1 == 0) {
        current_1 = 5 
    } else {
        current_1 = current_1 - 1
    }
    current_1 = (current_1) % slider.childElementCount
    setActiveDot(carousel)
}

// this function is called after carousel slide happens
function handleAfterSlide(slider) {
    // if slide action is done append or prepend already slided child to the end ot to the begining of slides deque
    if (direction == -1 ){
        slider.appendChild(slider.firstElementChild)
    } else if (direction === 1) {
        slider.prepend(slider.lastElementChild)
    }

    // fix the offset
    slider.style.transition=  'none'
    slider.style.transform = 'translate(0)'
    setTimeout(() => {
        slider.style.transition = "all 0.5s"
    })
}

// generates carousel indicator dots
function generateDots(carousel, n) {
    // create div with classname 'dots
    var dots = document.createElement('div');
    dots.className = 'dots'
	
    // append button elements to the 'dots
    for (let i = 0; i < n; i++) {
		dots.innerHTML =
            dots.innerHTML + 
            '<button class="dot" onclick="goToSlide(' + i + ')"></button>';
    }
    // append dots to carousel
    carousel.querySelector('.controls').appendChild(dots);
}

// set active class to a button 

// function  setActiveDot(carousel) {
//     const dots = carousel.querySelectorAll('.dot')
    
//     for (let i = 0 ; i < dots.length; i++){
//         dots[i].classList.toggle('active', current === i)
//     }
// }

// function goToSlide(n) {
//     slider_1.style.transform = `translate(${translate_1 * (current_1 - n)}%)`
//     current_1 = n
//     setActiveDot(carousel_1)
// }