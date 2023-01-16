document.addEventListener('DOMContentLoaded', function(){
	//문서에 이벤트를 추가한다. 시점은 DOM트리가 생성될 때 함수실행
	document.querySelector(".mobile-menu").addEventListener("click", function(e){
		//함수 내용은 문서에 접근해서 클래스 이름 mobile-menu에 이벤트 추가 클릭하면 함수 실행
		if ( document.querySelector('.menuwrap').classList.contains('on') ){
			//문서에 접근해서 클래스 명이 menuwrap인 것을 선택 클래스 목록 중 on이 들어있으면
		    //메뉴닫힘
			document.querySelector('.menuwrap').classList.remove('on');
			//문서에 접근해서 클래스 명이 menuwrap인 것을 선택 클래스 목록중 on을 제거해라.
			document.querySelector('.mobile-menu i').classList.remove('fa-times');
			//문서에 접근해서 클래스명이 mobile-menu i인 것을 선택 클래스 목록 중 fa-times를 제거해라
			document.querySelector('.mobile-menu i').classList.add('fa-bars');
			//문서에 접근해서 mobile-menu i 인 것을 선택 클래스 목록 중 fa-bars를 추가해라.

		    //페이지 스크롤 락 해제
		    document.querySelector('#dimmed').remove();
		//문서에 접근해서 id dimmed를 지운다.
		} else {
		    //메뉴펼침 if 함수 false값 시작
			document.querySelector('.menuwrap').classList.add('on');
			//문서에 접근해서 클래스 명이 menuwrap인 것을 선택 클래스 목록 중 on을 추가해라
			document.querySelector('.mobile-menu i').classList.remove('fa-bars');
			//문서에 접근해서 클래스 명이 mobile-menu i인 것을 선택 클래스 목록 중 fa-bars를 제거해라
			document.querySelector('.mobile-menu i').classList.add('fa-times');
			//문서에 접근해서 mobile-menu i을 선택 fa-times를 추가해라.

		    //페이지 스크롤 락 레이어 추가
		    let div = document.createElement('div');
			//div 객체 생성 문서에 div요소추가
		    div.id = 'dimmed';
			//div의 id를 dimmed로 지정
		    document.body.append(div);
			//문서의 바디 영역 마지막에 추가

		    //페이지 스크롤 락  모바일 이벤트 차단
		    document.querySelector('#dimmed').addEventListener('scroll touchmove touchend mousewheel', function(e){
				e.preventDefault();//가지고 있는 기본 속성을 제거한다.
				e.stopPropagation();//가지고 있는 이벤트의 흐름을 제거한다.
				return false;//기본 속성 제거+이벤트 흐름 제거(크로스 브라우징)
		    });     
		}
	});	
})
