function checkUsername(){
    let elMsg = document.getElementById('feedback');//ID가 feedback인 것을 찾아 elMsg로 저장해라
    let elUsername = document.getElementById('username');
    if(elUsername.value.length<5){//이름이 다섯글자 미만이면 true값 도출
        elMsg.textContent = '이름은 다섯글자 이상으로 입력하세요';
    }else{
        elMsg.textContent = '';
    }
}