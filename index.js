
//////////////////
////// IMAGES ////
//////////////////

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const PrevButton = document.querySelector('#PrevButton');
const NextButton = document.querySelector('#NextButton');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform='translateX('+ (-size*counter) + 'px';

//Button listners

NextButton.addEventListener('click',() => {
    if(counter>=carouselImages.length-1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter ++;
    carouselSlide.style.transform='translateX('+ (-size*counter) + 'px';


    });

PrevButton.addEventListener('click',() => {
    if(counter<=0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter --;
    carouselSlide.style.transform='translateX('+ (-size*counter) + 'px';


    });

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition ='none';
        counter = carouselImages.length-3;
        carouselSlide.style.transform='translateX('+ (-size*counter) + 'px';

    }

    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition ='none';
        counter = carouselImages.length-counter;
        carouselSlide.style.transform='translateX('+ (-size*counter) + 'px';

    }
        
    });

////////////////////////
//READ BTN DESCRIPTION//
////////////////////////

const Btn = document.querySelector('.ReadMoreBtn');

const Text = document.querySelector('.TextReadMore');

const CardHolder = document.querySelector('#TextDescription');

CardHolder.addEventListener('click',e => {
    const current = e.target;
    const isReadMoreBtn = current.className.includes('ReadMoreBtn');

    if(!isReadMoreBtn)
        return;

    const currentText = e.target.parentNode.querySelector('.TextReadMore');
    currentText.classList.toggle('TextReadMore--open');
    current.textContent = current.textContent.includes('Read more...') ? 'Read less...' : 'Read more...';

})





var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if( isMobile.any() ) 
    {var btn = '.TextReadMoreMobile';}
else{
    var btn = '.TextReadMore';
}



