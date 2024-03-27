const showWinner=(userscore,compscore,userwin)=>{
    let usernum=document.querySelector("#usersnumber");

    let compnum=document.querySelector("#compsnumber");
    console.log(compscore);
    usernum.innerText=userscore;
    compnum.innerText=compscore;
    let message=document.querySelector("#whowins");
  
    console.log(userwin);
    if(userwin){
        message.innerHTML="YOU WIN THE GAME";
        message.style.backgroundColor="green";
    }
    else{
        message.innerHTML="BETTER LUCK NEXT TIME";
message.style.backgroundColor="red";
    }
}
computerchoice=()=>{


let arr=["rock","paper","scissors"];
    let num=Math.floor(Math.random()*3);
    return arr[num];

}
let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
let userchoice=choice.getAttribute("id");
let compchoice=computerchoice();
console.log(userchoice);
console.log(compchoice);
let userwin=true;
if(userchoice!==compchoice){
    if(userchoice==="rock"){
        if(compchoice==="paper")
        userscore++;
    else{
    compscore++;
userwin=false;
    }}
    else if(userchoice==="paper"){
        if(compchoice==="rock")
        userscore++;
    else{
    compscore++;
    userwin=false;
    }
    }
    else {
            if(compchoice=="paper")
            userscore++;
        else{
        compscore++;
        userwin=false;    
    }
    }
showWinner(userscore,compscore,userwin);
}
else{
let message=document.querySelector("#whowins");
message.innerHTML="its a tie!";
message.style.backgroundColor="blue";
}


    })
});
