let el;

function charCount(e){
    let textEntered, charDisplay, counter, lastkey;
    textEntered = document.getElementById('message').value;
    charDisplay = document.getElementById('charactersLeft');
    counter=(180-(textEntered.length));
    charDisplay.textContent=counter;

    lastkey=document.getElementById('lastKey');
    lastkey.textContent='마지막 입력의 ASCII코드: '+ e.keyCode;
}
el=document.getElementById('message');
el.addEventListener('keyup', charCount, false);
//keyCode는 evenet의 내장함수로 생각하면됨. event와 함께 써야함.