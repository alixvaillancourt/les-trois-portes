let cP;
let score = 0;

const porte1 = document.getElementById("porte1").addEventListener("click", function(){
    cP = 0;
    console.log("p0");
    verif();
});
const porte2 = document.getElementById("porte2").addEventListener("click", function(){
    cP = 1;
    console.log("p1");
    verif();
});
const porte3 = document.getElementById("porte3").addEventListener("click", function(){
    cP = 2;
    console.log("p3");
    verif();
});
const porte4 = document.getElementById("porte4");
porte4.addEventListener("click", function () {
    porte4.style.display = "none";
    alert("perdu, ton score est de: " + score);
    score = 0;
    document.getElementById("score").innerHTML = "score = " + score;
});
const p1 = document.getElementById("p1");

function verif() {
    quelPorte();
    if(cP === quelPorte()){
        porte4.style.display = "block";
    }else{
        score++;
        document.getElementById("score").innerHTML = "score = " + score;
    }
}

function quelPorte() {
    var qP = Math.floor(Math.random() * 3);
    return qP;
}