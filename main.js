function writeOnScreen(e) {
    const key = document.querySelectorAll(`div[data-key="${e.keyCode}"]`);
    key.forEach(keys=> keys.classList.add("active"));
    if (!key.length) return;

    audio.currentTime = 0;
    audio.play();

    /*
    let text = document.querySelector('p').innerHTML.split('');
    let loremText = document.querySelector('p');
    text.shift();
    let texti = text.join('');
    if(text.length==0) return;
    loremText.innerHTML = texti;*/

/*
    const screen = document.querySelector('.screen');
    let p = document.createElement('p');

    switch(e.keyCode){
        case 8://backspace
            let para = document.querySelectorAll('p');
            if(para.length==1) break;
            para[para.length-1].remove();
            break;
        case 9://tab
            p.style.width = "40px";
            screen.appendChild(p);
            break;
        case 13://enter
            p.innerHTML="<br>"
            screen.appendChild(p);
            break;
        case 16://shift
            
            break;
        case 32://spacebar
            p.style.width = "10px";
            screen.appendChild(p);
            break;
        default:
            p.innerHTML=key[0].innerText.toLowerCase();
            console.log(key[0]);
            screen.appendChild(p);
            break;
    }
*/
}

function removeTransition(e) {
    console.log(e);
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('active');
}

const audio = document.querySelector(`audio`);
const keys = Array.from(document.querySelectorAll('.keys'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', writeOnScreen);