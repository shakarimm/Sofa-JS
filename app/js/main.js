
$('.main__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.secondary__slider'
});

$('.secondary__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.main__slider',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});

const overlay1 = document.getElementById("product-shape-1");
const overlay2 = document.getElementById("product-shape-2");
const overlay3 = document.getElementById("product-shape-3");
const overlay4 = document.getElementById("product-shape-4");
const overlay5 = document.getElementById("product-shape-5");
const overlay6 = document.getElementById("product-shape-6");
const overlay7 = document.getElementById("product-shape-7");
const overlay8 = document.getElementById("product-shape-8");
const overlay9 = document.getElementById("product-shape-9");
const overlay10 = document.getElementById("product-shape-10");
const overlay11 = document.getElementById("product-shape-11");
const overlay12 = document.getElementById("product-shape-12");
const overlay13 = document.getElementById("product-shape-13");
const overlay14 = document.getElementById("product-shape-14");
const overlay15 = document.getElementById("product-shape-15");
const overlay16 = document.getElementById("product-shape-16");
const overlay17 = document.getElementById("product-shape-17");
const overlay18 = document.getElementById("product-shape-18");
const overlay19 = document.getElementById("product-shape-19");
const overlay20 = document.getElementById("product-shape-20");
const overlay21 = document.getElementById("product-shape-21");
const overlay22 = document.getElementById("product-shape-22");
const overlay23 = document.getElementById("product-shape-23");
const overlay24 = document.getElementById("product-shape-24");
const overlay25 = document.getElementById("product-shape-25");
const overlay26 = document.getElementById("product-shape-26");
const overlay27 = document.getElementById("product-shape-27");
const overlay28 = document.getElementById("product-shape-28");
const overlay29 = document.getElementById("product-shape-29");
const overlay30 = document.getElementById("product-shape-30");
const overlay31 = document.getElementById("product-shape-31");
const overlay32 = document.getElementById("product-shape-32");
const overlay33 = document.getElementById("product-shape-33");

//Вытягиваю path => fill с каждой SVG

const settingsChooseMainColor = document.querySelectorAll(".settings__choose-color");
const settingsChooseSecondaryColor = document.querySelectorAll(".settings__choose-color-1");

settingsChooseMainColor.forEach((item)=>{
  item.addEventListener("click", (elem)=>
  {
  for (let index = 0; index < settingsChooseMainColor.length; index++) {
    settingsChooseMainColor[index].classList.remove("settings__choose-color--active");
  }
  const target = elem.target;
  target.classList.add("settings__choose-color--active");
  });
});

settingsChooseSecondaryColor.forEach((item)=>{
  item.addEventListener("click", (elem)=>
  {
  for (let index = 0; index < settingsChooseSecondaryColor.length; index++) {
    settingsChooseSecondaryColor[index].classList.remove("settings__choose-color--active");
  }
  const target = elem.target;
  target.classList.add("settings__choose-color--active");
  });
});


function changeStyleBorder(elem) {
  for (let index = 0; index < settingsChooseMainColor.length; index++) {
    settingsChooseMainColor[index].classList.remove("settings__choose-color--active");
  }
  const target = elem.target;
  target.classList.add("settings__choose-color--active");
}


var el = document.getElementsByClassName("settings__choose-color");
for (var i = 0; i < el.length; i++) {
  el[i].onclick = changeColor;
}

//При клике на конкретный элемент срабатывает функция changeColor(e)

function changeColor(e) {

  let hex = e.target.getAttribute("data-hex");
  
  overlay1.style.fill = hex;
  overlay2.style.fill = hex;
  overlay3.style.fill = hex;
  overlay4.style.fill = hex;
  overlay5.style.fill = hex;
  overlay6.style.fill = hex;
  overlay7.style.fill = hex;
  overlay8.style.fill = hex;
  overlay9.style.fill = hex;
  overlay10.style.fill = hex;
  overlay11.style.fill = hex;
  overlay12.style.fill = hex;
  overlay13.style.fill = hex;
}

// let hex вытягиваю каждый data-hex с каждого цвета в html прописан data-hex, затем той переменной(которую я создал в самом начале) присваиваю fill который равен своему hex'у 

var el = document.getElementsByClassName("settings__choose-color-1");
for (var i = 0; i < el.length; i++) {
  el[i].onclick = changeColorSecond;
}


function changeColorSecond(e) {

  let hexSecond = e.target.getAttribute("data-hex");

  overlay14.style.fill = hexSecond;
  overlay15.style.fill = hexSecond;
  overlay16.style.fill = hexSecond;
  overlay17.style.fill = hexSecond;
  overlay18.style.fill = hexSecond;
  overlay19.style.fill = hexSecond;
  overlay20.style.fill = hexSecond;
  overlay21.style.fill = hexSecond;
  overlay22.style.fill = hexSecond;
  overlay23.style.fill = hexSecond;
  overlay24.style.fill = hexSecond;
  overlay25.style.fill = hexSecond;
  overlay26.style.fill = hexSecond;
  overlay27.style.fill = hexSecond;
  overlay28.style.fill = hexSecond;
  overlay29.style.fill = hexSecond;
  overlay30.style.fill = hexSecond;
  overlay31.style.fill = hexSecond;
  overlay32.style.fill = hexSecond;
  overlay33.style.fill = hexSecond;
}

// let input = document.querySelector('.setting__choose-input');

// input.keydown(function(event){
//   if (event.keyCode == 13) {
//     this.form.submit();
//     return false;
//   }
// })

let inputValue = document.querySelector('.setting__choose-input');
  console.log(inputValue.value);


inputValue.addEventListener("keydown", test);

function test(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
  console.log(event)
  switch (+inputValue.value) {
    case 200:
      document.querySelector(".slider__img-1").src = "../images/content-svg/300/1.png";
      document.querySelector(".slider__img-2").src = "../images/content-svg/300/2.png";
      document.querySelector(".slider__img-3").src = "../images/content-svg/300/4.png";
      document.querySelector(".slider__img-4").src = "../images/content-svg/300/4.png";
      document.querySelector("#slider__img-1").src = "../images/content-svg/300/1.png";
      document.querySelector("#slider__img-2").src = "../images/content-svg/300/2.png";
      document.querySelector("#slider__img-3").src = "../images/content-svg/300/4.png";
      document.querySelector("#slider__img-4").src = "../images/content-svg/300/4.png";
      inputValue.value = '';
      break;
    case 300:
      document.querySelector(".slider__img-1").src = "../images/content-svg/300/2.png";
      inputValue.value = '';
      break;
    case 500:
      document.querySelector(".slider__img-1").src = "../images/content-svg/300/4.png";
      inputValue.value = '';
      break;
    default:
      // document.querySelector(".slider__img-1").src = "../images/slider-1.png";
      // document.querySelector("#slider__img-1").src = "../images/slider-1.png";
      break;
  }
}
}

// const btn = document.querySelector('.setting__choose-width-btn').addEventListener("click", test);


  



// let mini = document.querySelector('.setting__choose-input').addEventListener("keyup", (event)=>{
//   console.log(event)
//   switch (+inputValue.value) {
//     case 200:
//       document.querySelector(".slider__img-1").src = "../images/content-svg/300/1.png";
//       document.querySelector(".slider__img-2").src = "../images/content-svg/300/2.png";
//       document.querySelector(".slider__img-3").src = "../images/content-svg/300/4.png";
//       document.querySelector(".slider__img-4").src = "../images/content-svg/300/4.png";
//       document.querySelector("#slider__img-1").src = "../images/content-svg/300/1.png";
//       document.querySelector("#slider__img-2").src = "../images/content-svg/300/2.png";
//       document.querySelector("#slider__img-3").src = "../images/content-svg/300/4.png";
//       document.querySelector("#slider__img-4").src = "../images/content-svg/300/4.png";
//       break;
//     case 300:
//       document.querySelector(".slider__img-1").src = "../images/content-svg/300/2.png";
//       break;
//     case 500:
//       document.querySelector(".slider__img-1").src = "../images/content-svg/300/4.png";
//       break;
  
//     default:
//       document.querySelector(".slider__img-1").src = "../images/slider-1.png";
//       document.querySelector("#slider__img-1").src = "../images/slider-1.png";
//       break;
//   }
  // if (inputValue.value == 200) {
  //   document.querySelector(".slider__img-1").src = "../images/content-svg/300/1.png";
  // }
  // else if(inputValue.value == 300){
  //   document.querySelector(".slider__img-1").src = "../images/content-svg/300/2.png";
  // }
  // else if(inputValue.value == 500){
  //   document.querySelector(".slider__img-1").src = "../images/content-svg/300/4.png";
  // }
// });
