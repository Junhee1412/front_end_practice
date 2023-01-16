document.addEventListener('DOMContentLoaded', function(){//document에 접근해서 이벤트를 실행한다.DOM트리가 형성될때 함수 실행 
    //폼 버튼 이벤트 리스너 추가  
    document.getElementsByName('reset')[0].addEventListener('click', function(){resetForm();}); 
    // document에 접근해서 이름이 reset인 것 중 인덱스 번호 0번인 것(button name:reset, value: 내용지우기)에 이벤트 추가 이벤트 내용은 클릭 시 함수 발동 함수 내용은 Form reset(초기화)
    document.getElementsByName('save')[0].addEventListener('click', function(){saveItem();}); 
    // document에 접근해서 이름이 save인 것 중 인덱스 번호 0번인 것(button name:save, value: 저장)에 이벤트 추가 이벤트 내용은 함수 발동 클릭 시 함수 발동 함수 내용은 Item save(내용 저장)
});


/* 할일 저장 */
function saveItem(){//함수 이름 saveItem 지정
    if(validateItemForm()){ // 폼 필드 체크 완료되었으면
        let form = document.getElementById('newitem');
        //form 객체 지정 document에 접근해서 Id가 newitem인 것(script태그)
        let elem = document.createElement('div');
        //elem 객체 지정 document에 접근해서 div 태그 생성
        elem.innerHTML = form.text.trim();
        //elem을 HTML언어로 변환 form에 하위에 텍스트 형식에 양쪽 공백 제거
        elem.firstChild.classList.add('newitem');
        //elem의 첫번째 자식으로 newitem이라는 클래스목록을 추가한다.
        document.querySelector('.todo .content').append(elem.firstChild);
        //document에 접근해서 클래스명이 todo 하위 클래스 content인 것을 선택해서 
        //elem의 첫번째 자식(new item=form=script)을 추가한다.

        let date = new Date(); //날짜를 새롭게 지정한다.(실시간 날짜지정)

        document.querySelector('.newitem .todo').textContent = document.getElementsByName('todo')[0].value;
        //문서에 접근해서 클래스명이 newitem 하위 클래스 todo의 글자 그대로를받아
        //문서에 접근해 name이 todo인 것 중 인덱스 번호 0번에 값과 동일하게 맞춘다.
        document.querySelector('.newitem .date').textContent = 
            date.getFullYear() + '-' + (date.getUTCMonth() + 1).fillZero(2) + '-' + date.getDate().fillZero(2) + ', ';
        //문서에 접근해서 클래스 명이 newitem 하위 클래스 date의 글자 그대로를 date(실시간날짜)에 
        //네자리년도 + - + (월+1=값을 2자리가 아니면 0을 채워서) + - + 날짜값.2자리가 아니면 0을 채워서 + , 으로 지정
        document.querySelector('.newitem .priority').textContent = 
            '중요도 ' + document.querySelector('input[name="priority"]:checked').value;
        //문서에 접근해서 클래스명이 newitem인 것의 하위 클래스 priority의 글자 그대로를
        //중요도 + 문서에 셀렉트 박스에 선택된 값으로 지정
        document.querySelector('.newitem .moveitem').addEventListener('click',function(e){
            moveItem(e.target);
        //문서에 접근해서 클래스명이 newitem 하위 클래스 moveitem(script하위)에 이벤트 추가
        //클릭하면 function(e) 항목이 이동하게하는 함수 지정 e.target은 클래스 moveitem
        });
        document.querySelector('.newitem').classList.remove('newitem');
        //문서에 접근해서 클래스가 newitem인 것에 클래스 목록 중 newitem인 것을 지운다.
        //(elem의 첫번째 자식으로 지정한 클래스 newitem 제거)
        resetForm(); // 할일 목록에 등록 후 폼 초기화
    }
}

/* 진행단계 이동 */
function moveItem(elem){//moveItem이라는 함수 지정
    let section = elem.parentNode.parentNode.parentNode;
    //section은 매개변수의 부모부모부모 노드
    let item = elem.parentNode;
    //item은 매개변수의 부모노드
    if(section.classList.contains('doing')){
        elem.remove();
    }
    //section의 클래스 목록에 doing이 포함되어 있으면 해당 매개값을 지운다.
    let ditem = item.parentNode.removeChild(item);
    //ditem을 item의 부모노드에서 자식 노드 item을 없앤다로 지정
    document.querySelector('.'+section.nextElementSibling.className+' .content').append(ditem);
    //document에 접근해서 클래스명이 .section인 것의 다음 형제 클래스 명에 .content을 선택해서 ditem을 추가
}

/* 양식 초기화 */
function resetForm(){//resetForm 함수 지정
    document.getElementsByName('todo')[0].value = '';
    //document에 접근해서 이름이 todo인 요소의 0번째 값을 문자초기화 한다.
    let radios = document.getElementsByName('priority');
    //radios라는 객체 생성 document에 접근해서 priority라는 이름을 지정한다.
    radios.forEach(function(radio){
    //priority의 모든 객체에 접근해서 function(radio)를 실행한다.
        radio.checked = false;
    //radio가 체크되어 있으면 false로
    });
}

/* 폼 입력 체크 */
function validateItemForm(){
    //validateItemForm이라는 함수 지정
    let todo = validateItemField('todo','할일','input');
    //todo 객체 지정 validateItemField(todo, 할일, input)으로
    let priority = validateItemField('priority','중요도','radio');
    //priority객체 지정 validateItemField(priority,중요도,radio) 으로
    if(todo == '' || priority == ''){
        //todo나 priorty이 공백이면
        return false;
        //false값을 반환한다.
    }else{
        return true;
        //공백이 아니면 true값을 반환한다.
    }
}

/* 개별 필드 입력 체크 */
function validateItemField(fieldname, label, fieldtype){
    //validateItemField함수 지정 매개변수 3개
    let val = '';
    //val는 문자초기화
    switch(fieldtype){
    //fieldtype에서 케이스의 명령문을 실행한다.
        case 'input':
            val = document.getElementsByName(fieldname)[0].value;
            //input에 명령문 실행
            //val = 문서에 접근해서 이름이 fieldname인 것중 인덱스번호 0번의 값
            if(val == ''){
            //val이 공백과 같으면 실행해라
                alert(label+' 을/를 입력해 주십시오.');
            //알림창(label(할일)+을/를 입력해주십시오)이 나오게
                document.getElementsByName(fieldname)[0].focus();
            //문서에 접근해서 이름이 fielname인 것 중 인덱스 번호 0번에 커서를 두어라.
            }
            break;
            //case input 종료
        case 'radio':
            //radio의 명령문 실행
            if(document.querySelector('input[name="'+fieldname+'"]:checked') != null){
            //문서에 접근해서 조건문(input태그 중 이름이 'fieldname인 것이 체크 된 것)과 다르면 실행해라
                val = document.querySelector('input[name="'+fieldname+'"]:checked').value;
            //val은 문서에 접근해서 조건문 input태그 중 이름이 filedname인 것이 체크된 것의 value값
            }
            if(val == ''){
                alert(label+' 를 선택해 주십시오.');
            }
            //val값이 공백이라면 알람창(label(중요도)를 선택해 주십시오)출력
            break;
            //case radio 종료
    }
    return val;
}

//프로토타입으로 숫자 메써드로 구현
Number.prototype.fillZero = function(width){
    let n = String(this);//문자열 변환
    return n.length >= width ? n:new Array(width-n.length+1).join('0')+n;//남는 길이만큼 0으로 채움
}
