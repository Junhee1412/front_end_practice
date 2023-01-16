function checkUsername(){
    let elMsg = document.getElementById('feedback');
    if(this.value.length<5){
        elMsg.textContent='이름은 다섯 글자 이상 입력하세요';
    }else{
        elMsg.textContent='';
    }
}

let elUsername = document.getElementById('username');
elUsername.addEventListener('blur', checkUsername, false);
//element.addEventListener('event', functionName[,false or true]);
//eventlistener에선 on이 빠져있음. 기본값은 false 오래된 브라우저에선 사용 불가
//이벤트를 처리하는 가장 최근 문법
//checkUsername에 매개변수를 넣고 싶으면 function(){checkUsername(5);}, false하면됨
//익명함수는 순차적으로 실행될 수 있도록 블록에 보통 들어가서 지정되어있음.