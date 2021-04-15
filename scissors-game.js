let displayText = document.getElementById("display");
let scorenowcpu = document.getElementById("scorecpu");
scorenowcpuconst=0;
let scorenowuser = document.getElementById("scoreuser");
scorenowuserconst=0;
let userelection, cpuelection, userelectionP2;
document.getElementById("rockcpu").style.display="none";
document.getElementById("papercpu").style.display="none";
document.getElementById("scissorscpu").style.display="none"; 
document.getElementById("waiting").style.display="block"; 
document.getElementById("rock").style.display="block";
document.getElementById("paper").style.display="block";
document.getElementById("scissors").style.display="block";



function twoPlayers(){
    document.getElementById("rockcpu").style.display="block";
    document.getElementById("papercpu").style.display="block";
    document.getElementById("scissorscpu").style.display="block"; 
    document.getElementById("waiting").style.display="none"; 
    document.getElementById("rock").style.display="block";
    document.getElementById("paper").style.display="block";
    document.getElementById("scissors").style.display="block";
    document.getElementById("secondHeader").innerText="PLAYER TWO";
    document.getElementById("firstHeader").innerText="PLAYER ONE";
}

function alonePlayer(){
    document.getElementById("rockcpu").style.display="none";
    document.getElementById("papercpu").style.display="none";
    document.getElementById("scissorscpu").style.display="none"; 
    document.getElementById("waiting").style.display="block"; 
    document.getElementById("rock").style.display="block";
    document.getElementById("paper").style.display="block";
    document.getElementById("scissors").style.display="block";
    document.getElementById("secondHeader").innerText="CPU MOVE";
    document.getElementById("firstHeader").innerText="YOUR MOVE";
}

function decisionWinnerP1(){
    if(flexRadioDefault2.checked==true){
        displayText.innerText = "Player one Wins!";
        document.getElementById("decision").style.backgroundColor="rgb(181,189,165)";
    }else{
        displayText.innerText = "You Win!";
        document.getElementById("decision").style.backgroundColor="rgba(50,205,50,0.75)";
    }
}

function decisionLoserP1(){
    if(flexRadioDefault2.checked==true){
        displayText.innerText = "Player two Wins!";
        document.getElementById("decision").style.backgroundColor="rgb(181,189,165)";
    }else{
        displayText.innerText = "You Lose!";
        document.getElementById("decision").style.backgroundColor="rgb(255,192,203,0.75)";
    }
}

function visualizationCpu(){
    document.getElementById("submit").style.display="block";
    document.getElementById("waiting").innerText="Waiting for YOUR MOVE";
    flexRadioDefault1.checked=true;
    if(userselection==="scissors"){
        document.getElementById("rock").style.display="none";
        document.getElementById("paper").style.display="none";
    }
    else if(userselection==="rock"){
        document.getElementById("scissors").style.display="none";
        document.getElementById("paper").style.display="none";
    }else{
        document.getElementById("rock").style.display="none";
        document.getElementById("scissors").style.display="none";
    }
}

//User Side//
function SelectionItm(e){
    userselection = e.target.name;
    if(flexRadioDefault1.checked==true){
        visualizationCpu();
    }else if(flexRadioDefault2.checked==true){
        flexRadioDefault2.checked==true
        document.getElementById("rock").style.display="none";
        document.getElementById("scissors").style.display="none";
        document.getElementById("paper").style.display="none";
        document.getElementById("submit").style.display="none";
        document.getElementById("waiting").style.display="block";
        document.getElementById("waiting").innerText="Waiting for  PLAYER TWO";
    }else{
        flexRadioDefault1.checked=true;
        document.getElementById("submit").style.display="block";
        flexRadioDefault1.checked=true;
        if(userselection==="scissors"){
            document.getElementById("rock").style.display="none";
            document.getElementById("paper").style.display="none";
        }
        else if(userselection==="rock"){
            document.getElementById("scissors").style.display="none";
            document.getElementById("paper").style.display="none";
        }else{
            document.getElementById("rock").style.display="none";
            document.getElementById("scissors").style.display="none";
        }
    }
    document.getElementById("cancel").style.display="block";
    document.getElementById("versus").style.display="none";
    document.getElementById("reset").style.display="none";
    document.getElementById("newgame").style.display="block";
    document.getElementById("flexRadioDefault1").disabled=true;
    document.getElementById("flexRadioDefault2").disabled=true;
}

function SelectionItmP2(e){
    cpuelection = e.target.name;
    document.getElementById("rockcpu").style.display="none";
    document.getElementById("scissorscpu").style.display="none";
    document.getElementById("papercpu").style.display="none";
    document.getElementById("submit").style.display="block";
    document.getElementById("cancel").style.display="block";
    document.getElementById("versus").style.display="none";
    document.getElementById("reset").style.display="none";
    document.getElementById("newgame").style.display="block";
    document.getElementById("waiting").innerText="Click Select to continue";
}

function cancelbtn(){
    if(flexRadioDefault1.checked==true){
        document.getElementById("rockcpu").style.display="none";
        document.getElementById("papercpu").style.display="none";
        document.getElementById("scissorscpu").style.display="none"; 
        document.getElementById("waiting").style.display="block";
    }else{
        document.getElementById("rockcpu").style.display="block";
        document.getElementById("papercpu").style.display="block";
        document.getElementById("scissorscpu").style.display="block"; 
        document.getElementById("waiting").style.display="none"; 
    }
    document.getElementById("rock").style.display="block";
    document.getElementById("paper").style.display="block";
    document.getElementById("scissors").style.display="block";
    document.getElementById("submit").style.display="none";
    document.getElementById("cancel").style.display="none";
    document.getElementById("versus").style.display="none";
    document.getElementById("reset").style.display="none";
    document.getElementById("flexRadioDefault1").disabled=true;
    document.getElementById("flexRadioDefault2").disabled=true;
    scorenowuser.style.display="none";
    scorenowcpu.style.display="none";
}

//Cpu side//

function game(){
    document.getElementById("cancel").style.display="none";
    document.getElementById("submit").style.display="none";
    document.getElementById("newgame").style.display="block";
    document.getElementById("versus").style.display="block";
    document.getElementById("waiting").style.display="none"; 
    document.getElementById("decision").style.display="block";
    document.getElementById("reset").style.display="block";
    
    scorenowuser.style.display="block";
    scorenowcpu.style.display="block";
    if(flexRadioDefault1.checked==true){
        let movecpu=["scissors","paper","rock"]
        const random=Math.round(Math.random() * 2);
        cpuelection=movecpu[random]
    }

    if (cpuelection==="scissors"){
        document.getElementById("scissorscpu").style.display="block";
        document.getElementById("papercpu").style.display="none";
        document.getElementById("rockcpu").style.display="none";
        if(cpuelection==="scissors" && userselection==="paper"){
            decisionLoserP1();
            document.getElementById("scissors").style.display="none";
            document.getElementById("paper").style.display="block";
            document.getElementById("rock").style.display="none";
            scorenowcpuconst=scorenowcpuconst+1;
            scorenowcpu.innerText=scorenowcpuconst;
        }else if(cpuelection==="scissors" && userselection==="scissors"){
            displayText.innerText = "Draw!";
            document.getElementById("scissors").style.display="block";
            document.getElementById("paper").style.display="none";
            document.getElementById("rock").style.display="none";
        }else{
            decisionWinnerP1();
            document.getElementById("scissors").style.display="none";
            document.getElementById("paper").style.display="none";
            document.getElementById("rock").style.display="block";
            scorenowuserconst=scorenowuserconst+1;
            scorenowuser.innerText=scorenowuserconst;
        }
    }else if(cpuelection=="rock"){
        document.getElementById("scissorscpu").style.display="none";
        document.getElementById("papercpu").style.display="none";
        document.getElementById("rockcpu").style.display="block";
        console.log(userselection);
        console.log(cpuelection);
        if(cpuelection==="rock" && userselection==="rock"){
            displayText.innerText = "Draw!";
            document.getElementById("decision").style.backgroundColor="rgba(255,255,51,0.75";
            document.getElementById("scissors").style.display="none";
            document.getElementById("paper").style.display="none";
            document.getElementById("rock").style.display="block";
        }else if(cpuelection==="rock" && userselection==="paper"){
            decisionWinnerP1();
            document.getElementById("scissors").style.display="none";
            document.getElementById("paper").style.display="block";
            document.getElementById("rock").style.display="none";
            scorenowuserconst=scorenowuserconst+1;
            scorenowuser.innerText=scorenowuserconst;
        }else{
            decisionLoserP1(); 
            document.getElementById("scissors").style.display="block";
            document.getElementById("paper").style.display="none";
            document.getElementById("rock").style.display="none";
            scorenowcpuconst=scorenowcpuconst+1;
            scorenowcpu.innerText=scorenowcpuconst;
        }
    }else{
        document.getElementById("scissorscpu").style.display="none";
        document.getElementById("papercpu").style.display="block";
        document.getElementById("rockcpu").style.display="none";
        if(cpuelection==="paper" && userselection==="rock"){
            decisionLoserP1();
            document.getElementById("scissors").style.display="none";
            document.getElementById("paper").style.display="none";
            document.getElementById("rock").style.display="block";
            scorenowcpuconst=scorenowcpuconst+1;
            scorenowcpu.innerText=scorenowcpuconst;
        }else if(cpuelection==="paper" && userselection==="paper"){
            displayText.innerText = "Draw!";
            document.getElementById("decision").style.backgroundColor="rgba(255,255,51,0.75";
            document.getElementById("scissors").style.display="none";
            document.getElementById("paper").style.display="block";
            document.getElementById("rock").style.display="none";
        }else{
            decisionWinnerP1();
            document.getElementById("scissorscpu").style.display="none";
            document.getElementById("papercpu").style.display="block";
            document.getElementById("rockcpu").style.display="none";
            scorenowuserconst=scorenowuserconst+1;
            scorenowuser.innerText=scorenowuserconst;
        }
    }    
      
}

function newgamebtn(){
    if(flexRadioDefault1.checked=true){
        document.getElementById("rock").style.display="block";
        document.getElementById("paper").style.display="block";
        document.getElementById("scissors").style.display="block";
        document.getElementById("rockcpu").style.display="none";
        document.getElementById("papercpu").style.display="none";
        document.getElementById("scissorscpu").style.display="none";
        document.getElementById("decision").style.display="none";
        document.getElementById("reset").style.display="none";
        document.getElementById("waiting").style.display="block";
        document.getElementById("newgame").style.display="none";
        document.getElementById("versus").style.display="none";
        document.getElementById("flexRadioDefault1").disabled=false;
        document.getElementById("flexRadioDefault2").disabled=false;
        scorenowuser.style.display="none";
        scorenowcpu.style.display="none";
    }else{
        document.getElementById("rock").style.display="block";
        document.getElementById("paper").style.display="block";
        document.getElementById("scissors").style.display="block";
        document.getElementById("rockcpu").style.display="block";
        document.getElementById("papercpu").style.display="block";
        document.getElementById("scissorscpu").style.display="block";
        document.getElementById("decision").style.display="none";
        document.getElementById("reset").style.display="none";
        document.getElementById("waiting").style.display="block";
        document.getElementById("newgame").style.display="none";
        document.getElementById("versus").style.display="none";
        scorenowuser.style.display="none";
        scorenowcpu.style.display="none";
    }
}

function decisionbtn(){
    document.getElementById("decision").style.display="none";
}

function resetbtn(){
    scorenowuserconst=0
    scorenowuser.innerText=scorenowuserconst;
    scorenowcpuconst=0
    scorenowcpu.innerText=scorenowcpuconst;
}
 
document.getElementById("submit").addEventListener("click",game);
document.getElementById("cancel").addEventListener("click",cancelbtn);
document.getElementById("newgame").addEventListener("click",newgamebtn);
document.getElementById("decisionaccept").addEventListener("click",decisionbtn);
document.getElementById("reset").addEventListener("click",resetbtn);
document.getElementById("scissors").addEventListener("click",SelectionItm);
document.getElementById("paper").addEventListener("click",SelectionItm);
document.getElementById("rock").addEventListener("click",SelectionItm);
document.getElementById("scissorscpu").addEventListener("click",SelectionItmP2);
document.getElementById("papercpu").addEventListener("click",SelectionItmP2);
document.getElementById("rockcpu").addEventListener("click",SelectionItmP2);
document.getElementById("flexRadioDefault2").addEventListener("click",twoPlayers);
document.getElementById("flexRadioDefault1").addEventListener("click",alonePlayer);



    
    
