const startButton = document.querySelector('#startButton');
const scoreElement= document.getElementById('score');
const holeElements= document.querySelectorAll('.hole');
const difficultyButtonElements=document.querySelectorAll('.difficulty-btn');

let score= 0;
let difficultylevel='easy';

const difficultysetting={
    easy:{
        interval:1000
    },
    medium:{
        interval:800
    },
    hard:{
        interval:100
    }
}

let setting=difficultysetting[difficultylevel];

difficultyButtonElements.forEach(function(difficultyButton){
    difficultyButton.addEventListener('click',function(event){
        const button=event.target;
        difficultylevel=button.dataset.difficulty;
        setting=difficultysetting[difficultylevel];

    })
})


startButton.addEventListener('click',function (event){
    score = 0;
    scoreElement.textContent = score;
    startButton.disabled =true;


    let gameInterval=setInterval(function(){
        let randomHole= Math.floor(Math.random() * holeElements.length);
    holeElements[randomHole].classList.add('mole');

    
    setTimeout(function(){
        holeElements[randomHole].classList.remove('mole');
    }, setting.interval)
    },setting.interval)
    
    setTimeout(function(){
        clearInterval(gameInterval);
        alert("Game Over Score is "+ score);
        startButton.disabled=false;
    },10000)




})
holeElements.forEach(function(holeElement){ //score ko lagi ho holeElements ma addeventlistener kam gardai kinaki tyo array ho 
    holeElement.addEventListener('click',function(event){
        let hole=event.target;
        if(hole.classList.contains("mole"))
        {
            score+=2;
            const audio=new Audio('./audio/whack-easy.mp3');
            audio.play();
        }
    })
})


