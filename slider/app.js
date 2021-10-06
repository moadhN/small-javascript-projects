const sliderImg = []
sliderImg.push("linear-gradient(to left, rgba(255, 0, 0, 0), rgba(0, 0, 0)90%), url('/img/slider/slider1.jpg')")
sliderImg.push("linear-gradient(to left, rgba(255, 0, 0, 0), rgba(0, 0, 0)90%), url('/img/slider/slider2.jpg')")
sliderImg.push("linear-gradient(to left, rgba(255, 0, 0, 0), rgba(0, 0, 0)90%), url('/img/slider/slider3.jpg')")

const content = document.querySelector('.content')
const leftNarrow = document.querySelector('.left')
const rigthNarrow = document.querySelector('.rigth')
let i = 0;
content.style.backgroundImage = sliderImg[i];

leftNarrow.addEventListener('click', leftChange)
rigthNarrow.addEventListener('click', rigthChange)
function rigthChange() {
    i++
    if (i === sliderImg.length) {
        i = 0
    }
    content.style.backgroundImage = sliderImg[i];

}

function leftChange() {
    i--
    if (i === -1) {
        i = sliderImg.length - 1
    }
    content.style.backgroundImage = sliderImg[i];
}
