function checkLength(e, minLength) {       
    let el, elMsg;                            
    if (!e) {                                  
      e = window.event;                      
    }
    el = e.target || e.srcElement;        // ||===or, &&===and 
    elMsg = el.nextSibling;                 
  
    if (el.value.length < minLength) {        
      elMsg.innerHTML = '이름은 ' + minLength + ' 글자 이상이어야 합니다';
    } else {                               
      elMsg.innerHTML = '';                    
    }
  }
  
  let elUsername = document.getElementById('username');
  if (elUsername.addEventListener) {          
    elUsername.addEventListener('blur', function(e) {
      checkLength(e, 5);                            
    }, false);                                     
  } else {                                        
    elUsername.attachEvent('onblur', function(e) {  
      
      checkLength(e, 5);                          
    });
  }
  
/* 보통 event가 아니라 e로 사용함.

function checkUsername(e, minLength){
    let target = e.target;
 }
 
 let el = document.getElementById(‘username’);
 el.addEventListener(‘blur’, function(e){
    checkUsername(e, 5);
 }, false);

 */