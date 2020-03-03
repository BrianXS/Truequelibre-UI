//Responsive Menu
function toggleMainMenu() {
    var toggeableMenu = document.getElementById("hidden-menu");
    if(toggeableMenu.style.display == "")
        toggeableMenu.style.display = "block";
    else
        toggeableMenu.style.display = toggeableMenu.style.display == "none" ? "block" : "none";
}


//Carousel
var currentIndex = 0;
//prevSlide();

function prevSlide() {
    var slides = document.getElementsByClassName("slide");
    clearSlides()
    if(currentIndex == 0){
        slides[slides.length-1].style.display = "block";
        currentIndex = slides.length-1;
    } else {
        currentIndex--;
        slides[currentIndex].style.display = "block";
    }
}

function nextSlide() {
    var slides = document.getElementsByClassName("slide");
    clearSlides()
    if(currentIndex == (slides.length-1)){
        slides[0].style.display = "block";
        currentIndex = 0;
    } else {
        currentIndex++;
        slides[currentIndex].style.display = "block";
    }

    console.log(currentIndex);
}

function clearSlides(){
    var slides = document.getElementsByClassName("slide");
    
    for(var i = 0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
}