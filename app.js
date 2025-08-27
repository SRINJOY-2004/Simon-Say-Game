let gameSeq=[];
let userSeq=[];
let started=false;
let btns=["red","yellow","green","purple"];
let level=0;
let hscore=document.querySelector(".hscore")
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("game started");
        levelUp();
    }
})
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level is ${level}`;
    let randidx=(Math.floor(Math.random()*4));
    let randColor=btns[randidx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },150);
}
function check(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            hscore.innerHTML=`Highest Score: ${level}`;
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerHTML=`Game over! Your Score is ${level-1}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }

}
function btnpress(){
    let btn=this;
    userFlash(btn);
    let color=btn.getAttribute("id");
    userSeq.push(color);
    check(userSeq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(let btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    level=0;
    started=false;
    gameSeq=[];
    userSeq=[];
    score=[];
}