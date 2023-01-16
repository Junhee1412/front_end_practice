function setup(){
    let textInput;
    textInput=document.getElementById('message');
    textInput.focus();
}

window.addEventListener('DOMContentLoaded',setup,false);

window.addEventListener('beforeunload', function(event){
    let message='변경하신 내용을 저장하지 않습니다';
    (event || window.event).returnValue=message;//크로스브라우징때문에 했음.
    return message;
});