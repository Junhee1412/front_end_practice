let elList, addLink, newEl, newText, counter, listItems;

elList=document.getElementById('list');
addLink=document.querySelector('a');//(query- 조건식)태그도 올 수 있고 .# 하위 부모등 많이 올 수 있음.
counter=document.getElementById('counter');

function addItem(e){
    e.preventDefault();
    newEl = document.createElement('li');
    newText = document.createTextNode('새로운 목록 추가');
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updateCount(){
    listItems=elList.getElementByTagName('li').length;
    //ul의 li개수를 저장해라
    counter.innerHTML=listItems;
}

addLink.addEventListener('click', addItem, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);