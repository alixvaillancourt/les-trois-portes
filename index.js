let cP;
let score = 0;
let vie = 3;

const pv1 = document.getElementById("pv1");
const pv2 = document.getElementById("pv2");
const pv3 = document.getElementById("pv3");

pv1.style.display = "block";
pv2.style.display = "block";
pv3.style.display = "block";

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
    if (vie == 0) {
        alert("UN FANTOME!!! Tu as perdu, ton score est de: " + score + "!");
        score = 0;
        document.getElementById("score").innerHTML = "score = " + score;
        vie = 3;
        pv1.style.display = "block";
        pv2.style.display = "block";
        pv3.style.display = "block";
    }else{
        alert("UN FANTOME!!! Il te reste " + vie + " vie. Continu ton chemin...");
    }

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
        vie--;
        if (vie == 2) {
            pv3.style.display = "none";
        }else if (vie == 1) {
            pv2.style.display = "none";
        }else if (vie == 0) {
            pv1.style.display = "none";
        }{

        }
    }else{
        porte5.style.display = "block";
        score++;
    }
}

function quelPorte() {
    var qP = Math.floor(Math.random() * 3);
    return qP;
}