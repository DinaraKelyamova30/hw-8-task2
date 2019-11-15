let chang = document.querySelector('div');

chang.onmouseover = function(){
    chang.style.backgroundColor = 'yellow';
    chang.style.border = '4px solid red';
    chang.style.color = 'green';
    chang.innerHTML = `<div>Хочеш знати який?</div>`;
}
chang.onmouseout = function(){
    chang.style.backgroundColor = 'blueviolet';
    chang.style.border = '4px solid greenyellow';
    chang.innerHTML = `<div>У мене є секрет</div>`;
    chang.style.color = 'indigo';
}

chang.onmousedown = function(){
    chang.style.backgroundColor = 'red';
    chang.style.border = '4px solid yellow';
    chang.innerHTML = `<div>Не скажу</div>`;
    chang.style.color = 'white';
}

chang.onmouseup = function(){
    chang.style.backgroundColor = 'yellow';
    chang.style.border = '4px solid red';
    chang.style.color = 'green';
    chang.innerHTML = `<div>Хочеш знати який?</div>`;
}
