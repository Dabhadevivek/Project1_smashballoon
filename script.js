var score =0;
var rn;
function makeBubble(){
 var clutter="" ;


for(var i=1;i<=160;i++){
    var rn= Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${rn}</div>`;

}


document.querySelector("#pbtm").innerHTML=clutter;
}
var timer =5 ;
function runTimer(){

    var timeint= setInterval(function (){ 
        if(timer>0){
        timer-- ;
        document.querySelector("#timerval").textContent=timer;
    }
    else{
        clearInterval(timeint);
        document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`
    }

    },1000); 


}

function getNewHit(){
   rn=  Math.floor(Math.random()*10);
    document.querySelector("#hitvar").textContent=rn;

}

function incScore(){
    score +=10;
 document.querySelector("#scorevar").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",function(any){
    var newnum=Number(any.target.textContent)
    if(newnum==rn){
        incScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();
getNewHit();
