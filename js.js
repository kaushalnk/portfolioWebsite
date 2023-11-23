let number1 = document.querySelector('.per-html');
let number2 = document.querySelector('.per-css');
let number3 = document.querySelector('.per-js');
let number4 = document.querySelector('.per-rt');
let number5 = document.querySelector('.per-ph');
let number6 = document.getElementById("srd-h");
let number7 = document.getElementById("srd-c");
let number8 = document.getElementById("srd-j");

let counter1 =0;
let counter2 =0;
let counter3 =0;
let counter4 =0;
let counter5 =0;
 //function 
function isScrollIntoView(elem) {
    var rect = elem.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    return isVisible;
}
//skill sec code
//apllying in each sec
 window.addEventListener("scroll", function(){
    if (isScrollIntoView(number1)){

        setInterval(() =>{
            if (counter1 == 99) {
               clearInterval();        
            }
            else{
                counter1 += 1;
                number1.innerHTML = counter1 + '%';
                document.querySelector('.svg-c').classList.add('view');
            }
        
        }, 20);
    }
 }) ;
 window.addEventListener("scroll", function(){
    if (isScrollIntoView(number2)){

        setInterval(() =>{
            if (counter2 == 90) {
               clearInterval();        
            }
            else{
                counter2 += 1;
                number2.innerHTML = counter2 + '%';
                document.querySelector('.svg-h').classList.add('view-css');
            }
        
        }, 30);
    }
 }) ;
 window.addEventListener("scroll", function(){
    if (isScrollIntoView(number3)){

        setInterval(() =>{
            if (counter3 == 75) {
               clearInterval();        
            }
            else{
                counter3 += 1;
                number3.innerHTML = counter3 + '%';
                document.querySelector('.svg-js').classList.add('view-js');
            }
            
        }, 30);
    }
}) ;


window.addEventListener("scroll", function(){
   if (isScrollIntoView(number4)){

       setInterval(() =>{
           if (counter4 == 75) {
              clearInterval();        
           }
           else{
               counter4 += 1;
               number4.innerHTML = counter4 + '%';
               document.querySelector('.svg-rt').classList.add('view-rt');
           }
       
       }, 30);
   }
}) ;

 window.addEventListener("scroll", function(){
    if (isScrollIntoView(number5)){

        setInterval(() =>{
            if (counter5 == 50) {
               clearInterval();        
            }
            else{
                counter5 += 1;
                number5.innerHTML = counter5 + '%';
                document.querySelector('.svg-ph').classList.add('view-ph');
            }
        
        }, 30);
    }
 }) ;

//nav section code using above is scroll into view function

let navBtn = document.getElementById("menuImg");
navBtn.addEventListener("click",curtain);

function curtain(){
  document.getElementById("navManue").classList.toggle("navList");
  document.getElementById("navManue").classList.toggle("aniul");
  navBtn.classList.toggle("animRotate");
 
}
//Skill sec for small range device
// variable number will start from 6on...
 
  window.addEventListener("scroll", function(){
    if (isScrollIntoView(number6)){
      number6.classList.add("filler-h");
 }}) ;
  window.addEventListener("scroll", function(){
    if (isScrollIntoView(number7)){
      number7.classList.add("filler-c");
 }}) ;
  window.addEventListener("scroll", function(){
    if (isScrollIntoView(number8)){
      number8.classList.add("filler-j");
 }}) ;