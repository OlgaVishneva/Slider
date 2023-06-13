let city = document.querySelectorAll('.menu');
let dots = document.querySelectorAll('.dot');
let aboutSlide = document.querySelectorAll('.about-slide')
let arrowLeft = document.querySelector('.left-arrow');
let arrowRight = document.querySelector('.right-arrow');

const arr = [];
arr.push('./img/photo 1.jpg');
arr.push('./img/photo 2.jpg');
arr.push('./img/photo 3.jpg'); 


dots[0].classList.add('dotActive')

function initOurSlider(){

    let sliderImg = document.querySelector('#photo');

    function initSlider(){
        arr.forEach((image, index) => {
           let imageDiv = `<div class="image num${index} ${index === 0 ? "active" : ""}" style="background-image: url('${arr[index]}')" data-index="${index}"></div>`;
           sliderImg.innerHTML += imageDiv;
        })
    }

    initSlider();

    let rightArrow = document.querySelector('.right-arrow');

    function right(){

        let curSlide = +sliderImg.querySelector('.active').dataset.index;
        let nextSlide;
        if (curSlide === 0) {
            nextSlide = curSlide + 1;
        }
        else if (curSlide === arr.length - 1){
            nextSlide = 0;
        }
        else {
            nextSlide = curSlide + 1;
        }
        moveSlider(nextSlide);
    }

    rightArrow.addEventListener('click', right);

    let leftArrow = document.querySelector('.left-arrow');

    function left(){

        let curSlide = +sliderImg.querySelector('.active').dataset.index;
        let nextSlide;
        if (curSlide === 0){
            nextSlide = arr.length - 1;
        }
        else if (curSlide === arr.length - 1) {
            nextSlide = curSlide - 1;
        }
        else {
            nextSlide = curSlide - 1;
        }

        moveSlider(nextSlide);
    }
    
    leftArrow.addEventListener('click', left); 
 
    city.forEach((cityName, index) => {
        cityName.addEventListener('click', () => {
          moveSlider(index);
        });
      });  

      dots.forEach((dotdot, index) => {
        dotdot.addEventListener('click', () => {
          moveSlider(index);
        });
      }); 

    function moveSlider(num) {
        let activeSlide = sliderImg.querySelector(".active");
            if (activeSlide) {
            activeSlide.classList.remove("active");
            }
        sliderImg.querySelector(".num" + num).classList.add("active");
        
        dots.forEach((dot, index) => {
            if (index === num) {
                dot.classList.add("dotActive");
            } else {
                dot.classList.remove("dotActive");
            } 
    })

       city.forEach((menu, index) => {
        if (index === num) {
            menu.classList.add("active-menu");
        } else {
            menu.classList.remove("active-menu");
        } 
    })
    }
    
}   

initOurSlider()
