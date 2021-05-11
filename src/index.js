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


// slider animation
const slider = document.querySelector('.slider')
const carousel = document.querySelector('.carousel-1')

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const slider_count = slider.childElementCount
let translate = 100 / slider_count   
var direction = -1

// on click next button
next.addEventListener('click', function() {
    // if change direction there already happend child append 
    // to the end of the slider so we need to revert it back
    if (direction === 1 ) {
        direction = -1 
        slider.prepend(slider.lastElementChild)
    }
    carousel.style.justifyContent = "flex-start"
    slider.style.transform = `translate(-${translate}%)`
})

prev.addEventListener('click', function() {
    // if directon was negative slider has prepended the last element
    // so we need to append it back and then translate
    if (direction === -1 ) {
        direction = 1
        slider.appendChild(slider.firstElementChild)
    }
    carousel.style.justifyContent = "flex-end"
    slider.style.transform = `translate(${translate}%)`
})

// when slider finishes transition
// on the condition it resets the slider
slider.ontransitionend = () => {
    if (direction == -1 ){
        slider.appendChild(slider.firstElementChild)
    } else if (direction === 1) {
        slider.prepend(slider.lastElementChild)
    }

     slider.style.transition=  'none'
     slider.style.transform = 'translate(0)'
    setTimeout(() => {
        slider.style.transition = "all 0.5s"
    })
  };