let elUsername=document.getElementById('username');
let elMsg=document.getElementById('feedback');

function checkUsername(minLength){
    if(elUsername.value.length<minLength){
        elMsg.innerHTML = '이름은 ' + minLength + '글자 이상이어야 합니다';
    }else{
        elMsg.innerHTML='';
    }
}

if(elUsername.addEventListener){
    elUsername.addEventListener('blur',function(){
    checkUsername(5);
},false);
}else{
    elUsername.attachEvent('onblur', function(){
        checkUsername(5);
    });
}

//attachEvent는 on을 사용함 이 메서드는 익스플로러와 크로스브라우징으로 인해 사용함
//addEventListener를 먼저 사용하고 이후에 사용되어지게끔 실행함.