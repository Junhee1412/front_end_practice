function showElement(){
    alert(this.innerHTML);
    event.stopPropagation();
}
/*true는 부모로부터 이벤트를 발생시키기 위해 타고 내려옴 굉장히 비효율적임.
익스플로러는 true가 기본값임. 매우 비효율적.
event.stopPropagation은 클릭한 그 곳만 볼 수 있음. 캡쳐링과 버블링의 흐름을 끊음.*/
let el = {};
el = document.getElementById("list");
el.addEventListener('click', showElement, false);

el = document.getElementById("item");
el.addEventListener('click', showElement, false);

el = document.getElementById("link");
el.addEventListener('click', showElement, false);

el = document.getElementById("list2");
el.addEventListener('click', showElement, true);

el = document.getElementById("item2");
el.addEventListener('click', showElement, true);

el = document.getElementById("link2");
el.addEventListener('click', showElement, true);
