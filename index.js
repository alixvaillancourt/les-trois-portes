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

function verif() {
    quelPorte();
    if(cP === quelPorte()){
        alert("perdu, ton score est de: " + score);
        score = 0;
        document.getElementById("score").innerHTML = "score = " + score;
    }else{
        score++;
        alert("bonne porte!");
        document.getElementById("score").innerHTML = "score = " + score;
        
    }
}

function quelPorte() {
    var qP = Math.floor(Math.random() * 3);
    return qP;
}