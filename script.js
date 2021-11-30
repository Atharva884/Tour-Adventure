let barBtn = document.querySelector('.bar')
let navbar = document.querySelector('.navbar')

barBtn.addEventListener('click', ()=>{
    barBtn.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

let slide_container = document.querySelectorAll('.slide-container')
let index = 0

function next(){
    slide_container[index].classList.remove('hide')
    index = (index + 1) % slide_container.length;
    slide_container[index].classList.add('hide')
}

function prev(){
    slide_container[index].classList.remove('hide')
    index = (index - 1 + slide_container.length) % slide_container.length;
    slide_container[index].classList.add('hide')
}

setInterval(next, 5000)

window.onscroll=()=>{
    let head = document.querySelector('.head')
    if(window.scrollY > 0){
        head.classList.add('overpowered')
    }else{
        head.classList.remove('overpowered')
    }
}


// Swiper Js
var swiper = new Swiper(".product-slider", {
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
    },
    loop: true,
    grabCursor: true,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation:{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
    },
    loop: true,
    grabCursor: true,
});

var swiper = new Swiper(".blogs-container", {
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
    },
    loop: true,
    grabCursor: true,
});

var swiper = new Swiper(".logo-container", {
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 4,
        },
    },
    loop: true,
    grabCursor: true,
});

let search_container = document.querySelector('.search-container')
let searchIcon = document.querySelector('.searchIcon')

searchIcon.addEventListener('click', ()=>{
    search_container.classList.toggle('showSearch')
})
