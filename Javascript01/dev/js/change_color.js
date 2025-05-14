
    //1 객체를 찾는다. Student stu = new Student(); => 객체배열=> Collection Framework
    //document(화면에 있는 모든 UI객체를 다 가지고 있다.) => 어떻게 찾지? (CSS 선택자 기능을 가지고 찾는다)
    //한개만 찾고 싶으면 ID줘야한다. CLASS이름으로 찾으면 => 객체 참조배열[첨자] 반복문을 이용하면 된다.
    //var 부작용으로 호스팅 문제;
    // let heading = document.getElementById('heading');
    let heading = document.querySelector("#heading");
    let para = document.querySelector("#text");

    //2. 객체를 내 마음대로 설정 (기본속성,style,이벤트속성:on,content)
    //인터페이스, 구현클래스, 오버라이딩, 업캐스팅, new 임시객체
    
    // function(){} 함수명 생략/ 어차피 한번정의하고 말겨
    heading.onclick = ()=>{
      heading.style.color = "red";
      window.alert("h1클릭하셧습네다");
      heading.style.fontSize = "100px";
      para.innerHTML = "메롱";
    }
   // heading.onclick => style.color("orange");
