const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump = () => {
   mario.classList.add('jump');

   setTimeout(() => {
    mario.classList.remove('jump');
   }, 500)
}

const loop = setInterval(() => {
    const pipePositionX = pipe.offsetLeft;
    const marioPositionY = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = clouds.offsetLeft;

    if(pipePositionX <= 120 && marioPositionY < 80 && pipePositionX > 0){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePositionX}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPositionY}px`;

        mario.src = 'assets/images/marioMorto.gif';
        mario.style.width = '80px';
        mario.style.height = '120px';
        mario.style.marginleft = '0px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudPosition}px`;

        clearInterval(loop);
        }



}, 10)

document.addEventListener('keydown', jump);