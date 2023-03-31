
const burgerButton = document.querySelector('.burger__button');

const burgerBody = document.querySelector('.burger__body');





const burgerButtonDecors = document.getElementsByClassName('burger__decor');

console.log(burgerButton);

const mainBody = document.querySelector('body');




burgerButton.addEventListener('click', function ()  {

    mainBody.classList.toggle('body_noScroll');
    


    if(burgerBody.classList.length<2){
        burgerBody.classList.toggle('burger__show');
        
    }
    else{
        burgerBody.classList.toggle('burger__hide');
        burgerBody.classList.toggle('burger__show');

    }
   
    for (let i = 0; i < burgerButtonDecors.length; i++) {
        burgerButtonDecors[i].classList.toggle('burger__dec__active');
        
    }
    
});

new Swiper('.image-slider' ,{
    slidesPerView:1,
    
    loop:true,
    
    
}); 
new Swiper('.feedback-slider' ,{
    slidesPerView:1,
    
    loop:true,
    
    
}); 

