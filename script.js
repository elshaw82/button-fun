// Button One

const buttonOne = document.querySelector('.button-one');

function spinMe(){
    buttonOne.classList.add('spin')
    buttonOne.addEventListener('animationend', removeClass)
    function removeClass() {
        buttonOne.classList.remove('spin')
    }
}

// Button Two

const buttonTwo = document.querySelector('.button-two');

function letsParty() {
    buttonTwo.classList.add('lets-party')
    buttonTwo.addEventListener('animationend', removeClass)
    function removeClass() {
        buttonTwo.classList.remove('lets-party')
    }
}

// Button Three 

const buttonThree = document.querySelector('.button-three');

function bigDrop() {
    buttonThree.classList.add('big-drop')
    buttonThree.innerHTML='Weeeeeeeee!';
    buttonThree.addEventListener('animationend', removeClass)
    function removeClass(){
        buttonThree.classList.remove('big-drop')
        buttonThree.innerHTML='What do I do?'
    }
}


