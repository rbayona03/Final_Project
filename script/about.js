//About page
////onHover for hero
const heroImg = document.querySelector('.abtImg1');
const hoverImg = document.querySelector('.abtImg2');

heroImg.addEventListener('mouseover', function(){
    if(!heroImg.classList.contains("hidden")){
        heroImg.classList.add("hidden")
    }
});
heroImg.addEventListener('mouseleave', function(){
    if(heroImg.classList.contains("hidden")){
        heroImg.classList.remove("hidden")
    }
}
);