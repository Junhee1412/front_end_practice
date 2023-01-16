document.addEventListener('DOMContentLoaded', function(){
    //별점선택 이벤트 리스너
    document.querySelector('.rating').addEventListener('click',function(e){
        //문서에 접근해서 클래스 명 rating선택 이벤트 추가 클릭하면 function실행
        let elem = e.target;
        //객체 elem을 이벤트가 실행되는 주체로 지정
        if(elem.classList.contains('rate_radio')){
            //elem의 클래스 목록 중 rate_radio가 포함되어 있으면
            rating.setRate(parseInt(elem.value));
            //rating에 접근해서 setRate함수 실행해라(정수 반환(elem의 value값))
        }
    })

    //상품평 작성 글자수 초과 체크 이벤트 리스너
    document.querySelector('.review_textarea').addEventListener('keydown',function(){
        //문서에 접근해서 클래스 명 review_textarea선택 이벤트 추가 키를 누를때 함수 실행
        //리뷰 400자 초과 안되게 자동 자름
        let review = document.querySelector('.review_textarea');
        //review 객체는 문서에 접근해서 클래스 review_textarea로 지정
        let lengthCheckEx = /^.{400,}$/;
        //lengthCheckEx 객체 지정 400자 초과
        if(lengthCheckEx.test(review.value)){
            //400자 초과 컷
            review.value = review.value.substr(0,400);
            //리뷰의 글자수가 400자 넘어가면 없앨것
        }
    });

    //저장 전송전 필드 체크 이벤트 리스너
    document.querySelector('#save').addEventListener('click', function(e){
        //문서에 접근해서 id명이 save인 것을 선택 이벤트를 추가 클릭하면 함수 실행
        //별점 선택 안했으면 메시지 표시
        if(rating.rate == 0){
            //함수 내용은 rating의 rate가 0과 같으면
            rating.showMessage('rate');
            //rate를 메세지로 보여줘라
            return false;
            //기본 속성과 이벤트 흐름을 제거하라
        }
        //리뷰 5자 미만이면 메시지 표시
        if(document.querySelector('.review_textarea').value.length < 5){
            //클래스 이름이 review_textarea인 것에 밸류값(글자수)가 5자 이하이면
            rating.showMessage('review');
            //review를 메세지로 보여줘라
            return false;
            //기본 속성과 이벤트 흐름을 제거하라
        }
        //폼 서밋
		//실제로는 서버에 폼을 전송하고 완료 메시지가 표시되지만 저장된 것으로 간주하고 폼을 초기화 함.
		alert("저장완료!");
        //알람창에 저장완료!를 실행시켜라
		rating.setRate(0);
        //rating에 setRate(0)을 접근시켜라
		document.querySelector('.review_textarea').value = '';
        //문서의 클래스 명이 review_textarea인 것의 값을 공백으로 만들어라.
    });
});


//별점 마킹 모듈 프로토타입으로 생성
function Rating(){};
//Rating 함수지정
Rating.prototype.rate = 0;
//Rating은 rate를 상속받아라.
Rating.prototype.setRate = function(newrate){
//Rating은 setRate를 상속받아 함수를 가져라
    //별점 마킹 - 클릭한 별 이하 모든 별 체크 처리
    this.rate = newrate;
    //rate의 상위 객체를 newrate로 한다.
    let items = document.querySelectorAll('.rate_radio');
    //items라는 객체 생성 문서에 접근해서 클래스 명이 rate_radio인 것을 모두 선택
    items.forEach(function(item, idx){
    //items에 모두 접근해서 함수 실행
        if(idx < newrate){
    //idx가 newrate보다 작으면 item이 체크된 것으로 true값 지정
            item.checked = true;
        }else{
            //그렇지 않으면 item이 체크되지 않음(false)으로 지정
            item.checked = false;
        }
    });
}
Rating.prototype.showMessage = function(type){//경고메시지 표시
    //Rating은 showMessage를 상속받아 함수를 가진다.
    switch(type){
    //type에 접근해서 case를 실행한다.
        case 'rate':
            //안내메시지 표시
            //case rate는 문서에 접근해서 클래스 review_rating 하위의 클래스 warning_msg를 보이게 한다.
            document.querySelector('.review_rating .warning_msg').style.display = 'block';
            //지정된 시간 후 안내 메시지 감춤
            setTimeout(function(){
            //1초 후 위를 없앤다.
                document.querySelector('.review_rating .warning_msg').style.display = 'none';
            },1000);            
            break;
            //case rate 종료
        case 'review':
            //case review실행
            //안내메시지 표시
            document.querySelector('.review_contents .warning_msg').style.display = 'block';
            //문서에 접근해서 클래스 review_contents 하위에 클래스 warning_msg를 보이게한다.
            //지정된 시간 후 안내 메시지 감춤
            setTimeout(function(){
                document.querySelector('.review_contents .warning_msg').style.display = 'none';
            },1000);    
            //1초후 위를 없앤다.
            break;
            //case review 종료
    }
}

let rating = new Rating();//별점 인스턴스 생성