

  
  const dropDownMobile = document.getElementById("dropdown-mobile");

  function toggleDropDown(){
  const dropdown = document.getElementById("dropdown");
  const dropTop = document.getElementById("dropTop");
  const dropTop2 = document.getElementById("dropTop2");
  
  
  dropdown.classList.toggle("ShowToggle")
  dropTop.classList.toggle("ShowDropTop")
  dropTop2.classList.toggle("ShowDropTop")
  }
  
  dropDownMobile.addEventListener("click", toggleDropDown);
  


function onScroll() {


}



ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 500
})
.reveal(`
.wrapper-home,
.parceiros,
.optionCardsSection,
.cardTittle,
.rangeSection,
.co-working-home,
footer,
.wrapper-preco,
.price,
.co-working-preco,
.wrapper-solution,
.grid-solution,
.grid-solution-column,
.comment-slider-container,
.perguntasFrequentes,
.co-working-solution,
.wrapper-formalizacao,
.formalizacao-section,
.formalizacao-process,
.co-working-formalizacao,
.grid-price

`)




    var swiper = new Swiper(".slide-content", {
        loop: false,
   
      loopFillGroupWithBlank: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
      268: {
        
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
       
 
      },       500: {
        
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
       
 
      },     768: {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2,
      },      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 2,
      }},
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });











// BTN HAMBUGUER

const btnMobile = document.getElementById("btn_hamburger");


function toggleMenu(){
  const nav = document.getElementById('navBar');
  nav.classList.toggle('openMenu');
}
btnMobile.addEventListener("click", toggleMenu);


// sidebar-form showTabble

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionList = document.querySelectorAll(".option");

  selected.addEventListener("click", () =>{
optionsContainer.classList.toggle('showTabble');

  });

  optionList.forEach(o => {
o.addEventListener("click", ()=> {
selected.innerHTML = o.querySelector("label").innerHTML;
optionsContainer.classList.remove('showTabble');

})


  })



  //----------------------------------------


 $(function(){

 $(window).scroll(function(){

   if($(window).scrollTop() > 1){
    $("#toTopButton").addClass("showTop");

   }
   else{
    $("#toTopButton").removeClass("showTop");
   }

 });



});

$(document).ready(function(){

$("#toTopButton").click(function(){
 $("html, body").animate({scrollTop :0}, 200)

});

});


const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}