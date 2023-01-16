let msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg +='<div><h2>정기 점검 중입니다</h2>';
msg += '오전 3시 ~ 4시 사이에 서버 점검이 있습니다<br>';
msg += '이 시간 동안에는 서비스 이용이 불가능 합니다.</div>';
//\다음문자가 코드에서 일렬로 처리할때 사용한다.따옴표 앞에써서 따옴표가 코드의 일부임을 알려줌.
let elNote = document.createElement('div');//div를 생성해라
elNote.setAttribute('id', 'note');//속성값, 속성 이름 <div id=note>
elNote.innerHTML=msg;//msg가 html로 인식되어라 elNote에
document.body.appendChild(elNote);//맨 마지막에 추가됨.

function dismissNote(){
    document.body.removeChild(elNote);
}

let elClose=document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);