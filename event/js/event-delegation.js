function getTarget(e) {                   //5. getTarget(e)라는 함수지정   
    if (!e) {                             //6. e가 아니면 윈도우에서 e를 찾아 실행할 것       
      e = window.event;                           
    }
    return e.target || e.srcElement;     //7. e의 주체를 찾아 값을 내보낼것+크로스브라우징         
  }
  
  function itemDone(e) {                 //8. itemDone(e)함수 지정         
    let target, elParent, elGrandparent; //9. target은 el의 부모와 부모의부모          
    target = getTarget(e);               //10. target을 getTarget(e)로지정    
  
  
    if ( target.nodeName.toLowerCase() == "a" ) { 
      elListItem = target.parentNode;            
      elList = elListItem.parentNode;             
      elList.removeChild(elListItem);          
    }
    /*11. target의 nodeName에 접근해서 toLowerCase()가 a와 같으면
    elListItem 은 target의 부모노드
    elList는 target의 부모의 부모노드
    elGrandparent(ul)에 접근해서 자식(elparent)을 없애라*/
    if ( target.nodeName.toLowerCase() == "em" ) { 
      elListItem = target.parentNode.parentNode;
      elList = elListItem.parentNode;             
      elList.removeChild(elListItem);             
    }
    /*12. target의 nodeName에 접근해서 toLowerCase()가 em과 같으면
    elListItem 은 target의 부모의 부모노드
    elList는 elListItem의 부모노드
    em태그 부모의 부모와 부모(ul)에 접근해서 
    elListItem(em태그 부모의 부모노드)을 없애라*/
    if (e.preventDefault) {                 
      e.preventDefault();
      console.log(e.target);//e가 누구인지 누굴 대상으로 하는지 클릭할 때 콘솔에 나옴.
    } else {                                       
      e.returnValue = false;                      
    }
  }
  /*이벤트의 기본 동작을 취소해라(a) 링크동작이 실행되지 않도록 해라. preventDefault
  returnValue=false;는 익스플로러*/
  let el = document.getElementById('shoppingList');//1. el을 id shoppingList로 지정
  if (el.addEventListener) {                //2. el = ul id =shoppingList에 이벤트 추가      
    el.addEventListener('click', function(e) {   //3. el을 클릭하면 itemDone(e)가 버블링으로 실행
      itemDone(e);                               
    }, false);                                   
  } else {                                      
    el.attachEvent('onclick', function(e) {  //4. 크로스브라우징
      itemDone(e);                            
    });
  }