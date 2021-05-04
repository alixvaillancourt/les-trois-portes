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
    alert("UN FANTOME!!! Tu as perdu, ton score est de: " + score + "!");
    score = 0;
    document.getElementById("score").innerHTML = "score = " + score;
});
const porte5 = document.getElementById("porte5");
porte5.addEventListener("click", function (params) {
    alert("Il n'y a pas de fantome ici. Tu peux continuer ton chemin...")

    document.getElementById("score").innerHTML = "score = " + score;
    porte5.style.display = "none"; 
})

function verif() {
    quelPorte();
    if(cP === quelPorte()){
        porte4.style.display = "block";
    }else{
        porte5.style.display = "block";
        score++;
    }
}

function quelPorte() {
    var qP = Math.floor(Math.random() * 3);
    return qP;
}