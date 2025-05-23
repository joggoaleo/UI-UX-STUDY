document.addEventListener('DOMContentLoaded',function(){
// 이미지 타임 인터벌 설정
let container = document.querySelector(".merryGoAround");
let imgs = document.querySelectorAll(".img");
let btnLeft = document.querySelector("#navLeft");
let btnRight = document.querySelector("#navRight");
let indicators = document.querySelectorAll("#indicators>i");

let list = [1,0,0];
let intervalSet;

//배열의 원소값중 1인 것과 이미지, 인디케이터의 전환을 
//일치 및 초기화 기능
function Setting(){
  //list 원소값 1의 인덱스와 img의 z-index를 일치
  for(let i=0; i<imgs.length; i++){
  imgs[i].style.zIndex = list[i];
  }
  for(let i=0; i<imgs.length; i++){
  indicators[i].removeAttribute('id');
  }
  let index = list.indexOf(1);
  indicators[index].setAttribute('id','active');
  
}
Setting();

//무한반복 이미지 돌리기
function loop(){
 intervalSet = setInterval(() => {
  let value = list.pop();
  list.unshift(value);
  Setting();
}, 1500)
 }
loop();

for(let i =0; i<indicators.length;i++){

}






})
