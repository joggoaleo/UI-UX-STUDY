let name = window.prompt('이름 입력','홍길동');
if( name === null|| name ===''){
  window.alert('정확한 데이터를 입력해주세요');
  console.log('고객이 데이터 입력안함..')
}else{
  document.write(`  <strong>${name}</strong>님 저희 사이트를 오신 것을 환영합니다.`);
  //template literal `${}`
  let must = document.querySelectorAll(".must");
    let hidden = document.querySelectorAll(".Hidden");
    must.onblur = event => console.log("gg");
}