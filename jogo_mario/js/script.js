//dom

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 550)
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <= 144 && pipePosition > 0 && marioPosition <= 100){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'files/game-over.png';
        mario.style.width = '90px'
        mario.style.marginLeft = '60px'

        clearInterval(loop);

    }

}, 10);

//evento e funcao

document.addEventListener('keydown',jump);