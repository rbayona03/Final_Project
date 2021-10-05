//Gallery

let i = 0;
let images = ['images/slider1.png', 'images/slider2.png', 'images/slider3.png','images/slider4.png','images/slider5.png'];
let time = 5000;

function increment(){
    document.slide.src = images[i];
    if(i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }
};
function prevSlide(){
    document.slide.src = images[i];
    if(i === 0){
        i = images.length
    }
    i--;
}
function nextSlide(){
    increment();
};
function changeSlide(){
    increment()
    setTimeout("changeSlide()", time)
};
window.onload = changeSlide;