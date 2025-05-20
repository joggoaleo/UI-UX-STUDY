//전체 document가 메모리에 모두 로드가 되었을 때 onload 함수 콜
//document.addEventListener('DOMContentLoaded',와 같은기능
function onLoad() {
  // id 패턴 검색을 진행할 이벤트를 정의
  let id = document.querySelector("#id");
  let pw = document.querySelector("#pw");
  let pwCheck = document.querySelector("#pwCheck");
  let name = document.querySelector("#name");
  let nickname = document.querySelector("#nickname");
  let email = document.querySelector("#email");
  let tel = document.querySelector("#tel");
  let phoneNum = document.querySelector("#phoneNum");
  let add2 = document.querySelector("#add2");
  let checkHuman = document.querySelector("#checkHuman");
  
 

  //주소 api용
  let addrSearch = document.querySelector("#addrSearch");
  let zipcode = document.querySelector("#zipcode");
  let add1 = document.querySelector("#add1");

  let idPattern = /^[\w]{3,12}$/;
  let pwPattern = /^[\w]{8,16}$/;
  let namePattern = /^[가-힣]{1,4}|[a-zA-Z]{1}[a-zA-z\x20]{1,10}$/;
  let nickPattern = /^[가-힣a-zA-Z]{2,11}$/;
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let telPattern = /^0\d{1,2}-?\d{3,4}-?\d{4}$/;

  checkHuman.addEventListener("blur", () => {
    let span = document.querySelector("#checkHuman+span");
    if (checkHuman.value !== "RCAPD6") {
      span.innerHTML = "잘못된 입력값입니다.";
      span.style.color = "tomato";
    } else {
      span.innerHTML = "";
    }
  });

  add2.addEventListener(
    "blur",
    () => {
      if (add2.value === "") {
        add2.nextElementSibling.innerHTML = "필수 입력값입니다.";
        add2.nextElementSibling.style.color = "tomato";
      } else {
        span.innerHTML = "상세주소";
      }
    },
    false
  );

  phoneNum.addEventListener(
    "blur",
    () => {
      validate(phoneNum, telPattern, "휴대폰 형식에 맞게 입력해주세요");
    },
    false
  );

  tel.addEventListener(
    "blur",
    () => {
      validate(tel, telPattern, "전화번호 형식에 맞게 입력해주세요");
    },
    false
  );

  email.addEventListener(
    "blur",
    () => {
      validate(email, emailPattern, "이메일 형식에 맞게 입력해주세요");
    },
    false
  );
  nickname.addEventListener(
    "blur",
    () => {
      validate(nickname, nickPattern, "규칙에 맞게 닉네임을 입력해주세요");
    },
    false
  );
  name.addEventListener(
    "blur",
    () => {
      validate(name, namePattern, "정확한 이름을 입력해주세요");
    },
    false
  );

  id.addEventListener(
    "blur",
    () => {
      validate(
        id,
        idPattern,
        "영문자, 숫자, _만 입력 가능. 최소 3자이상 입력하세요."
      );
      // if(id.value.match(idPattern)){
      //  //id.nextElementSibling===인접형제선택자
      //   id.nextElementSibling.innerHTML =  "성공";
      //   id.nextElementSibling.style.color = "green";
      //  }
      //   else{
      //     let span = document.querySelector("#id+span");//인접형제선택자
      //      span.innerHTML = "영문자, 숫자, _만 입력 가능. 최소 3자이상 입력하세요.";
      //      span.style.color = "tomato";
      //      id.value = "";// 틀리면 리셋
      //      id.focus();
      //  }
    },
    false
  );

  pw.addEventListener(
    "blur",
    () => {
      validate(
        pw,
        pwPattern,
        "영문자, 숫자, _만 입력 가능. 최소 8자 최대16글자 입력하세요."
      );
      // if(pw.value.match(pwPattern)){
      //  //id.nextElementSibling===인접형제선택자
      //   pw.nextElementSibling.innerHTML =  "성공";
      //   pw.nextElementSibling.style.color = "green";
      //  }
      //   else{
      //     let span = document.querySelector("#pw+span");//인접형제선택자
      //      span.innerHTML = "영문자, 숫자, _만 입력 가능. 최소 8자 최대16글자 입력하세요.";
      //      span.style.color = "tomato";
      //      pw.value = ""; // 틀리면 리셋
      //      pw.focus();
      //   }
    },
    false
  );

  pwCheck.addEventListener(
    "blur",
    () => {
      if (pw.value === pwCheck.value) {
        //id.nextElementSibling===인접형제선택자
        pwCheck.nextElementSibling.innerHTML = "패스워드 일치";
        pwCheck.nextElementSibling.style.color = "green";
      } else {
        let span = document.querySelector("#pwCheck+span"); //인접형제선택자
        span.innerHTML = "패스워드가 일치하지않습니다.";
        span.style.color = "tomato";
        pwCheck.value = ""; // 틀리면 리셋
        pwCheck.focus();
      }
    },
    false
  );

  //우편번호 이벤트처리
  addrSearch.addEventListener("click", () => {
    new daum.Postcode({
      oncomplete: function (data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드
        if (data !== null && data !== undefined) {
          console.log("zipcode", data.zonecode);
          console.log("data.roadAddress", data.roadAddress);

          zipcode.value = data.zonecode;
          add1.value = data.roadAddress;
        } else {
          addrSearch.nextElementSibling.innerHtml = "api오류발생 직접입력";
          zipcode.focus();
        }
      },
    }).open();
  });

// 안돼 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  //라디오박스
 let radio = document.querySelectorAll("input[type='radio']");
  
  function radioChecked() {
    let radioSpan = document.querySelector("#radioSpan");
    for (let i = 0; i < radio.length; i++) {
      if (radio[i].checked === false) {
        return false;
      } else {
        radioSpan.innerHTML = "ok";
        return true;
      }
    }
  }

  //회원가입 전송기능 점검
  submit.addEventListener("click", function () {
    radioChecked();
    //아이디
    let idReturn = validate(id, idPattern, "필수 입력항목입니다.");
    let pwReturn = validate(pw, pwPattern, "필수 입력항목입니다.");
    let pwCheckReturn = validate(pwCheck, pwPattern, "필수 입력항목입니다.");
    let nameReturn = validate(name, namePattern, "필수 입력항목입니다.");
    let nickReturn = validate(nickname, nickPattern, "필수 입력항목입니다.");
    let emailReturn = validate(email, emailPattern, "필수 입력항목입니다.");
    let telReturn = validate(tel, telPattern, "필수 입력항목입니다.");
    let phoneReturn = validate(phoneNum, telPattern, "필수 입력항목입니다.");

    function check(ifFalse) {
      if (ifFalse === false) {
        return; // 틀리면 서버에 전송되는것 방지
      }
    }
    check(idReturn);
    check(pwReturn);
    check(pwCheckReturn);
    check(nameReturn);
    check(nickReturn);
    check(emailReturn);
    check(telReturn);
    check(phoneReturn);

    let form = document.querySelector("form");
    form.submit();
  });

  let reset = document.querySelector("#reset");
  reset.addEventListener("click", () => {
    let span = document.querySelectorAll("input+span");
    for (let i = 0; i < span.length; i++) {
      span[i].innerHTML = "";
    }
  });

  //공동으로 사용되는 함수
  function validate(inputObj, pattern, message) {
    if (inputObj.value.match(pattern)) {
      //id.nextElementSibling===인접형제선택자
      inputObj.nextElementSibling.innerHTML = "ok";
      inputObj.nextElementSibling.style.color = "green";
      return true;
    } else {
      inputObj.nextElementSibling.innerHTML = message;
      inputObj.nextElementSibling.style.color = "tomato";
      inputObj.value = ""; // 틀리면 리셋
      inputObj.focus();
      return false;
    }
  }
}

// DOMContentLoaded가 우선순위 더 강함.
// document.addEventListener('DOMContentLoaded',function(){
// let id = document.querySelector("#id");
//   id.addEventListener("click",()=>{alert('2')},false)
// })
