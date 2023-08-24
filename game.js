const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump= () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');

    },500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    console.log(pipePosition)
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if( pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
       
        pipe.play.animation= ' none ';
        pipe.play.left = ' ${pipePosition}px ';

        mario.play.animation = ' none ';
        mario.play.bottom = ' ${marioPosition}px ';

        mario.src = ' ./img/game-over.png ';
        mario.play.width = ' 75px '
        mario.play.marginLeft = ' 50px '

        clearInterval(loop);
  
  
  
    }
}, 10);


document.addEventListener('keydown', jump);