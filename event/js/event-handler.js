function checkUsername(){
    let elMsg = document.getElementById('feedback');
    if(this.value.length<5){
        elMsg.textContent='이름은 다섯 글자 이상 입력하세요';
    }else{
        elMsg.textContent='';
    }
}

let elUsername = document.getElementById('username');
elUsername.onblur=checkUsername;
//element.onevent=functionName;()생략함 이벤트 핸들러 문법
//이벤트 핸들러 : 요소에 이벤트를 바인딩하고 이벤트가 발생했을때 호출될
//함수를 지정하는 문법 이벤트 하나엔 하나의 함수만 연결됨.