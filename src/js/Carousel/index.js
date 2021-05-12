export const  Carousel = (carousel_node) =>  {

    var direction = -1
    var current = 0

    const slider = carousel_node.querySelector('.slider')

    // control buttons
    const next_btn = carousel_node.querySelector('.next')
    const prev_btn = carousel_node.querySelector('.prev')

    const slides = slider.childElementCount
    const translate = 100 / slides

    generateDots()
    setActiveDot()

    /** event listeners */ 

    // next and previous btns
    next_btn.addEventListener('click', () => handleClickNext())
    prev_btn.addEventListener('click', () => handleClickPrev())

    // after slider makes action
    slider.ontransitionend = () => handleAfterSlide();


    function handleClickNext() {
        // if change direction_carousel_1 there already happend child append 
        // to the end of the slider so we need to revert it back
        if (direction === 1 ) {
            direction = -1 
            slider.prepend(slider.lastElementChild)
        }
        carousel_node.style.justifyContent = "flex-start"
        slider.style.transform = `translate(-${translate}%)`

    }

    function handleClickPrev() {
        // if directon was negative slider has prepended the last element
        // so we need to append it back and then translate
        if (direction === -1 ) {
            direction = 1
            slider.appendChild(slider.firstElementChild)
        }
        carousel_node.style.justifyContent = "flex-end"
        slider.style.transform = `translate(${translate}%)`

       
    }

    // this function is called after carousel_node slide happens
    function handleAfterSlide() {
        // if slide action is done append or prepend already slided child to the end ot to the begining of slides deque
        if (direction == -1 ){
            slider.appendChild(slider.firstElementChild)
        } else if (direction === 1) {
            slider.prepend(slider.lastElementChild)
        }
        setCurrent()
        setActiveDot()

        // fix the offset
        slider.style.transition=  'none'
        slider.style.transform = 'translate(0)'
        setTimeout(() => {
            slider.style.transition = "all 0.5s"
        })
    }

    // generates carousel_node indicator dots
    function generateDots() {
        // create div with classname 'dots
        var dots = document.createElement('div');
        dots.className = 'dots'
        
        // append button elements to the 'dots
        for (let i = 0; i < slides; i++) {
            dots.innerHTML =
                dots.innerHTML + 
                '<button class="dot" value="' + i + '"></button>';
        }
        // append dots to carousel_node
        carousel_node.querySelector('.controls').appendChild(dots);
    }

    // set active class to a button 

    function  setActiveDot() {
        const dots = carousel_node.querySelectorAll('.dot')
        
        for (let i = 0 ; i < dots.length; i++){
            dots[i].classList.toggle('active', current === i)
        }
    }

    function setCurrent() {
        if (direction == -1 ){
            current = current + 1
            current = (current) % slides
        } else if (direction === 1) {
            if (current == 0) {
                current = slides - 1
            } else {
                current = current - 1
                current = (current) % slides
            }
        }
    }
}