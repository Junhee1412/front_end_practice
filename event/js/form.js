let elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;
elForm = document.getElementById('formSignup');
elSelectPackage=document.getElementById('package');
elPackageHint=document.getElementById('packageHint');
elTerms=document.getElementById('terms');
elTermsHint=document.getElementById('termsHint');

function packageHint(){
    let pack = this.options[this.selectedIndex].value;
    if(pack==='monthly'){
        elPackageHint.innerHTML='1년 패키지를 선택하시면 10불을 절약할 수 있습니다!';
    }else{
        elPackageHint.innerHTML='탁월한 선택입니다!';
    }
}

function checkTerms(event){
    if(!elTerms.checked){
        elTermsHint.innerHTML='사용권 게약에 동의해야 합니다.';
        event.preventDefault();//if 구문안에 넣어서 체크되지 않을때만 기본동작취소하게 함.
        //submit작동 안함.
    }
}

elForm.addEventListener('submit',checkTerms, false);
elSelectPackage.addEventListener('change',packageHint, false);