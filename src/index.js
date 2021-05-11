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


/* carousel 1 */

const carousel_1 = document.querySelector('.carousel-1')
const slider = carousel_1.querySelector('.slider')

// conrols of first slider
const next_carousel_1 = carousel_1.querySelector('.next')
const prev_carousel_1 = carousel_1.querySelector('.prev')

var direction = -1

// on click next button
next_carousel_1.addEventListener('click', function() {
    const slider_count = slider.childElementCount
    let translate = 100 / slider_count

    handleClickNext(carousel_1, slider, direction, translate)
})

prev_carousel_1.addEventListener('click', function() {
    const slider_count = slider.childElementCount
    let translate = 100 / slider_count

    handleClickPrev(carousel_1, slider, direction, translate)
})


/* carousel 2 */

// const carousel_2 = document.querySelector('.carousel-2')

// // controls of secons slidr
// const prev_carousel_2 = document.querySelector('.carousel-2-prev')
// const next_carousel_2 = document.querySelector('.carousel-2-next')


function handleClickNext(carousel, slider, direction, translate) {
    // if change direction_carousel_1 there already happend child append 
    // to the end of the slider so we need to revert it back
    if (direction === 1 ) {
        direction = -1 
        slider.prepend(slider.lastElementChild)
    }
    carousel.style.justifyContent = "flex-start"
    slider.style.transform = `translate(-${translate}%)`
}

function handleClickPrev(carousel, slider, direction, translate) {
    // if directon was negative slider has prepended the last element
    // so we need to append it back and then translate
    if (direction === -1 ) {
        direction = 1
        slider.appendChild(slider.firstElementChild)
    }
    carousel.style.justifyContent = "flex-end"
    slider.style.transform = `translate(${translate}%)`
}


// when slider finishes transition
// on the condition it resets the slider
slider.ontransitionend = () => {
    // if slide is done append or prepend the to the queue of slides
    if (direction == -1 ){
        slider.appendChild(slider.firstElementChild)
    } else if (direction === 1) {
        slider.prepend(slider.lastElementChild)
    }

    // move one slide back when append is done
    slider.style.transition=  'none'
    slider.style.transform = 'translate(0)'
    setTimeout(() => {
        slider.style.transition = "all 0.5s"
    })
};